"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { HiChevronLeft, HiChevronRight, HiExclamationCircle } from "react-icons/hi";
import TutorList from "@/components/tutors/TutorList";
import TutorFilters, {
  experienceOptions,
  ratingOptions,
  teachingModeOptions,
} from "@/components/tutors/TutorFilters";
import { getTutors } from "@/lib/api/tutors";

const PAGE_SIZE = 6;

const DEFAULT_FILTERS = {
  subject: "All Subjects",
  location: "All Locations",
  experience: experienceOptions[0],
  rating: ratingOptions[0],
  teachingMode: teachingModeOptions[0],
  verifiedOnly: false,
};

const EXPERIENCE_THRESHOLDS = { "1+ Years": 1, "3+ Years": 3, "5+ Years": 5, "8+ Years": 8 };
const RATING_THRESHOLDS = { "4.5+": 4.5, "4.7+": 4.7, "4.9+": 4.9 };

const SORT_OPTIONS = [
  "Recommended",
  "Highest Rated",
  "Most Experienced",
  "Lowest Hourly Rate",
  "Highest Hourly Rate",
];

function filterTutors(tutors, search, filters) {
  const query = search.trim().toLowerCase();

  return tutors.filter((tutor) => {
    const matchesSearch =
      !query ||
      tutor.name.toLowerCase().includes(query) ||
      tutor.title.toLowerCase().includes(query) ||
      tutor.location.toLowerCase().includes(query) ||
      tutor.subjects.some((s) => s.toLowerCase().includes(query)) ||
      tutor.expertise.some((e) => e.toLowerCase().includes(query));

    const matchesSubject =
      filters.subject === "All Subjects" ||
      tutor.subjects.includes(filters.subject) ||
      tutor.expertise.includes(filters.subject);

    const matchesLocation =
      filters.location === "All Locations" ||
      tutor.location === filters.location;

    const experienceThreshold = EXPERIENCE_THRESHOLDS[filters.experience];
    const matchesExperience =
      !experienceThreshold || tutor.experience >= experienceThreshold;

    const ratingThreshold = RATING_THRESHOLDS[filters.rating];
    const matchesRating = !ratingThreshold || tutor.rating >= ratingThreshold;

    const matchesTeachingMode =
      filters.teachingMode === "Any Mode" ||
      tutor.teachingMode.includes(filters.teachingMode);

    const matchesVerified = !filters.verifiedOnly || tutor.verified;

    return (
      matchesSearch &&
      matchesSubject &&
      matchesLocation &&
      matchesExperience &&
      matchesRating &&
      matchesTeachingMode &&
      matchesVerified
    );
  });
}

function sortTutors(tutors, sortBy) {
  const sorted = [...tutors];
  switch (sortBy) {
    case "Highest Rated":
      return sorted.sort((a, b) => b.rating - a.rating);
    case "Most Experienced":
      return sorted.sort((a, b) => b.experience - a.experience);
    case "Lowest Hourly Rate":
      return sorted.sort((a, b) => a.hourlyRate - b.hourlyRate);
    case "Highest Hourly Rate":
      return sorted.sort((a, b) => b.hourlyRate - a.hourlyRate);
    case "Recommended":
    default:
      return sorted.sort(
        (a, b) => b.rating - a.rating || b.reviews - a.reviews
      );
  }
}

function TutorCardSkeleton() {
  return (
    <li className="flex h-full flex-col items-center rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
      <div className="h-20 w-20 animate-pulse rounded-full bg-slate-100" />
      <div className="mt-4 h-4 w-32 animate-pulse rounded bg-slate-100" />
      <div className="mt-2 h-3 w-24 animate-pulse rounded bg-slate-100" />
      <div className="mt-6 h-16 w-full animate-pulse rounded-xl bg-slate-50" />
      <div className="mt-5 h-10 w-full animate-pulse rounded-lg bg-slate-100" />
    </li>
  );
}

export default function TutorsPage() {
  const shouldReduceMotion = useReducedMotion();

  const [tutors, setTutors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  const [sortBy, setSortBy] = useState(SORT_OPTIONS[0]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchTutors = useCallback(async () => {
    setLoading(true);
    setError(false);
    try {
      const data = await getTutors();
      setTutors(data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTutors();
  }, [fetchTutors]);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, filters, sortBy]);

  const subjectOptions = useMemo(() => {
    const unique = new Set();
    tutors.forEach((tutor) => tutor.subjects.forEach((s) => unique.add(s)));
    return ["All Subjects", ...Array.from(unique).sort()];
  }, [tutors]);

  const locationOptions = useMemo(() => {
    const unique = new Set(tutors.map((tutor) => tutor.location));
    return ["All Locations", ...Array.from(unique).sort()];
  }, [tutors]);

  const filteredTutors = useMemo(
    () => filterTutors(tutors, search, filters),
    [tutors, search, filters]
  );

  const sortedTutors = useMemo(
    () => sortTutors(filteredTutors, sortBy),
    [filteredTutors, sortBy]
  );

  const totalPages = Math.max(1, Math.ceil(sortedTutors.length / PAGE_SIZE));
  const safePage = Math.min(currentPage, totalPages);
  const paginatedTutors = sortedTutors.slice(
    (safePage - 1) * PAGE_SIZE,
    safePage * PAGE_SIZE
  );

  const handleClearFilters = () => {
    setSearch("");
    setFilters(DEFAULT_FILTERS);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <main className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-medium text-emerald-700 sm:text-sm">
            Trusted Tutors
          </span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Find the Right Tutor
          </h1>
          <p className="mt-3 text-base leading-relaxed text-slate-500 sm:text-lg">
            Browse qualified tutors and filter by subject, location,
            experience, and more.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
          className="mt-10"
        >
          <TutorFilters
            search={search}
            setSearch={setSearch}
            filters={filters}
            setFilters={setFilters}
            subjectOptions={subjectOptions}
            locationOptions={locationOptions}
            onClear={handleClearFilters}
          />
        </motion.div>

        {!loading && !error && (
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
                Available Tutors
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Showing {sortedTutors.length} tutor
                {sortedTutors.length !== 1 ? "s" : ""}
              </p>
            </div>

            <label className="flex items-center gap-2 text-sm text-slate-600">
              <span className="shrink-0">Sort by:</span>
              <select
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
                className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 transition-colors duration-200 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
              >
                {SORT_OPTIONS.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>
          </div>
        )}

        <div className="mt-6">
          {loading && (
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: PAGE_SIZE }).map((_, index) => (
                <TutorCardSkeleton key={index} />
              ))}
            </ul>
          )}

          {!loading && error && (
            <div className="flex flex-col items-center rounded-2xl border border-slate-100 bg-white px-6 py-16 text-center shadow-sm">
              <HiExclamationCircle
                className="h-10 w-10 text-red-400"
                aria-hidden="true"
              />
              <h3 className="mt-4 text-lg font-bold text-slate-900">
                Unable to load tutors.
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Something went wrong while fetching tutors. Please try again.
              </p>
              <button
                type="button"
                onClick={fetchTutors}
                className="mt-5 rounded-lg bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-emerald-700"
              >
                Try Again
              </button>
            </div>
          )}

          {!loading && !error && sortedTutors.length === 0 && (
            <div className="flex flex-col items-center rounded-2xl border border-slate-100 bg-white px-6 py-16 text-center shadow-sm">
              <h3 className="text-lg font-bold text-slate-900">
                No tutors found
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Try changing your search or filters.
              </p>
              <button
                type="button"
                onClick={handleClearFilters}
                className="mt-5 rounded-lg border border-emerald-600 px-6 py-2.5 text-sm font-semibold text-emerald-700 transition-colors duration-200 hover:bg-emerald-50"
              >
                Clear Filters
              </button>
            </div>
          )}

          {!loading && !error && sortedTutors.length > 0 && (
            <TutorList tutors={paginatedTutors} />
          )}
        </div>

        {!loading && !error && sortedTutors.length > 0 && (
          <nav
            aria-label="Pagination"
            className="mt-12 flex items-center justify-center gap-2"
          >
            <button
              type="button"
              disabled={safePage === 1}
              onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3.5 py-2 text-sm font-medium text-slate-600 transition-colors duration-200 hover:bg-emerald-50 hover:text-emerald-700 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-slate-600"
            >
              <HiChevronLeft className="h-4 w-4" aria-hidden="true" />
              Previous
            </button>

            {Array.from({ length: totalPages }).map((_, index) => {
              const page = index + 1;
              const isActive = page === safePage;
              return (
                <button
                  key={page}
                  type="button"
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setCurrentPage(page)}
                  className={`h-9 w-9 rounded-lg text-sm font-semibold transition-colors duration-200 ${
                    isActive
                      ? "bg-emerald-600 text-white shadow-sm"
                      : "text-slate-600 hover:bg-emerald-50 hover:text-emerald-700"
                  }`}
                >
                  {page}
                </button>
              );
            })}

            <button
              type="button"
              disabled={safePage === totalPages}
              onClick={() =>
                setCurrentPage((page) => Math.min(totalPages, page + 1))
              }
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3.5 py-2 text-sm font-medium text-slate-600 transition-colors duration-200 hover:bg-emerald-50 hover:text-emerald-700 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-slate-600"
            >
              Next
              <HiChevronRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </nav>
        )}
      </div>
    </main>
  );
}
"use client";

import { HiSearch, HiOutlineRefresh } from "react-icons/hi";

export const experienceOptions = [
  "Any Experience",
  "1+ Years",
  "3+ Years",
  "5+ Years",
  "8+ Years",
];

export const ratingOptions = ["Any Rating", "4.5+", "4.7+", "4.9+"];

export const teachingModeOptions = ["Any Mode", "Online", "Home Tutoring"];

const selectClasses =
  "w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-700 transition-colors duration-200 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20";

export default function TutorFilters({
  search,
  setSearch,
  filters,
  setFilters,
  subjectOptions = ["All Subjects"],
  locationOptions = ["All Locations"],
  onClear,
}) {
  const updateFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6">
      <div className="relative">
        <HiSearch
          className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
          aria-hidden="true"
        />
        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search by name, subject or location..."
          className="w-full rounded-lg border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm text-slate-700 transition-colors duration-200 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
        />
      </div>

      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
        <label className="block">
          <span className="sr-only">Subject</span>
          <select
            value={filters.subject}
            onChange={(event) => updateFilter("subject", event.target.value)}
            className={selectClasses}
          >
            {subjectOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="sr-only">Location</span>
          <select
            value={filters.location}
            onChange={(event) => updateFilter("location", event.target.value)}
            className={selectClasses}
          >
            {locationOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="sr-only">Experience</span>
          <select
            value={filters.experience}
            onChange={(event) => updateFilter("experience", event.target.value)}
            className={selectClasses}
          >
            {experienceOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="sr-only">Rating</span>
          <select
            value={filters.rating}
            onChange={(event) => updateFilter("rating", event.target.value)}
            className={selectClasses}
          >
            {ratingOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="sr-only">Teaching Mode</span>
          <select
            value={filters.teachingMode}
            onChange={(event) =>
              updateFilter("teachingMode", event.target.value)
            }
            className={selectClasses}
          >
            {teachingModeOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
      </div>

      {/* Verified toggle + Clear filters */}
      <div className="mt-4 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <label className="inline-flex cursor-pointer items-center gap-2.5 text-sm font-medium text-slate-600">
          <span className="relative inline-flex h-5 w-9 shrink-0 items-center">
            <input
              type="checkbox"
              checked={filters.verifiedOnly}
              onChange={(event) =>
                updateFilter("verifiedOnly", event.target.checked)
              }
              className="peer sr-only"
            />
            <span className="absolute inset-0 rounded-full bg-slate-200 transition-colors duration-200 peer-checked:bg-emerald-600" />
            <span className="absolute left-0.5 h-4 w-4 rounded-full bg-white shadow transition-transform duration-200 peer-checked:translate-x-4" />
          </span>
          Verified Tutors Only
        </label>

        <button
          type="button"
          onClick={onClear}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition-colors duration-200 hover:text-emerald-600"
        >
          <HiOutlineRefresh className="h-4 w-4" aria-hidden="true" />
          Clear Filters
        </button>
      </div>
    </div>
  );
}

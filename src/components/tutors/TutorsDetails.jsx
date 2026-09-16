"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  HiArrowLeft,
  HiOutlineLocationMarker,
  HiOutlineBriefcase,
  HiOutlineAcademicCap,
  HiOutlineCash,
  HiStar,
  HiCheckCircle,
  HiOutlineClock,
  HiBadgeCheck,
} from "react-icons/hi";
import TutorCard from "@/components/tutors/TutorCard";

// Derive initials for the placeholder avatar
function getInitials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function TutorDetails({ tutor, relatedTutors = [] }) {
  /*
   * IMPORTANT:
   * No useReducedMotion() here.
   * It can cause server/client hydration differences.
   */

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const fadeIn = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const gridVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const quickInfo = [
    {
      label: "Rating",
      value: `${tutor.rating} / 5`,
      icon: HiStar,
    },
    {
      label: "Reviews",
      value: `${tutor.reviews} Reviews`,
      icon: HiCheckCircle,
    },
    {
      label: "Experience",
      value: `${tutor.experience} Years`,
      icon: HiOutlineBriefcase,
    },
    {
      label: "Location",
      value: tutor.location,
      icon: HiOutlineLocationMarker,
    },
    {
      label: "Teaching Mode",
      value: tutor.teachingMode.join(", "),
      icon: HiOutlineClock,
    },
    {
      label: "Hourly Rate",
      value: `৳${tutor.hourlyRate.toLocaleString()}/hour`,
      icon: HiOutlineCash,
    },
  ];

  return (
    <main className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        {/* Back to Tutors */}
        <motion.div
          variants={fadeIn}
          initial={false}
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Link
            href="/tutors"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition-colors duration-200 hover:text-emerald-600"
          >
            <HiArrowLeft
              className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1"
              aria-hidden="true"
            />
            Back to Tutors
          </Link>
        </motion.div>

        {/* Main Layout */}
        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-start lg:gap-10">
          {/* Left Column */}
          <div className="space-y-8 lg:col-span-2">
            {/* Tutor Profile Header */}
            <motion.section
              variants={fadeUp}
              initial={false}
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8"
            >
              <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left">
                {/* Avatar */}
                <div className="relative shrink-0">
                  {tutor.image ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={tutor.image}
                      alt={`Photo of ${tutor.name}`}
                      className="h-24 w-24 rounded-full object-cover shadow-sm"
                    />
                  ) : (
                    <div
                      className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 text-2xl font-bold text-white shadow-sm"
                      role="img"
                      aria-label={`${tutor.name}'s initials`}
                    >
                      {getInitials(tutor.name)}
                    </div>
                  )}

                  {tutor.verified && (
                    <span
                      className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-white text-emerald-600 shadow"
                      title="Verified Tutor"
                    >
                      <HiBadgeCheck
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                    </span>
                  )}
                </div>

                <div>
                  <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                    {tutor.name}
                  </h1>

                  <p className="mt-1 text-sm font-medium text-emerald-700 sm:text-base">
                    {tutor.title}
                  </p>

                  {tutor.verified && (
                    <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
                      <HiBadgeCheck
                        className="h-4 w-4"
                        aria-hidden="true"
                      />
                      Verified Tutor
                    </span>
                  )}

                  <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-slate-600 sm:justify-start">
                    <span className="flex items-center gap-1.5">
                      <HiStar
                        className="h-4 w-4 text-amber-400"
                        aria-hidden="true"
                      />

                      <span className="font-semibold text-slate-800">
                        {tutor.rating}
                      </span>

                      <span className="text-slate-400">
                        ({tutor.reviews} reviews)
                      </span>
                    </span>

                    <span className="flex items-center gap-1.5">
                      <HiOutlineBriefcase
                        className="h-4 w-4 text-slate-400"
                        aria-hidden="true"
                      />
                      {tutor.experience} Years Experience
                    </span>

                    <span className="flex items-center gap-1.5">
                      <HiOutlineLocationMarker
                        className="h-4 w-4 text-slate-400"
                        aria-hidden="true"
                      />
                      {tutor.location}
                    </span>
                  </div>

                  <p className="mt-2 flex items-center justify-center gap-1.5 text-sm text-slate-500 sm:justify-start">
                    <HiOutlineAcademicCap
                      className="h-4 w-4 text-slate-400"
                      aria-hidden="true"
                    />
                    {tutor.education}
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Quick Info */}
            <motion.section
              variants={fadeUp}
              initial={false}
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8"
            >
              <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {quickInfo.map(({ label, value, icon: Icon }) => (
                  <div key={label} className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                      <Icon
                        className="h-[18px] w-[18px]"
                        aria-hidden="true"
                      />
                    </span>

                    <div>
                      <dt className="text-xs text-slate-500">{label}</dt>

                      <dd className="text-sm font-semibold text-slate-800">
                        {value}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>
            </motion.section>

            {/* About Tutor */}
            <motion.section
              variants={fadeUp}
              initial={false}
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8"
            >
              <h2 className="text-lg font-bold text-slate-900">
                About Tutor
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                {tutor.bio}
              </p>
            </motion.section>

            {/* Subjects & Expertise */}
            <motion.section
              variants={fadeUp}
              initial={false}
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8"
            >
              <h2 className="text-lg font-bold text-slate-900">
                Subjects &amp; Expertise
              </h2>

              <div className="mt-4">
                <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                  Subjects
                </p>

                <div className="mt-2 flex flex-wrap gap-2">
                  {tutor.subjects.map((subject) => (
                    <span
                      key={subject}
                      className="rounded-full bg-emerald-50 px-3 py-1.5 text-sm font-medium text-emerald-700"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4">
                <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                  Expertise
                </p>

                <div className="mt-2 flex flex-wrap gap-2">
                  {tutor.expertise.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-600"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* Education & Experience */}
            <motion.section
              variants={fadeUp}
              initial={false}
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8"
            >
              <h2 className="text-lg font-bold text-slate-900">
                Education &amp; Experience
              </h2>

              <div className="mt-4 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                    <HiOutlineAcademicCap
                      className="h-[18px] w-[18px]"
                      aria-hidden="true"
                    />
                  </span>

                  <div>
                    <p className="text-xs text-slate-500">Education</p>

                    <p className="text-sm font-semibold text-slate-800">
                      {tutor.education}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                    <HiOutlineBriefcase
                      className="h-[18px] w-[18px]"
                      aria-hidden="true"
                    />
                  </span>

                  <div>
                    <p className="text-xs text-slate-500">Experience</p>

                    <p className="text-sm font-semibold text-slate-800">
                      {tutor.experience} Years Experience
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Teaching Mode */}
            <motion.section
              variants={fadeUp}
              initial={false}
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8"
            >
              <h2 className="text-lg font-bold text-slate-900">
                Teaching Mode
              </h2>

              <div className="mt-4 flex flex-wrap gap-2">
                {tutor.teachingMode.map((mode) => (
                  <span
                    key={mode}
                    className="rounded-full bg-emerald-50 px-3 py-1.5 text-sm font-medium text-emerald-700"
                  >
                    {mode}
                  </span>
                ))}
              </div>
            </motion.section>

            {/* Availability */}
            <motion.section
              variants={fadeUp}
              initial={false}
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8"
            >
              <h2 className="text-lg font-bold text-slate-900">
                Availability
              </h2>

              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                    <HiOutlineClock
                      className="h-[18px] w-[18px]"
                      aria-hidden="true"
                    />
                  </span>

                  <div>
                    <p className="text-xs text-slate-500">
                      Available Days
                    </p>

                    <p className="text-sm font-semibold text-slate-800">
                      {tutor.availableDays.join(", ")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                    <HiOutlineClock
                      className="h-[18px] w-[18px]"
                      aria-hidden="true"
                    />
                  </span>

                  <div>
                    <p className="text-xs text-slate-500">
                      Available Time
                    </p>

                    <p className="text-sm font-semibold text-slate-800">
                      {tutor.availableTime}
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Location & Rate */}
            <motion.section
              variants={fadeUp}
              initial={false}
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8"
            >
              <h2 className="text-lg font-bold text-slate-900">
                Location &amp; Rate
              </h2>

              <dl className="mt-4 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 text-sm sm:text-base">
                  <dt className="text-slate-500">Location</dt>

                  <dd className="font-semibold text-slate-800">
                    {tutor.location}
                  </dd>
                </div>

                <div className="flex items-center justify-between border-b border-slate-100 pb-3 text-sm sm:text-base">
                  <dt className="text-slate-500">Hourly Rate</dt>

                  <dd className="font-semibold text-emerald-700">
                    ৳{tutor.hourlyRate.toLocaleString()}/hour
                  </dd>
                </div>
              </dl>
            </motion.section>
          </div>

          {/* Right Column */}
          <motion.aside
            variants={fadeUp}
            initial={false}
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8 lg:sticky lg:top-24"
          >
            <h2 className="text-lg font-bold text-slate-900">
              Interested in this tutor?
            </h2>

            <p className="mt-2 text-sm leading-relaxed text-slate-500">
              Connect with this tutor and start your learning journey.
            </p>

            <div className="mt-5 rounded-xl bg-emerald-50/70 px-4 py-3">
              <p className="text-xs font-medium uppercase tracking-wide text-emerald-700/80">
                Hourly Rate
              </p>

              <p className="text-xl font-bold text-emerald-700">
                ৳{tutor.hourlyRate.toLocaleString()}

                <span className="ml-1 text-sm font-medium text-emerald-700/70">
                  /hour
                </span>
              </p>
            </div>

            <button
              type="button"
              className="mt-5 w-full rounded-lg bg-emerald-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
            >
              Request This Tutor
            </button>

            <button
              type="button"
              className="mt-3 w-full rounded-lg border border-emerald-600 px-6 py-3.5 text-sm font-semibold text-emerald-700 transition-colors duration-200 hover:bg-emerald-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
            >
              Contact Tutor
            </button>
          </motion.aside>
        </div>

        {/* Related Tutors */}
        {relatedTutors.length > 0 && (
          <section className="mt-14">
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
              Related Tutors
            </h2>

            <motion.ul
              variants={gridVariants}
              initial={false}
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {relatedTutors.slice(0, 3).map((related) => (
                <TutorCard
                  key={related.id}
                  tutor={related}
                  variants={cardVariants}
                />
              ))}
            </motion.ul>
          </section>
        )}
      </div>
    </main>
  );
}
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  HiArrowLeft,
  HiOutlineAcademicCap,
  HiOutlineLocationMarker,
  HiOutlineCalendar,
  HiOutlineClock,
  HiCheckCircle,
} from "react-icons/hi";
import TuitionCard from "@/components/tuitions/TuitionCard";

export default function TuitionDetails({ tuition, relatedTuitions = [] }) {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
  };

  const gridVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: shouldReduceMotion ? 0 : 0.08 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const requirements = [
    `Strong knowledge of ${tuition.subject}`,
    "Previous teaching experience preferred",
    `Available ${tuition.schedule}`,
    `Comfortable teaching in the ${tuition.preferredTime.toLowerCase()}`,
    "Able to maintain a consistent learning schedule",
  ];

  const quickInfo = [
    {
      label: "Class",
      value: tuition.class,
      icon: HiOutlineAcademicCap,
    },
    {
      label: "Location",
      value: tuition.location,
      icon: HiOutlineLocationMarker,
    },
    {
      label: "Schedule",
      value: tuition.schedule,
      icon: HiOutlineCalendar,
    },
    {
      label: "Preferred Time",
      value: tuition.preferredTime,
      icon: HiOutlineClock,
    },
    {
      label: "Posted",
      value: tuition.posted,
      icon: HiOutlineClock,
    },
    {
      label: "Budget",
      value: `৳${tuition.budget.toLocaleString()}/month`,
      icon: null,
    },
  ];

  const infoRows = [
    { label: "Subject", value: tuition.subject },
    { label: "Class", value: tuition.class },
    { label: "Location", value: tuition.location },
    { label: "Monthly Budget", value: `৳${tuition.budget.toLocaleString()}` },
    { label: "Schedule", value: tuition.schedule },
    { label: "Preferred Time", value: tuition.preferredTime },
    { label: "Posted", value: tuition.posted },
    { label: "Status", value: tuition.status },
  ];

  return (
    <main className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <motion.div variants={fadeIn} initial="hidden" animate="visible">
          <Link
            href="/tuitions"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition-colors duration-200 hover:text-emerald-600"
          >
            <HiArrowLeft
              className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1"
              aria-hidden="true"
            />
            Back to Tuitions
          </Link>
        </motion.div>

        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-start lg:gap-10">
          <div className="space-y-8 lg:col-span-2">
            <motion.section
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                    {tuition.subject}
                  </h1>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-500">
                    <HiOutlineAcademicCap
                      className="h-4 w-4 text-emerald-600"
                      aria-hidden="true"
                    />
                    {tuition.class}
                    <span className="text-slate-300">•</span>
                    <HiOutlineLocationMarker
                      className="h-4 w-4 text-emerald-600"
                      aria-hidden="true"
                    />
                    {tuition.location}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 sm:text-sm">
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-emerald-500"
                    aria-hidden="true"
                  />
                  {tuition.status}
                </span>
              </div>

              <div className="mt-6 inline-flex flex-col rounded-xl bg-emerald-50/70 px-5 py-3">
                <span className="text-xs font-medium uppercase tracking-wide text-emerald-700/80">
                  Monthly Budget
                </span>
                <span className="text-2xl font-bold text-emerald-700 sm:text-3xl">
                  ৳{tuition.budget.toLocaleString()}
                  <span className="ml-1 text-sm font-medium text-emerald-700/70">
                    /month
                  </span>
                </span>
              </div>

              <dl className="mt-8 grid grid-cols-1 gap-4 border-t border-slate-100 pt-6 sm:grid-cols-2 lg:grid-cols-3">
                {quickInfo.map(({ label, value, icon: Icon }) => (
                  <div key={label} className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                      {Icon ? (
                        <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                      ) : (
                        <span className="text-sm font-bold">৳</span>
                      )}
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
            ={" "}
            <motion.section
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8"
            >
              <h2 className="text-lg font-bold text-slate-900">
                Tuition Overview
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                This tuition is looking for a dedicated tutor to help a{" "}
                {tuition.class} student improve their {tuition.subject} skills
                through regular and focused lessons.
              </p>
            </motion.section>
            <motion.section
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8"
            >
              <h2 className="text-lg font-bold text-slate-900">
                Tutor Requirements
              </h2>
              <ul className="mt-4 space-y-3">
                {requirements.map((requirement) => (
                  <li
                    key={requirement}
                    className="flex items-start gap-2.5 text-sm text-slate-600 sm:text-base"
                  >
                    <HiCheckCircle
                      className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600"
                      aria-hidden="true"
                    />
                    {requirement}
                  </li>
                ))}
              </ul>
            </motion.section>
            <motion.section
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8"
            >
              <h2 className="text-lg font-bold text-slate-900">
                Tuition Information
              </h2>
              <dl className="mt-4 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                {infoRows.map(({ label, value }) => (
                  <div
                    key={label}
                    className="flex items-center justify-between border-b border-slate-100 pb-3 text-sm sm:text-base"
                  >
                    <dt className="text-slate-500">{label}</dt>
                    <dd className="font-semibold text-slate-800">{value}</dd>
                  </div>
                ))}
              </dl>
            </motion.section>
          </div>

          <motion.aside
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8 lg:sticky lg:top-24"
          >
            <h2 className="text-lg font-bold text-slate-900">
              Interested in this tuition?
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">
              Apply now and connect with the student/guardian.
            </p>

            <div className="mt-5 rounded-xl bg-emerald-50/70 px-4 py-3">
              <p className="text-xs font-medium uppercase tracking-wide text-emerald-700/80">
                Monthly Budget
              </p>
              <p className="text-xl font-bold text-emerald-700">
                ৳{tuition.budget.toLocaleString()}
                <span className="ml-1 text-sm font-medium text-emerald-700/70">
                  /month
                </span>
              </p>
            </div>

            <button
              type="button"
              className="mt-5 w-full rounded-lg bg-emerald-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
            >
              Apply for Tuition
            </button>
          </motion.aside>
        </div>

        {relatedTuitions.length > 0 && (
          <section className="mt-14">
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
              Related Tuitions
            </h2>
            <motion.ul
              variants={gridVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {relatedTuitions.map((related) => (
                <TuitionCard
                  key={related.id}
                  tuition={related}
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

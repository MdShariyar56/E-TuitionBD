"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  HiOutlineAcademicCap,
  HiOutlineLocationMarker,
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineClock as HiOutlinePostedClock,
  HiArrowRight,
} from "react-icons/hi";

export default function TuitionCard({ tuition, variants }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.li
      variants={variants}
      whileHover={shouldReduceMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-shadow duration-200 hover:border-emerald-100 hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-bold text-slate-900">
            {tuition.subject}
          </h3>
          <p className="mt-0.5 flex items-center gap-1.5 text-sm text-slate-500">
            <HiOutlineAcademicCap
              className="h-4 w-4 text-emerald-600"
              aria-hidden="true"
            />
            {tuition.class}
          </p>
        </div>
        <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
          <span
            className="h-1.5 w-1.5 rounded-full bg-emerald-500"
            aria-hidden="true"
          />
          {tuition.status}
        </span>
      </div>

      <dl className="mt-4 space-y-2 text-sm text-slate-600">
        <div className="flex items-center gap-2">
          <dt className="sr-only">Location</dt>
          <HiOutlineLocationMarker
            className="h-4 w-4 shrink-0 text-slate-400"
            aria-hidden="true"
          />
          <dd>{tuition.location}</dd>
        </div>
        <div className="flex items-center gap-2">
          <dt className="sr-only">Schedule</dt>
          <HiOutlineCalendar
            className="h-4 w-4 shrink-0 text-slate-400"
            aria-hidden="true"
          />
          <dd>{tuition.schedule}</dd>
        </div>
        <div className="flex items-center gap-2">
          <dt className="sr-only">Preferred time</dt>
          <HiOutlineClock
            className="h-4 w-4 shrink-0 text-slate-400"
            aria-hidden="true"
          />
          <dd>{tuition.preferredTime}</dd>
        </div>
        <div className="flex items-center gap-2">
          <dt className="sr-only">Posted</dt>
          <HiOutlinePostedClock
            className="h-4 w-4 shrink-0 text-slate-400"
            aria-hidden="true"
          />
          <dd>Posted {tuition.posted}</dd>
        </div>
      </dl>

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

      <Link
        href={`/tuitions/${tuition.id}`}
        className="mt-5 inline-flex items-center justify-center gap-1.5 rounded-lg border border-emerald-600 px-4 py-2.5 text-sm font-semibold text-emerald-700 transition-colors duration-200 hover:bg-emerald-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
      >
        View Details
        <HiArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </motion.li>
  );
}

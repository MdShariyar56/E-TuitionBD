"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  HiOutlineLocationMarker,
  HiOutlineBriefcase,
  HiOutlineAcademicCap,
  HiStar,
  HiBadgeCheck,
  HiArrowRight,
} from "react-icons/hi";

function getInitials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function TutorCard({ tutor, variants }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.li
      variants={variants}
      whileHover={shouldReduceMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm transition-shadow duration-200 hover:border-emerald-100 hover:shadow-md"
    >
      <div className="relative mx-auto">
        <div
          className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 text-xl font-bold text-white shadow-sm"
          aria-hidden="true"
        >
          {getInitials(tutor.name)}
        </div>
        {tutor.verified && (
          <span
            className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-white text-emerald-600 shadow"
            title="Verified Tutor"
          >
            <HiBadgeCheck className="h-5 w-5" />
          </span>
        )}
      </div>

      <h3 className="mt-4 text-lg font-bold text-slate-900">{tutor.name}</h3>
      <p className="text-sm font-medium text-emerald-700">{tutor.title}</p>

      <div className="mt-2 flex items-center justify-center gap-1.5 text-sm">
        <HiStar className="h-4 w-4 text-amber-400" aria-hidden="true" />
        <span className="font-semibold text-slate-800">{tutor.rating}</span>
        <span className="text-slate-400">({tutor.reviews} reviews)</span>
      </div>

      <div className="mt-4 w-full space-y-2 border-t border-slate-100 pt-4 text-left text-sm text-slate-600">
        <div className="flex items-center gap-2">
          <HiOutlineBriefcase
            className="h-4 w-4 shrink-0 text-slate-400"
            aria-hidden="true"
          />
          <span>{tutor.experience} Years Experience</span>
        </div>
        <div className="flex items-center gap-2">
          <HiOutlineLocationMarker
            className="h-4 w-4 shrink-0 text-slate-400"
            aria-hidden="true"
          />
          <span>{tutor.location}</span>
        </div>
        <div className="flex items-center gap-2">
          <HiOutlineAcademicCap
            className="h-4 w-4 shrink-0 text-slate-400"
            aria-hidden="true"
          />
          <span className="line-clamp-1">{tutor.education}</span>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {tutor.expertise.slice(0, 3).map((subject) => (
          <span
            key={subject}
            className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700"
          >
            {subject}
          </span>
        ))}
      </div>

      <div className="mt-2 flex flex-wrap justify-center gap-2">
        {tutor.teachingMode.map((mode) => (
          <span
            key={mode}
            className="rounded-full border border-slate-200 px-2.5 py-1 text-xs font-medium text-slate-500"
          >
            {mode}
          </span>
        ))}
      </div>

      <div className="mt-5 rounded-xl bg-emerald-50/70 px-4 py-3">
        <p className="text-xs font-medium uppercase tracking-wide text-emerald-700/80">
          Hourly Rate
        </p>
        <p className="text-xl font-bold text-emerald-700">
          ৳{tutor.hourlyRate.toLocaleString()}
          <span className="ml-1 text-sm font-medium text-emerald-700/70">
            /hr
          </span>
        </p>
      </div>

      <Link
        href={`/tutors/${tutor.id}`}
        className="mt-5 inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-emerald-600 px-4 py-2.5 text-sm font-semibold text-emerald-700 transition-colors duration-200 hover:bg-emerald-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
      >
        View Profile
        <HiArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </motion.li>
  );
}

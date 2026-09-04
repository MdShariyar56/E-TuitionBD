"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  HiOutlineLocationMarker,
  HiOutlineCalendar,
  HiOutlineAcademicCap,
  HiOutlineClock,
  HiArrowRight,
} from "react-icons/hi";

const tuitionPosts = [
  {
    id: 1,
    subject: "Mathematics",
    className: "Class 10",
    location: "Mirpur, Dhaka",
    budget: "৳5,000",
    schedule: "3 days/week",
    postedAt: "2 hours ago",
    status: "Open",
  },
  {
    id: 2,
    subject: "English",
    className: "Class 8",
    location: "Uttara, Dhaka",
    budget: "৳4,000",
    schedule: "4 days/week",
    postedAt: "5 hours ago",
    status: "Open",
  },
  {
    id: 3,
    subject: "Physics",
    className: "Class 12",
    location: "Dhanmondi, Dhaka",
    budget: "৳6,000",
    schedule: "3 days/week",
    postedAt: "1 day ago",
    status: "Open",
  },
  {
    id: 4,
    subject: "Chemistry",
    className: "Class 11",
    location: "Mohammadpur, Dhaka",
    budget: "৳5,500",
    schedule: "3 days/week",
    postedAt: "1 day ago",
    status: "Open",
  },
  {
    id: 5,
    subject: "ICT",
    className: "Class 9",
    location: "Badda, Dhaka",
    budget: "৳4,500",
    schedule: "3 days/week",
    postedAt: "2 days ago",
    status: "Open",
  },
  {
    id: 6,
    subject: "Bangla",
    className: "Class 7",
    location: "Banani, Dhaka",
    budget: "৳4,000",
    schedule: "4 days/week",
    postedAt: "3 days ago",
    status: "Open",
  },
];

export default function LatestTuitions() {
  const shouldReduceMotion = false;
  const headerVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
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

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-medium text-emerald-700 sm:text-sm">
            Latest Opportunities
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Latest Tuition Posts
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-500 sm:text-lg">
            Explore the latest tuition opportunities posted by students and
            guardians.
          </p>
        </motion.div>

        <motion.ul
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {tuitionPosts.map((post) => (
            <motion.li
              key={post.id}
              variants={cardVariants}
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md hover:border-emerald-100"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {post.subject}
                  </h3>
                  <p className="mt-0.5 flex items-center gap-1.5 text-sm text-slate-500">
                    <HiOutlineAcademicCap
                      className="h-4 w-4 text-emerald-600"
                      aria-hidden="true"
                    />
                    {post.className}
                  </p>
                </div>
                <span className="shrink-0 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
                  {post.status}
                </span>
              </div>

              <dl className="mt-4 space-y-2 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <dt className="sr-only">Location</dt>
                  <HiOutlineLocationMarker
                    className="h-4 w-4 shrink-0 text-slate-400"
                    aria-hidden="true"
                  />
                  <dd>{post.location}</dd>
                </div>
                <div className="flex items-center gap-2">
                  <dt className="sr-only">Schedule</dt>
                  <HiOutlineCalendar
                    className="h-4 w-4 shrink-0 text-slate-400"
                    aria-hidden="true"
                  />
                  <dd>{post.schedule}</dd>
                </div>
                <div className="flex items-center gap-2">
                  <dt className="sr-only">Posted</dt>
                  <HiOutlineClock
                    className="h-4 w-4 shrink-0 text-slate-400"
                    aria-hidden="true"
                  />
                  <dd>Posted {post.postedAt}</dd>
                </div>
              </dl>

              <div className="mt-5 rounded-xl bg-emerald-50/70 px-4 py-3">
                <p className="text-xs font-medium uppercase tracking-wide text-emerald-700/80">
                  Monthly Budget
                </p>
                <p className="text-xl font-bold text-emerald-700">
                  {post.budget}
                  <span className="ml-1 text-sm font-medium text-emerald-700/70">
                    /month
                  </span>
                </p>
              </div>

              <Link
                href={`/tuitions/${post.id}`}
                className="mt-5 inline-flex items-center justify-center gap-1.5 rounded-lg border border-emerald-600 px-4 py-2.5 text-sm font-semibold text-emerald-700 transition-colors duration-200 hover:bg-emerald-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
              >
                View Details
                <HiArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="mt-12 text-center"
        >
          <Link
            href="/tuitions"
            className="mt-5 inline-flex items-center justify-center gap-1.5 rounded-lg border border-emerald-600 px-4 py-2.5 text-sm font-semibold text-emerald-700 transition-colors duration-200 hover:bg-emerald-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
          >
            View Details
            <HiArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

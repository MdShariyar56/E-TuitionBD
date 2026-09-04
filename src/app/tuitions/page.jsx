"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import TuitionCard from "@/components/tuitions/TuitionCard";
import TuitionFilters from "@/components/tuitions/TuitionFilters";
import { mockTuitions } from "@/data/mockTuitions";

export default function TuitionsPage() {
  const [mounted, setMounted] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setMounted(true);
  }, []);

  const ITEMS_PER_PAGE = 6;

  const totalPages = Math.ceil(mockTuitions.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  const currentTuitions = mockTuitions.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 24,
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

  return (
    <main className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={mounted ? "visible" : "hidden"}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-medium text-emerald-700 sm:text-sm">
            Tuition Opportunities
          </span>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Find the Right Tuition
          </h1>

          <p className="mt-3 text-base leading-relaxed text-slate-500 sm:text-lg">
            Browse the latest tuition opportunities and find a learning match
            that fits your needs.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={mounted ? "visible" : "hidden"}
          transition={{ delay: 0.1 }}
          className="mt-10"
        >
          <TuitionFilters />
        </motion.div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
              Latest Tuition Opportunities
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Showing {startIndex + 1}-
              {Math.min(startIndex + ITEMS_PER_PAGE, mockTuitions.length)} of{" "}
              {mockTuitions.length} available tuition posts
            </p>
          </div>

          <label className="flex items-center gap-2 text-sm text-slate-600">
            <span className="shrink-0">Sort by:</span>

            <select
              defaultValue="Latest"
              className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 transition-colors duration-200 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
            >
              <option>Latest</option>
              <option>Budget: High to Low</option>
              <option>Budget: Low to High</option>
            </select>
          </label>
        </div>

        <motion.ul
          variants={gridVariants}
          initial="hidden"
          animate={mounted ? "visible" : "hidden"}
          className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {currentTuitions.map((tuition) => (
            <TuitionCard
              key={tuition.id}
              tuition={tuition}
              variants={cardVariants}
            />
          ))}
        </motion.ul>

        <nav
          aria-label="Pagination"
          className="mt-12 flex flex-wrap items-center justify-center gap-2"
        >
          <button
            type="button"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3.5 py-2 text-sm font-medium text-slate-600 transition-colors duration-200 hover:bg-emerald-50 hover:text-emerald-700 disabled:cursor-not-allowed disabled:text-slate-400 disabled:hover:bg-white"
          >
            <HiChevronLeft className="h-4 w-4" aria-hidden="true" />
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, index) => {
            const page = index + 1;

            return (
              <button
                key={page}
                type="button"
                onClick={() => setCurrentPage(page)}
                aria-current={currentPage === page ? "page" : undefined}
                className={`h-9 w-9 rounded-lg text-sm font-semibold transition-colors duration-200 ${
                  currentPage === page
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
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3.5 py-2 text-sm font-medium text-slate-600 transition-colors duration-200 hover:bg-emerald-50 hover:text-emerald-700 disabled:cursor-not-allowed disabled:text-slate-400 disabled:hover:bg-white"
          >
            Next
            <HiChevronRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </nav>
      </div>
    </main>
  );
}

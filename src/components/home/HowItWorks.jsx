"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  HiOutlineDocumentText,
  HiOutlineSearch,
  HiOutlineBadgeCheck,
  HiOutlineAcademicCap,
} from "react-icons/hi";

const steps = [
  {
    id: 1,
    number: "01",
    icon: HiOutlineDocumentText,
    title: "Post Your Tuition",
    description:
      "Share your subject, class, location, budget, and preferred schedule.",
  },
  {
    id: 2,
    number: "02",
    icon: HiOutlineSearch,
    title: "Find Suitable Tutors",
    description:
      "Browse qualified tutors who match your learning requirements.",
  },
  {
    id: 3,
    number: "03",
    icon: HiOutlineBadgeCheck,
    title: "Choose Your Tutor",
    description:
      "Review tutor profiles and select the tutor that best fits your needs.",
  },
  {
    id: 4,
    number: "04",
    icon: HiOutlineAcademicCap,
    title: "Start Learning",
    description:
      "Connect with your selected tutor and begin your learning journey.",
  },
];

export default function HowItWorks() {
  const shouldReduceMotion = useReducedMotion();

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
      transition: { staggerChildren: shouldReduceMotion ? 0 : 0.12 },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" },
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
            Simple &amp; Easy
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            How the Platform Works
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-500 sm:text-lg">
            Finding the right tutor is simple. Follow these easy steps and start
            learning with confidence.
          </p>
        </motion.div>

        <motion.ol
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="relative mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-6"
        >
          <div
            className="pointer-events-none absolute left-0 right-0 top-10 hidden h-px bg-emerald-100 lg:block"
            style={{ marginInline: "12.5%" }}
            aria-hidden="true"
          />

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <motion.li
                key={step.id}
                variants={stepVariants}
                whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="relative flex h-full flex-col items-center rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm transition-shadow duration-200 hover:border-emerald-100 hover:shadow-md"
              >
                <span className="absolute right-4 top-4 text-2xl font-extrabold text-emerald-50 sm:text-3xl">
                  {step.number}
                </span>

                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </div>

                <h3 className="mt-5 text-base font-bold text-slate-900 sm:text-lg">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {step.description}
                </p>
              </motion.li>
            );
          })}
        </motion.ol>
      </div>
    </section>
  );
}

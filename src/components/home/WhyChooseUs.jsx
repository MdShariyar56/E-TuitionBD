"use client";

import { motion } from "framer-motion";
import {
  HiOutlineBadgeCheck,
  HiOutlineShieldCheck,
  HiOutlineClock,
  HiOutlineAcademicCap,
} from "react-icons/hi";

const benefits = [
  {
    id: 1,
    icon: HiOutlineBadgeCheck,
    title: "Verified Tutors",
    description:
      "Connect with qualified and trusted tutors who are ready to support your learning goals.",
  },
  {
    id: 2,
    icon: HiOutlineShieldCheck,
    title: "Easy & Secure",
    description:
      "Enjoy a simple and secure platform designed to make finding and hiring tutors stress-free.",
  },
  {
    id: 3,
    icon: HiOutlineClock,
    title: "Flexible Learning",
    description:
      "Choose tutors based on your preferred subject, schedule, location, and budget.",
  },
  {
    id: 4,
    icon: HiOutlineAcademicCap,
    title: "Better Learning Experience",
    description:
      "Find the right tutor and create a personalized learning experience that fits your needs.",
  },
];

export default function WhyChooseUs() {
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
      transition: { staggerChildren: shouldReduceMotion ? 0 : 0.1 },
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
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-50/60 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-medium text-emerald-700 sm:text-sm">
            Why E-TuitionBD?
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Why Choose E-TuitionBD?
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-500 sm:text-lg">
            Everything you need to find the right tutor and make your learning
            journey easier, safer, and more effective.
          </p>
        </motion.div>

        <motion.ul
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <motion.li
                key={benefit.id}
                variants={cardVariants}
                whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="flex h-full flex-col items-center rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm transition-shadow duration-200 hover:border-emerald-100 hover:shadow-md"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-base font-bold text-slate-900 sm:text-lg">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {benefit.description}
                </p>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}

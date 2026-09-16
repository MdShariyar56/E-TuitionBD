"use client";

import Link from "next/link";
import { motion, MotionConfig } from "framer-motion";
import {
  HiOutlineAcademicCap,
  HiOutlineSearch,
  HiOutlinePencilAlt,
  HiOutlineUserGroup,
  HiOutlineTrendingUp,
  HiOutlineLightBulb,
  HiOutlineLocationMarker,
  HiOutlineAdjustments,
  HiOutlineInformationCircle,
  HiOutlineClipboardList,
  HiOutlineUsers,
  HiCheckCircle,
  HiArrowRight,
} from "react-icons/hi";

const whatWeDo = [
  {
    icon: HiOutlineSearch,
    title: "Find Tutors",
    description: "Students can discover tutors based on their learning needs.",
  },
  {
    icon: HiOutlinePencilAlt,
    title: "Post Tuition",
    description: "Students/guardians can share their tuition requirements.",
  },
  {
    icon: HiOutlineUserGroup,
    title: "Connect Easily",
    description:
      "Help students and tutors connect around suitable opportunities.",
  },
  {
    icon: HiOutlineTrendingUp,
    title: "Learn & Grow",
    description: "Support a better and more organized learning experience.",
  },
];

const howItWorks = [
  {
    number: "01",
    title: "Post or Find",
    description: "Post a tuition requirement or browse available tutors.",
  },
  {
    number: "02",
    title: "Explore & Compare",
    description:
      "Review tutor profiles or tuition details that fit your needs.",
  },
  {
    number: "03",
    title: "Connect",
    description: "Reach out and start a conversation with the right match.",
  },
  {
    number: "04",
    title: "Start Learning",
    description: "Begin a focused, organized learning journey together.",
  },
];

const whyChooseUs = [
  {
    icon: HiOutlineSearch,
    title: "Easy Tutor Discovery",
  },
  {
    icon: HiOutlineLocationMarker,
    title: "Subject & Location Based Search",
  },
  {
    icon: HiOutlineAdjustments,
    title: "Flexible Teaching Modes",
  },
  {
    icon: HiOutlineInformationCircle,
    title: "Clear Tutor Information",
  },
  {
    icon: HiOutlineClipboardList,
    title: "Simple Tuition Browsing",
  },
  {
    icon: HiOutlineUsers,
    title: "Student-Friendly Experience",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: 0.1 },
  },
};

const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const hoverLift = { y: -4 };

export default function AboutPage() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="bg-white">
        <section className="relative overflow-hidden">
          <div
            className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-emerald-100/60 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -right-20 top-1/3 h-80 w-80 rounded-full bg-emerald-50 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-10">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="text-center lg:text-left"
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1.5 text-xs font-medium text-emerald-700 sm:text-sm">
                  <HiOutlineAcademicCap
                    className="h-4 w-4"
                    aria-hidden="true"
                  />
                  About E-TuitionBD
                </span>
                <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                  Connecting Students with the Right Tutors
                </h1>
                <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-500 sm:text-lg lg:mx-0">
                  E-TuitionBD makes it easier for students to find tutors who
                  match their subject, location and learning style — and easier
                  for tutors to discover tuition opportunities that fit their
                  expertise and schedule.
                </p>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.15 }}
                className="mx-auto w-full max-w-md rounded-3xl border border-emerald-100 bg-emerald-50/50 p-6 shadow-sm sm:p-8 lg:mx-0"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-600 text-white">
                    <HiOutlineAcademicCap
                      className="h-5.5 w-5.5"
                      aria-hidden="true"
                    />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      E-TuitionBD
                    </p>
                    <p className="text-xs text-slate-500">
                      Tuition marketplace platform
                    </p>
                  </div>
                </div>

                <ul className="mt-6 space-y-3">
                  {["Find Tutors", "Post Tuitions", "Connect Easily"].map(
                    (item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 rounded-xl bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm"
                      >
                        <HiCheckCircle
                          className="h-4 w-4 shrink-0 text-emerald-600"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ),
                  )}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="bg-emerald-50/30 py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
              <motion.div
                variants={fadeLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                  Our Mission
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                  Our mission is to make quality tutoring more accessible by
                  giving students a clear, organized way to explore tutors based
                  on subject, location and teaching style — without the usual
                  guesswork.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                  At the same time, we want tutors to spend less time searching
                  and more time teaching, by making tuition opportunities easier
                  to discover and understand.
                </p>
              </motion.div>

              <motion.div
                variants={fadeRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="rounded-2xl bg-emerald-600 p-8 text-center shadow-sm sm:p-10"
              >
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white">
                  <HiOutlineLightBulb className="h-6 w-6" aria-hidden="true" />
                </span>
                <p className="mt-5 text-xl font-bold text-white sm:text-2xl">
                  Better connections.
                  <br />
                  Better learning.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="mx-auto max-w-2xl text-center"
            >
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                What We Do
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-500 sm:text-lg">
                A simple set of tools that bring students and tutors together.
              </p>
            </motion.div>

            <motion.ul
              variants={gridVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
            >
              {whatWeDo.map(({ icon: Icon, title, description }) => (
                <motion.li
                  key={title}
                  variants={cardVariants}
                  whileHover={hoverLift}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="flex h-full flex-col items-center rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm transition-shadow duration-200 hover:border-emerald-100 hover:shadow-md"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-base font-bold text-slate-900 sm:text-lg">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {description}
                  </p>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </section>

        <section className="bg-emerald-50/30 py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="mx-auto max-w-2xl text-center"
            >
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                How E-TuitionBD Works
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-500 sm:text-lg">
                A straightforward path from searching to learning.
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
                className="pointer-events-none absolute left-0 right-0 top-10 hidden h-px bg-emerald-200 lg:block"
                style={{ marginInline: "12.5%" }}
                aria-hidden="true"
              />

              {howItWorks.map((step) => (
                <motion.li
                  key={step.number}
                  variants={cardVariants}
                  whileHover={hoverLift}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="relative flex h-full flex-col items-center rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm transition-shadow duration-200 hover:border-emerald-100 hover:shadow-md"
                >
                  <span className="absolute right-4 top-4 text-2xl font-extrabold text-emerald-50 sm:text-3xl">
                    {step.number}
                  </span>
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    <span className="text-lg font-bold">{step.number}</span>
                  </div>
                  <h3 className="mt-5 text-base font-bold text-slate-900 sm:text-lg">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {step.description}
                  </p>
                </motion.li>
              ))}
            </motion.ol>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="mx-auto max-w-2xl text-center"
            >
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Why Choose E-TuitionBD
              </h2>
            </motion.div>

            <motion.ul
              variants={gridVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {whyChooseUs.map(({ icon: Icon, title }) => (
                <motion.li
                  key={title}
                  variants={cardVariants}
                  whileHover={hoverLift}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-shadow duration-200 hover:border-emerald-100 hover:shadow-md"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-semibold text-slate-800 sm:text-base">
                    {title}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </section>

        <section className="bg-emerald-50/30 py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={gridVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8"
            >
              <motion.div
                variants={cardVariants}
                className="flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-7 shadow-sm sm:p-8"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <HiOutlineSearch className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  For Students
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 sm:text-base">
                  Browse tuition posts, explore tutor profiles, and find
                  teaching options that match your subject, location and
                  preferred schedule — all in one place.
                </p>
                <Link
                  href="/tutors"
                  className="mt-6 inline-flex items-center justify-center gap-1.5 self-start rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
                >
                  Browse Tutors
                  <HiArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </motion.div>

              <motion.div
                variants={cardVariants}
                className="flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-7 shadow-sm sm:p-8"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <HiOutlinePencilAlt className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  For Tutors
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 sm:text-base">
                  Showcase your expertise, experience and preferred teaching
                  mode, and discover tuition opportunities that fit your
                  subjects and schedule.
                </p>
                <Link
                  href="/tuitions"
                  className="mt-6 inline-flex items-center justify-center gap-1.5 self-start rounded-lg border border-emerald-600 px-5 py-2.5 text-sm font-semibold text-emerald-700 transition-colors duration-200 hover:bg-emerald-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
                >
                  Explore Tuitions
                  <HiArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-3xl bg-emerald-600 px-6 py-14 text-center sm:px-10 sm:py-16"
            >
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                Ready to Find the Right Learning Opportunity?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-emerald-50 sm:text-base">
                Explore tutors and tuition opportunities on E-TuitionBD.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/tutors"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-emerald-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
                >
                  Find a Tutor
                  <HiArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/tuitions"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/70 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
                >
                  Browse Tuitions
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </MotionConfig>
  );
}

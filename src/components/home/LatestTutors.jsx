"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  HiOutlineLocationMarker,
  HiOutlineBriefcase,
  HiStar,
  HiArrowRight,
} from "react-icons/hi";

const tutors = [
  {
    id: 1,
    name: "Tanvir Ahmed",
    title: "Mathematics Tutor",
    experience: "4 Years Experience",
    location: "Mirpur, Dhaka",
    rating: 4.9,
    reviews: 32,
    expertise: ["Mathematics", "Higher Math"],
  },
  {
    id: 2,
    name: "Nusrat Jahan",
    title: "English Tutor",
    experience: "3 Years Experience",
    location: "Uttara, Dhaka",
    rating: 4.8,
    reviews: 27,
    expertise: ["English", "IELTS"],
  },
  {
    id: 3,
    name: "Rahat Hasan",
    title: "Physics Tutor",
    experience: "5 Years Experience",
    location: "Dhanmondi, Dhaka",
    rating: 4.9,
    reviews: 41,
    expertise: ["Physics", "General Science"],
  },
  {
    id: 4,
    name: "Sadia Rahman",
    title: "Chemistry Tutor",
    experience: "3 Years Experience",
    location: "Mohammadpur, Dhaka",
    rating: 4.8,
    reviews: 24,
    expertise: ["Chemistry", "Biology"],
  },
  {
    id: 5,
    name: "Arif Hossain",
    title: "ICT Tutor",
    experience: "4 Years Experience",
    location: "Badda, Dhaka",
    rating: 4.7,
    reviews: 19,
    expertise: ["ICT", "Programming"],
  },
  {
    id: 6,
    name: "Mahi Islam",
    title: "Bangla Tutor",
    experience: "2 Years Experience",
    location: "Banani, Dhaka",
    rating: 4.9,
    reviews: 21,
    expertise: ["Bangla", "Literature"],
  },
];

function getInitials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function LatestTutors() {
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
    <section className="bg-emerald-50/30 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-emerald-200 bg-white px-3.5 py-1 text-xs font-medium text-emerald-700 sm:text-sm">
            Trusted Tutors
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Meet Our Latest Tutors
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-500 sm:text-lg">
            Connect with qualified tutors who are ready to help you achieve your
            learning goals.
          </p>
        </motion.div>

        <motion.ul
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {tutors.map((tutor) => (
            <motion.li
              key={tutor.id}
              variants={cardVariants}
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="flex h-full flex-col items-center rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm transition-shadow duration-200 hover:border-emerald-100 hover:shadow-md"
            >
              <div
                className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 text-xl font-bold text-white shadow-sm"
                aria-hidden="true"
              >
                {getInitials(tutor.name)}
              </div>

              <h3 className="mt-4 text-lg font-bold text-slate-900">
                {tutor.name}
              </h3>
              <p className="text-sm font-medium text-emerald-700">
                {tutor.title}
              </p>

              <div className="mt-2 flex items-center gap-1.5 text-sm">
                <HiStar className="h-4 w-4 text-amber-400" aria-hidden="true" />
                <span className="font-semibold text-slate-800">
                  {tutor.rating}
                </span>
                <span className="text-slate-400">
                  ({tutor.reviews} reviews)
                </span>
              </div>

              <div className="mt-4 w-full space-y-2 border-t border-slate-100 pt-4 text-left text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <HiOutlineBriefcase
                    className="h-4 w-4 shrink-0 text-slate-400"
                    aria-hidden="true"
                  />
                  <span>{tutor.experience}</span>
                </div>
                <div className="flex items-center gap-2">
                  <HiOutlineLocationMarker
                    className="h-4 w-4 shrink-0 text-slate-400"
                    aria-hidden="true"
                  />
                  <span>{tutor.location}</span>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {tutor.expertise.map((subject) => (
                  <span
                    key={subject}
                    className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700"
                  >
                    {subject}
                  </span>
                ))}
              </div>

              <Link
                href={`/tutors/${tutor.id}`}
                className="mt-6 inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-emerald-600 px-4 py-2.5 text-sm font-semibold text-emerald-700 transition-colors duration-200 hover:bg-emerald-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
              >
                View Profile
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
            href="/tutors"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700 transition-all duration-200 hover:gap-2.5 hover:text-emerald-800"
          >
            View All Tutors
            <HiArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

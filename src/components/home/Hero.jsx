"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  HiSearch,
  HiPlusCircle,
  HiCheckCircle,
  HiStar,
  HiAcademicCap,
} from "react-icons/hi";
import { HiUser } from "react-icons/hi2";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/60 via-white to-white py-16 md:py-24 lg:py-28">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b9810a_1px,transparent_1px),linear-gradient(to_bottom,#10b9810a_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-green-100/80 border border-green-200 text-green-600 text-xs sm:text-sm font-medium mb-6 shadow-sm">
              <HiAcademicCap className="w-4 h-4 text-green-600" />
              <span>Connecting Students & Tutors</span>
            </div>

            <h1 className="text-xl text-[23px] md:text-5xl  font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6">
              Find the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-400 underline decoration-green-300 decoration-wavy decoration-1 underline-offset-8">
                Right Tutor
              </span>{" "}
              <br /> for Your Learning Journey
            </h1>

            <p className="text-base text-[14px] sm:text-lg text-slate-600 mb-8 max-w-xl leading-5 md:leading-relaxed">
              Connect with qualified tutors, discover trusted tuition
              opportunities, and make learning easier—all in one place.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <Link
                href="/tutors"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/30 transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                <HiSearch className="w-5 h-5" />
                <span>Find a Tutor</span>
              </Link>

              <Link
                href="/tuitions"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-semibold border border-slate-200 shadow-sm hover:border-slate-300 transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
              >
                <HiPlusCircle className="w-5 h-5 text-green-600" />
                <span>Post a Tuition</span>
              </Link>
            </div>

            <div className="pt-6 border-t border-slate-200/80 w-full flex flex-wrap items-center gap-y-3 gap-x-8 text-slate-600 text-sm font-medium">
              <div className="flex items-center gap-2">
                <HiCheckCircle className="w-5 h-5 text-green-600 shrink-0" />
                <span>Qualified Tutors</span>
              </div>
              <div className="flex items-center gap-2">
                <HiCheckCircle className="w-5 h-5 text-green-600 shrink-0" />
                <span>Easy & Transparent</span>
              </div>
              <div className="flex items-center gap-2">
                <HiCheckCircle className="w-5 h-5 text-green-600 shrink-0" />
                <span>Trusted Platform</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 relative flex items-center justify-center px-2 sm:px-4 lg:px-0"
          >
            <div className="relative w-full max-w-md lg:max-w-none">
              <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-tr from-green-700 to-green-400 p-1.5 sm:p-2 shadow-xl sm:shadow-2xl shadow-emerald-200">
                <div className="rounded-xl sm:rounded-2xl bg-white overflow-hidden aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] relative flex items-center justify-center bg-slate-50">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-teal-50/30 to-white flex flex-col p-3 sm:p-6 justify-between">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-2 sm:pb-3 gap-2">
                      <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 shrink-0 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-[9px] sm:text-xs font-semibold uppercase tracking-wider text-slate-500 truncate">
                          Live Matching
                        </span>
                      </div>

                      <span className="shrink-0 text-[9px] sm:text-xs bg-green-100 text-green-800 font-medium px-1.5 sm:px-2 py-0.5 rounded">
                        Active Session
                      </span>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center py-3 sm:py-4">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-2 sm:mb-3 shadow-inner">
                        <HiAcademicCap className="w-6 h-6 sm:w-8 sm:h-8" />
                      </div>

                      <h3 className="font-bold text-slate-800 text-sm sm:text-lg">
                        Excellence in Education
                      </h3>

                      <p className="text-[10px] sm:text-xs text-slate-500 mt-1 max-w-[180px] sm:max-w-[200px] leading-relaxed">
                        Connecting verified mentors with dedicated learners
                        daily.
                      </p>
                    </div>

                    <div className="bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 border border-slate-100 flex items-center justify-between gap-2 text-[9px] sm:text-xs text-slate-600 shadow-sm">
                      <span className="font-medium text-slate-700 truncate">
                        Recent Match: Physics & Math
                      </span>

                      <span className="text-green-600 font-bold shrink-0">
                        Success ✓
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
                className="
                    absolute
                    -top-3 left-0
                    sm:-top-4 sm:-left-4
                    md:-left-6
                    bg-white/95 backdrop-blur-md
                    rounded-xl sm:rounded-2xl
                    p-1.5 sm:p-2
                    shadow-lg sm:shadow-xl
                    border border-slate-100
                    flex items-center gap-2 sm:gap-3
                    z-20
                "
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center shadow-sm">
                  <HiStar className="w-5 h-5 sm:w-6 sm:h-6 fill-amber-400" />
                </div>

                <div>
                  <div className="flex items-center gap-1 font-bold text-slate-800 text-xs sm:text-sm">
                    <span>4.9</span>
                    <span className="text-amber-500 text-[10px] sm:text-xs">
                      ★
                    </span>
                  </div>

                  <p className="text-[10px] sm:text-xs text-slate-500 font-medium">
                    Tutor Rating
                  </p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [4, -4, 4] }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="
                    absolute
                    -bottom-4 right-0
                    sm:-bottom-6 sm:-right-2
                    md:-right-4
                    bg-white/95 backdrop-blur-md
                    rounded-xl sm:rounded-2xl
                    p-1.5 sm:p-2
                    shadow-lg sm:shadow-xl
                    border border-slate-100
                    flex items-center gap-2 sm:gap-3
                    z-20
                    max-w-[190px] sm:max-w-none
                "
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 shrink-0 rounded-lg sm:rounded-xl bg-green-50 text-green-600 flex items-center justify-center shadow-sm">
                  <HiUser className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>

                <div className="min-w-0">
                  <p className="font-bold text-slate-800 text-xs sm:text-sm whitespace-nowrap">
                    Verified Tutor
                  </p>

                  <p className="text-[9px] sm:text-xs text-green-600 font-semibold truncate">
                    Mathematics & Science
                  </p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [-3, 3, -3] }}
                transition={{
                  repeat: Infinity,
                  duration: 4.5,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="
                    hidden sm:flex
                    absolute
                    top-1/2
                    -right-3
                    md:-right-8
                    -translate-y-1/2
                    bg-white/95 backdrop-blur-md
                    rounded-xl sm:rounded-2xl
                    p-1.5 sm:p-2
                    shadow-lg sm:shadow-xl
                    border border-slate-100
                    items-center gap-2 sm:gap-3
                    z-20
                "
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-teal-50 text-green-600 flex items-center justify-center font-bold text-sm">
                  🎓
                </div>

                <div>
                  <p className="font-bold text-slate-800 text-xs">1,200+</p>

                  <p className="text-[9px] sm:text-[10px] text-slate-500 font-medium whitespace-nowrap">
                    Learning Connections
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

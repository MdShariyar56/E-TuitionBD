"use client";

import { useState } from "react";
import Link from "next/link";
import Swal from "sweetalert2";
import { motion, MotionConfig } from "framer-motion";
import {
  HiOutlineAcademicCap,
  HiOutlineMail,
  HiOutlineLockClosed,
  HiEye,
  HiEyeOff,
  HiStar,
  HiBadgeCheck,
} from "react-icons/hi";
import { FaGoogle } from "react-icons/fa";

const MIN_PASSWORD_LENGTH = 6;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initialFormState = {
  email: "",
  password: "",
};

const avatars = ["TA", "NJ", "RH", "SR"];

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: 0.2 },
  },
};

const floatA = {
  animate: { y: [-5, 5, -5] },
  transition: { repeat: Infinity, duration: 4.5, ease: "easeInOut" },
};

const floatB = {
  animate: { y: [5, -5, 5] },
  transition: { repeat: Infinity, duration: 5.5, ease: "easeInOut" },
};

export default function LoginPage() {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const nextErrors = {};

    if (!formData.email.trim()) {
      nextErrors.email = "Email address is required.";
    } else if (!EMAIL_REGEX.test(formData.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!formData.password) {
      nextErrors.password = "Password is required.";
    } else if (formData.password.length < MIN_PASSWORD_LENGTH) {
      nextErrors.password = `Password must be at least ${MIN_PASSWORD_LENGTH} characters.`;
    }

    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      Swal.fire({
        icon: "error",
        title: "Missing Information",
        text: "Please fill in all required fields correctly before logging in.",
        confirmButtonColor: "#059669",
      });
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      Swal.fire({
        icon: "success",
        title: "Looks Good!",
        text: "Login form is ready to submit.",
        confirmButtonColor: "#059669",
      });
    }, 400);
  };

  const inputClasses = (hasError) =>
    `w-full rounded-lg border bg-white py-2.5 pl-11 pr-4 text-sm text-slate-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 ${
      hasError
        ? "border-red-300 focus:border-red-500"
        : "border-slate-200 focus:border-emerald-500"
    }`;

  return (
    <MotionConfig reducedMotion="user">
      <main className="relative overflow-hidden bg-gradient-to-b from-emerald-50/70 via-white to-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              "radial-gradient(currentColor 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            color: "#d1fae5",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 30%, #000 40%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 30%, #000 40%, transparent 100%)",
          }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-emerald-100/60 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-5xl items-center px-4 py-12 sm:px-6 sm:py-16">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            className="grid w-full overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-xl shadow-emerald-900/5 md:grid-cols-2"
          >
            <div className="relative hidden overflow-hidden bg-emerald-600 p-10 md:flex md:flex-col md:justify-between">
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute -bottom-20 -left-12 h-64 w-64 rounded-full bg-emerald-500/50"
                aria-hidden="true"
              />

              <Link
                href="/"
                className="relative z-10 flex w-fit items-center gap-2"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-emerald-600">
                  <HiOutlineAcademicCap
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </span>
                <span className="text-base font-bold text-white">
                  E-Tuition<span className="text-emerald-200">BD</span>
                </span>
              </Link>

              <div className="relative z-10 py-10">
                <h2 className="text-3xl font-bold leading-tight text-white">
                  Learn better.
                  <br />
                  Teach smarter.
                </h2>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-emerald-50/90">
                  Pick up right where you left off with tutors and tuition
                  opportunities that fit you.
                </p>

                <div className="relative mt-8 h-36">
                  <motion.div
                    {...floatA}
                    className="absolute left-0 top-0 flex items-center gap-2.5 rounded-2xl bg-white px-3.5 py-2.5 shadow-lg"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-50 text-amber-500">
                      <HiStar className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div className="leading-tight">
                      <p className="text-sm font-bold text-slate-800">4.9</p>
                      <p className="text-[11px] text-slate-500">Tutor Rating</p>
                    </div>
                  </motion.div>

                  <motion.div
                    {...floatB}
                    className="absolute bottom-0 right-0 flex items-center gap-2.5 rounded-2xl bg-white px-3.5 py-2.5 shadow-lg"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                      <HiBadgeCheck className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div className="leading-tight">
                      <p className="text-sm font-bold text-slate-800">
                        Verified Tutor
                      </p>
                      <p className="text-[11px] text-slate-500">Mathematics</p>
                    </div>
                  </motion.div>
                </div>
              </div>

              <div className="relative z-10 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {avatars.map((initials) => (
                    <span
                      key={initials}
                      className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-emerald-600 bg-emerald-100 text-[11px] font-bold text-emerald-700"
                    >
                      {initials}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-emerald-50/90">
                  Join 1,200+ learners and tutors
                </p>
              </div>
            </div>

            <div className="p-6 sm:p-10">
              <div className="text-center md:text-left">
                <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-emerald-600 text-white shadow-sm md:hidden">
                  <HiOutlineAcademicCap
                    className="h-6 w-6"
                    aria-hidden="true"
                  />
                </span>
                <h1 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:mt-0">
                  Welcome Back
                </h1>
                <p className="mt-2 text-sm leading-relaxed text-slate-500 sm:text-base">
                  Login to your E-TuitionBD account
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                noValidate
                className="mt-8 space-y-5"
              >
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium text-slate-700"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <HiOutlineMail
                      className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
                      aria-hidden="true"
                    />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={
                        errors.email ? "email-error" : undefined
                      }
                      className={inputClasses(Boolean(errors.email))}
                    />
                  </div>
                  {errors.email && (
                    <p id="email-error" className="mt-1.5 text-xs text-red-600">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="mb-1.5 block text-sm font-medium text-slate-700"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <HiOutlineLockClosed
                      className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
                      aria-hidden="true"
                    />
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter your password"
                      aria-invalid={Boolean(errors.password)}
                      aria-describedby={
                        errors.password ? "password-error" : undefined
                      }
                      className={`${inputClasses(
                        Boolean(errors.password),
                      )} pr-11`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 transition-colors duration-200 hover:text-emerald-600"
                    >
                      {showPassword ? (
                        <HiEyeOff className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <HiEye className="h-5 w-5" aria-hidden="true" />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <p
                      id="password-error"
                      className="mt-1.5 text-xs text-red-600"
                    >
                      {errors.password}
                    </p>
                  )}
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="inline-flex items-center gap-2 text-slate-600">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(event) => setRememberMe(event.target.checked)}
                      className="h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-2 focus:ring-emerald-500/30"
                    />
                    Remember me
                  </label>
                  <Link
                    href="/forgot-password"
                    className="font-medium text-emerald-700 transition-colors duration-200 hover:text-emerald-800"
                  >
                    Forgot Password?
                  </Link>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-lg bg-emerald-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                >
                  {isSubmitting ? "Logging in..." : "Login"}
                </button>

                <div className="flex items-center gap-3">
                  <span
                    className="h-px flex-1 bg-slate-100"
                    aria-hidden="true"
                  />
                  <span className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    Or
                  </span>
                  <span
                    className="h-px flex-1 bg-slate-100"
                    aria-hidden="true"
                  />
                </div>

                <button
                  type="button"
                  onClick={() => {}}
                  className="flex w-full items-center justify-center gap-2.5 rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-colors duration-200 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
                >
                  <FaGoogle
                    className="h-4 w-4 text-red-500"
                    aria-hidden="true"
                  />
                  Continue with Google
                </button>

                <p className="text-center text-sm text-slate-500">
                  Don&apos;t have an account?{" "}
                  <Link
                    href="/register"
                    className="font-semibold text-emerald-700 transition-colors duration-200 hover:text-emerald-800"
                  >
                    Create an account
                  </Link>
                </p>
              </form>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="mt-6 text-center text-xs text-slate-400"
              >
                Securely connect with students and tutors through E-TuitionBD.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </main>
    </MotionConfig>
  );
}

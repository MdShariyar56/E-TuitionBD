"use client";

import { useState } from "react";
import Link from "next/link";
import Swal from "sweetalert2";
import { motion, MotionConfig } from "framer-motion";
import {
  HiOutlineUser,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLockClosed,
  HiEye,
  HiEyeOff,
  HiOutlineAcademicCap,
  HiOutlineUserGroup,
} from "react-icons/hi";
import { FaGoogle } from "react-icons/fa";

const MIN_PASSWORD_LENGTH = 6;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const roleOptions = [
  { value: "student", label: "Student", icon: HiOutlineAcademicCap },
  { value: "tutor", label: "Tutor", icon: HiOutlineUserGroup },
];

const initialFormState = {
  name: "",
  email: "",
  phone: "",
  password: "",
  role: "",
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: 0.1 },
  },
};

export default function RegisterPage() {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRoleSelect = (role) => {
    setFormData((prev) => ({ ...prev, role }));
  };

  const validate = () => {
    const nextErrors = {};
    if (!formData.name.trim()) nextErrors.name = "Full name is required.";

    if (!formData.email.trim()) {
      nextErrors.email = "Email address is required.";
    } else if (!EMAIL_REGEX.test(formData.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) nextErrors.phone = "Phone number is required.";

    if (!formData.password) {
      nextErrors.password = "Password is required.";
    } else if (formData.password.length < MIN_PASSWORD_LENGTH) {
      nextErrors.password = `Password must be at least ${MIN_PASSWORD_LENGTH} characters.`;
    }

    if (!formData.role) nextErrors.role = "Please select Student or Tutor.";

    return nextErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      Swal.fire({
        icon: "error",
        title: "Missing Information",
        text: "Please fill in all required fields correctly before creating your account.",
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
        text: "Registration form is ready to submit.",
        confirmButtonColor: "#059669",
      });
      setFormData(initialFormState);
      setErrors({});
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
      <main className="bg-white">
        <div className="relative overflow-hidden">
          <div
            className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-emerald-100/60 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -right-20 top-1/3 h-80 w-80 rounded-full bg-emerald-50 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-center"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1.5 text-xs font-medium text-emerald-700 sm:text-sm">
                <HiOutlineAcademicCap className="h-4 w-4" aria-hidden="true" />
                Join E-TuitionBD
              </span>
              <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Create Your Account
              </h1>
              <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-slate-500 sm:text-base">
                Join E-TuitionBD as a Student or Tutor and get started.
              </p>
            </motion.div>
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              className="mt-10 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8"
            >
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-slate-700"
                  >
                    Full Name
                  </label>
                  <div className="relative">
                    <HiOutlineUser
                      className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
                      aria-hidden="true"
                    />
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      className={inputClasses(Boolean(errors.name))}
                    />
                  </div>
                  {errors.name && (
                    <p id="name-error" className="mt-1.5 text-xs text-red-600">
                      {errors.name}
                    </p>
                  )}
                </div>

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
                    htmlFor="phone"
                    className="mb-1.5 block text-sm font-medium text-slate-700"
                  >
                    Phone Number
                  </label>
                  <div className="relative">
                    <HiOutlinePhone
                      className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
                      aria-hidden="true"
                    />
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby={
                        errors.phone ? "phone-error" : undefined
                      }
                      className={inputClasses(Boolean(errors.phone))}
                    />
                  </div>
                  {errors.phone && (
                    <p id="phone-error" className="mt-1.5 text-xs text-red-600">
                      {errors.phone}
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
                      placeholder="Create a password"
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

                <div>
                  <span className="mb-1.5 block text-sm font-medium text-slate-700">
                    Register As
                  </span>
                  <div
                    role="radiogroup"
                    aria-label="Register as"
                    className="grid grid-cols-2 gap-3"
                  >
                    {roleOptions.map(({ value, label, icon: Icon }) => {
                      const isSelected = formData.role === value;
                      return (
                        <motion.button
                          key={value}
                          type="button"
                          role="radio"
                          aria-checked={isSelected}
                          onClick={() => handleRoleSelect(value)}
                          whileHover={{ y: -2 }}
                          transition={{ duration: 0.15, ease: "easeOut" }}
                          className={`flex flex-col items-center gap-2 rounded-xl border-2 px-4 py-4 text-sm font-semibold transition-colors duration-200 ${
                            isSelected
                              ? "border-emerald-600 bg-emerald-50 text-emerald-700"
                              : "border-slate-200 bg-white text-slate-600 hover:border-emerald-200"
                          }`}
                        >
                          <Icon className="h-6 w-6" aria-hidden="true" />
                          {label}
                        </motion.button>
                      );
                    })}
                  </div>
                  {errors.role && (
                    <p className="mt-1.5 text-xs text-red-600">{errors.role}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-lg bg-emerald-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? "Creating Account..." : "Create Account"}
                </button>

                <p className="text-center text-sm text-slate-500">
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    className="font-semibold text-emerald-700 transition-colors duration-200 hover:text-emerald-800"
                  >
                    Login
                  </Link>
                </p>

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
              </form>
            </motion.div>
          </div>
        </div>
      </main>
    </MotionConfig>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import Swal from "sweetalert2";
import { motion, MotionConfig } from "framer-motion";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiOutlineClock,
  HiChevronDown,
  HiArrowRight,
} from "react-icons/hi";

const contactInfo = [
  {
    icon: HiOutlineMail,
    label: "Email",
    value: "support@etuitionbd.com",
    href: "mailto:support@etuitionbd.com",
  },
  {
    icon: HiOutlinePhone,
    label: "Phone",
    value: "+880 1XXX-XXXXXX",
    href: "tel:+8801XXXXXXXXX",
  },
  {
    icon: HiOutlineLocationMarker,
    label: "Location",
    value: "Dhaka, Bangladesh",
    href: null,
  },
  {
    icon: HiOutlineClock,
    label: "Support Hours",
    value: "Saturday – Thursday, 9:00 AM – 6:00 PM",
    href: null,
  },
];

const categoryOptions = [
  "General Inquiry",
  "Tuition Support",
  "Tutor Support",
  "Account Issue",
  "Partnership",
  "Other",
];

const faqItems = [
  {
    question: "How can I find a tutor?",
    answer:
      "Visit the Tutors page and browse profiles by subject, location, experience, and teaching mode to find a match that fits your needs.",
  },
  {
    question: "How can I post a tuition?",
    answer:
      "Go to the Tuitions page and share your subject, class, location, budget, and preferred schedule so tutors can find your post.",
  },
  {
    question: "How can I become a tutor?",
    answer:
      "Create a tutor profile with your subjects, expertise, education, and availability so students can discover and connect with you.",
  },
  {
    question: "How can I get support for my account?",
    answer:
      'Use the contact form on this page and select "Account Issue" as the category — our team will get back to you as soon as possible.',
  },
];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
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

const initialFormState = {
  name: "",
  email: "",
  subject: "",
  category: categoryOptions[0],
  message: "",
};

export default function ContactPage() {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const nextErrors = {};
    if (!formData.name.trim()) nextErrors.name = "Full name is required.";
    if (!formData.email.trim()) {
      nextErrors.email = "Email address is required.";
    } else if (!EMAIL_REGEX.test(formData.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!formData.subject.trim()) nextErrors.subject = "Subject is required.";
    if (!formData.message.trim()) nextErrors.message = "Message is required.";
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
        text: "Please fill in all required fields correctly before sending.",
        confirmButtonColor: "#059669",
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Message Sent!",
      text: "Thanks for contacting E-TuitionBD. We'll get back to you soon.",
      confirmButtonColor: "#059669",
    });

    setFormData(initialFormState);
    setErrors({});
  };

  const inputClasses = (hasError) =>
    `w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-slate-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 ${
      hasError
        ? "border-red-300 focus:border-red-500"
        : "border-slate-200 focus:border-emerald-500"
    }`;

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

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="relative mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8 lg:py-24"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1.5 text-xs font-medium text-emerald-700 sm:text-sm">
              <HiOutlineMail className="h-4 w-4" aria-hidden="true" />
              Get in Touch
            </span>
            <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              We&apos;re Here to Help
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-500 sm:text-lg">
              Have a question, need support, or want to explore a partnership?
              Reach out to the E-TuitionBD team — we&apos;re happy to help.
            </p>
          </motion.div>
        </section>

        <section className="bg-emerald-50/30 py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
              {/* Left: Contact Information */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                  Contact Information
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-500 sm:text-base">
                  Reach out through any of the channels below and our team will
                  get back to you as soon as possible.
                </p>

                <motion.ul
                  variants={gridVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2"
                >
                  {contactInfo.map(({ icon: Icon, label, value, href }) => (
                    <motion.li
                      key={label}
                      variants={cardVariants}
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-shadow duration-200 hover:border-emerald-100 hover:shadow-md"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <p className="mt-3 text-xs font-medium uppercase tracking-wide text-slate-400">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="mt-1 block text-sm font-semibold text-slate-800 transition-colors duration-200 hover:text-emerald-600 sm:text-base"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="mt-1 text-sm font-semibold text-slate-800 sm:text-base">
                          {value}
                        </p>
                      )}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8"
              >
                <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
                  Send a Message
                </h2>

                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="mt-6 space-y-5"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-sm font-medium text-slate-700"
                    >
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      className={inputClasses(Boolean(errors.name))}
                    />
                    {errors.name && (
                      <p
                        id="name-error"
                        className="mt-1.5 text-xs text-red-600"
                      >
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
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={
                        errors.email ? "email-error" : undefined
                      }
                      className={inputClasses(Boolean(errors.email))}
                    />
                    {errors.email && (
                      <p
                        id="email-error"
                        className="mt-1.5 text-xs text-red-600"
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-1.5 block text-sm font-medium text-slate-700"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      aria-invalid={Boolean(errors.subject)}
                      aria-describedby={
                        errors.subject ? "subject-error" : undefined
                      }
                      className={inputClasses(Boolean(errors.subject))}
                    />
                    {errors.subject && (
                      <p
                        id="subject-error"
                        className="mt-1.5 text-xs text-red-600"
                      >
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="category"
                      className="mb-1.5 block text-sm font-medium text-slate-700"
                    >
                      Select Category
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-700 transition-colors duration-200 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                    >
                      {categoryOptions.map((option) => (
                        <option key={option}>{option}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-sm font-medium text-slate-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help..."
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={
                        errors.message ? "message-error" : undefined
                      }
                      className={`${inputClasses(
                        Boolean(errors.message),
                      )} resize-none`}
                    />
                    {errors.message && (
                      <p
                        id="message-error"
                        className="mt-1.5 text-xs text-red-600"
                      >
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-lg bg-emerald-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 sm:w-auto"
                  >
                    Send Message
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="text-center"
            >
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Need Quick Help?
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-500 sm:text-lg">
                Find answers to some common questions before contacting us.
              </p>
            </motion.div>

            <motion.div
              variants={gridVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="mt-10 space-y-3"
            >
              {faqItems.map(({ question, answer }) => (
                <motion.details
                  key={question}
                  variants={cardVariants}
                  className="group rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-shadow duration-200 open:shadow-md sm:p-6"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-slate-800 sm:text-base">
                    {question}
                    <HiChevronDown
                      className="h-5 w-5 shrink-0 text-emerald-600 transition-transform duration-200 group-open:rotate-180"
                      aria-hidden="true"
                    />
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-slate-500 sm:text-base">
                    {answer}
                  </p>
                </motion.details>
              ))}
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
                Let&apos;s Make Learning Easier Together
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-emerald-50 sm:text-base">
                Whether you&apos;re looking for a tutor or want to share your
                teaching skills, E-TuitionBD is here to help.
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
                  Post a Tuition
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </MotionConfig>
  );
}

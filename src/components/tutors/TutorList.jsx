"use client";

import { motion, useReducedMotion } from "framer-motion";
import TutorCard from "@/components/tutors/TutorCard";

export default function TutorList({ tutors }) {
  const shouldReduceMotion = useReducedMotion();

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
    <motion.ul
      variants={gridVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {tutors.map((tutor) => (
        <TutorCard key={tutor.id} tutor={tutor} variants={cardVariants} />
      ))}
    </motion.ul>
  );
}

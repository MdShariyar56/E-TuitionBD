"use client";

import { HiSearch, HiOutlineRefresh } from "react-icons/hi";

const subjectOptions = [
  "All Subjects",
  "Mathematics",
  "English",
  "Physics",
  "Chemistry",
  "ICT",
  "Bangla",
];

const classOptions = [
  "All Classes",
  "Class 6",
  "Class 7",
  "Class 8",
  "Class 9",
  "Class 10",
  "Class 11",
  "Class 12",
];

const locationOptions = [
  "All Locations",
  "Mirpur",
  "Uttara",
  "Dhanmondi",
  "Mohammadpur",
  "Badda",
  "Banani",
];

const budgetOptions = [
  "Any Budget",
  "Below ৳4,000",
  "৳4,000 - ৳5,000",
  "৳5,000 - ৳6,000",
  "Above ৳6,000",
];

const selectClasses =
  "w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-700 transition-colors duration-200 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20";

export default function TuitionFilters() {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6">
      <div className="relative">
        <HiSearch
          className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
          aria-hidden="true"
        />
        <input
          type="text"
          name="search"
          placeholder="Search by subject, class or location..."
          className="w-full rounded-lg border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm text-slate-700 transition-colors duration-200 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
        />
      </div>

      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <label className="block">
          <span className="sr-only">Subject</span>
          <select defaultValue={subjectOptions[0]} className={selectClasses}>
            {subjectOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
        
        <label className="block">
          <span className="sr-only">Class</span>
          <select defaultValue={classOptions[0]} className={selectClasses}>
            {classOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="sr-only">Location</span>
          <select defaultValue={locationOptions[0]} className={selectClasses}>
            {locationOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="sr-only">Budget</span>
          <select defaultValue={budgetOptions[0]} className={selectClasses}>
            {budgetOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
        <button
          type="button"
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-emerald-700 sm:w-auto"
        >
          <HiSearch className="h-4 w-4" aria-hidden="true" />
          Search
        </button>

        <button
          type="button"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition-colors duration-200 hover:text-emerald-600"
        >
          <HiOutlineRefresh className="h-4 w-4" aria-hidden="true" />
          Reset Filters
        </button>
      </div>
    </div>
  );
}

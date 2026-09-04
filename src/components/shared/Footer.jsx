import Link from "next/link";
import {
  HiOutlineAcademicCap,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Tuitions", href: "/tuitions" },
  { name: "Tutors", href: "/tutors" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const studentLinks = [
  { name: "Find a Tutor", href: "/tutors" },
  { name: "Browse Tuitions", href: "/tuitions" },
  { name: "Post a Tuition", href: "/tuitions/post" },
  { name: "How It Works", href: "/#how-it-works" },
];

const socialLinks = [
  { name: "Facebook", href: "https://facebook.com", icon: FaFacebookF },
  { name: "LinkedIn", href: "https://linkedin.com", icon: FaLinkedinIn },
  { name: "GitHub", href: "https://github.com", icon: FaGithub },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms & Conditions", href: "/terms-and-conditions" },
];

function FooterLink({ href, className = "", children, ...props }) {
  return (
    <Link
      href={href}
      className={`group relative inline-block text-sm text-slate-500 transition-colors duration-200 hover:text-emerald-600 ${className}`}
      {...props}
    >
      {children}
      <span className="pointer-events-none absolute -bottom-[1px] left-0 right-0 h-[2px] origin-left scale-x-0 rounded-full bg-emerald-600 transition-transform duration-300 ease-out group-hover:scale-x-100" />
    </Link>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 text-center sm:grid-cols-2 sm:text-left lg:grid-cols-4 lg:gap-8">
          <div className="flex flex-col items-center sm:items-start">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-white shadow-sm">
                <HiOutlineAcademicCap className="h-5 w-5" />
              </span>
              <span className="text-lg font-bold tracking-tight text-slate-900">
                E-Tuition<span className="text-emerald-600">BD</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500">
              Connecting students with trusted tutors for better learning.
            </p>

            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors duration-200 hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-600"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Quick links">
            <h3 className="text-sm font-semibold text-slate-900">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href}>{link.name}</FooterLink>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="For students">
            <h3 className="text-sm font-semibold text-slate-900">
              For Students
            </h3>
            <ul className="mt-4 space-y-3">
              {studentLinks.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href}>{link.name}</FooterLink>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-sm font-semibold text-slate-900">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-500">
              <li className="flex items-center justify-center gap-2 sm:justify-start">
                <HiOutlineMail
                  className="h-4 w-4 shrink-0 text-emerald-600"
                  aria-hidden="true"
                />
                <a href="mailto:support@etuitionbd.com">
                  support@etuitionbd.com
                  <span className="pointer-events-none absolute -bottom-[1px] left-0 right-0 h-[2px] origin-left scale-x-0 rounded-full bg-emerald-600 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                </a>
              </li>
              <li className="flex items-center justify-center gap-2 sm:justify-start">
                <HiOutlinePhone
                  className="h-4 w-4 shrink-0 text-emerald-600"
                  aria-hidden="true"
                />
                <a href="tel:+8801XXXXXXXXX">
                  +880 1XXX-XXXXXX
                  <span className="pointer-events-none absolute -bottom-[1px] left-0 right-0 h-[2px] origin-left scale-x-0 rounded-full bg-emerald-600 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                </a>
              </li>
              <li className="flex items-center justify-center gap-2 sm:justify-start">
                <HiOutlineLocationMarker
                  className="h-4 w-4 shrink-0 text-emerald-600"
                  aria-hidden="true"
                />
                <span>Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-100">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-6 text-center sm:flex-row sm:justify-between sm:text-left sm:px-6 lg:px-8">
          <p className="text-sm text-slate-500">
            © {year} E-TuitionBD. All rights reserved.
          </p>
          <ul className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <FooterLink href={link.href}>{link.name}</FooterLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

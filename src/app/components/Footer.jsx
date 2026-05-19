import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] px-6 pt-14 pb-6 text-[#f5ecd7] lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Brand Info */}
          <div>
            <Link href="/" className="inline-block">
              <h2 className="text-2xl font-extrabold tracking-wide text-[#f5ecd7]">
                Smart<span className="text-[#d8c08c]">Study</span>
              </h2>
              <p className="-mt-1 text-xs uppercase tracking-[0.25em] text-[#dbe4ee]/80">
                Nest
              </p>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-[#f5ecd7]/70">
              SmartStudy Nest helps students and library users find, book, and
              manage quiet study rooms with ease.
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-[#d8c08c]">
              Useful Links
            </h3>

            <ul className="space-y-3 text-sm text-[#f5ecd7]/80">
              <li>
                <Link href="/" className="transition hover:text-[#d8c08c]">
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/rooms"
                  className="transition hover:text-[#d8c08c]"
                >
                  Rooms
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="transition hover:text-[#d8c08c]"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact and Social */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-[#d8c08c]">
              Contact Information
            </h3>

            <div className="space-y-2 text-sm text-[#f5ecd7]/80">
              <p>Email: support@smartstudynest.com</p>
              <p>Phone: +880 1234-567890</p>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d8c08c] text-[#0f172a] transition duration-300 hover:-translate-y-1 hover:bg-[#e7d2a3]"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d8c08c] text-[#0f172a] transition duration-300 hover:-translate-y-1 hover:bg-[#e7d2a3]"
              >
                <FaXTwitter />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d8c08c] text-[#0f172a] transition duration-300 hover:-translate-y-1 hover:bg-[#e7d2a3]"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d8c08c] text-[#0f172a] transition duration-300 hover:-translate-y-1 hover:bg-[#e7d2a3]"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-[#f5ecd7]/10 pt-5 text-center">
          <p className="text-sm text-[#f5ecd7]/60">
            © {new Date().getFullYear()} SmartStudy Nest. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Zap, Shield, CheckCircle } from "lucide-react";
import heroImage from "./hero-image.png";
import logo from "../../public/logo.png";

// Hand-drawn loop decoration next to heading
const LoopIcon = ({ className }: { className?: string }) => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    className={className}
  >
    {/* Tilted bean/loop shape */}
    <path d="M16 26 C12 24 8 18 11 13 C14 8 22 10 26 15 C30 20 34 26 31 31 C28 36 21 37 17 33 C13 29 18 28 16 26 Z" />
    {/* Left motion / shadow arcs */}
    <path d="M6 25 C5 22 6 19 8 17" strokeWidth="1.8" />
    <path d="M4 21 C3 19 4 16 6 14" strokeWidth="1.2" />
    {/* Center visual dots */}
    <circle cx="21" cy="20" r="1.5" fill="currentColor" />
    <circle cx="26" cy="24" r="1.5" fill="currentColor" />
  </svg>
);

export default function LandingPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitting(true);
      try {
        await fetch('/api/waitlist', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        });
      } catch (err) {
        // proceed to thank-you even if the request fails
      }
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-grid-paper text-slate-900 selection:bg-black selection:text-white flex flex-col justify-between">
      {/* Header */}
      <nav className="flex items-center justify-between px-6 py-6 max-w-7xl mx-auto w-full relative z-20">
        <div className="flex items-center select-none">
          <Image
            src={logo}
            alt="Kae Me Logo"
            width={110}
            height={40}
            className="h-10 w-auto object-contain mix-blend-multiply"
            priority
          />
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-mono font-bold text-slate-700">
          <Link
            href="#features"
            className="hover:text-black border-b border-transparent hover:border-black transition-colors"
          >
            FEATURES
          </Link>
          <Link
            href="/about"
            className="hover:text-black border-b border-transparent hover:border-black transition-colors"
          >
            ABOUT
          </Link>
        </div>
        {/* <button className="hidden md:block font-mono font-bold text-xs uppercase border-2 border-black px-4 py-2 bg-white hover:bg-black hover:text-white transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5">
          Sign In
        </button> */}
      </nav>

      {/* Hero Section Container */}
      <main className="relative max-w-7xl mx-auto w-full px-6 pt-0 md:pt-3 flex-1 flex flex-col items-center">
        {/* Hero Content */}
        <div className="text-center max-w-3xl mx-auto mt-6 relative z-10">
          {/* Loop Icon & Main Title */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 mb-6">
            <LoopIcon className="w-12 h-12 md:w-14 md:h-14 text-black animate-pulse" />
            <h1 className="font-serif text-4xl md:text-6xl font-black tracking-tight text-slate-950 leading-none">
              Join our waitlist
            </h1>
          </div>

          {/* Subheading */}
          <p className="text-sm md:text-base text-slate-600 mb-10 max-w-xl mx-auto leading-relaxed font-medium">
            Never forget a renewal or milestone. Kae Me keeps track of your
            passport, driver's license, anniversaries, and key documents,
            sending you timely text and email reminders before they're due.
          </p>

          {/* Custom Waitlist Form */}
          {submitted ? (
            <div className="max-w-md mx-auto p-6 bg-white border-2 border-black text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-serif font-bold text-xl mb-2">
                Thank you for joining!
              </h4>
              <p className="text-sm text-slate-600 font-mono">
                We will notify you at {email} as soon as we launch.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col md:flex-row items-stretch justify-center gap-4 max-w-xl mx-auto"
            >
              {/* Dark Charcoal Email Input Box */}
              <div className="relative bg-[#262626] rounded-none px-5 py-4 flex-1 flex flex-col items-start border-2 border-black min-w-[280px] md:min-w-[340px]">
                <span className="absolute -top-3.5 left-5 bg-white text-black text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 border-2 border-black rounded-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  Email Address
                </span>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="joshajiboye10@gmail.com"
                  className="bg-transparent border-b border-white/30 focus:border-white text-white outline-none w-full py-1 text-sm font-mono placeholder:text-white/30 tracking-wide mt-1"
                />
              </div>

              {/* White uppercase button with thick shadow */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-white hover:bg-slate-100 text-black border-2 border-black font-mono font-black uppercase px-6 py-4 text-xs tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all active:scale-95 cursor-pointer flex items-center justify-center min-h-[56px] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] disabled:hover:translate-x-0 disabled:hover:translate-y-0"
              >
                {isSubmitting ? (
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                ) : (
                  "GET EARLY ACCESS"
                )}
              </button>
            </form>
          )}

          <p className="mt-6 text-xs text-slate-400 font-mono">
            Join 2,000+ people already on the list. No spam, ever.
          </p>
        </div>

        {/* Hero Bottom Image illustration (hero-image.png) */}
        <div className="mt-12 w-full max-w-4xl mx-auto px-4 select-none">
          <Image
            src={heroImage}
            alt="Hero Illustration"
            className="w-full h-auto object-contain mx-auto mix-blend-multiply"
            priority
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="py-3 border-t border-black bg-white text-center font-mono">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center mb-4 select-none">
            <Image
              src={logo}
              alt="Kae Me Logo"
              width={110}
              height={40}
              className="h-10 w-auto object-contain mix-blend-multiply"
            />
          </div>
          <p className="text-slate-500 text-xs font-bold">
            © {new Date().getFullYear()} KAE ME. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </div>
  );
}

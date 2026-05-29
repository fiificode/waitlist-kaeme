"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, Bell, Shield, ArrowLeft } from "lucide-react";
import logo from "../../../public/logo.png";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-grid-paper text-slate-900 selection:bg-black selection:text-white flex flex-col justify-between">
      {/* Header */}
      <nav className="flex items-center justify-between px-6 py-6 max-w-7xl mx-auto w-full relative z-20">
        <Link href="/" className="flex items-center select-none cursor-pointer">
          <Image
            src={logo}
            alt="Kae Me Logo"
            width={110}
            height={40}
            className="h-10 w-auto object-contain mix-blend-multiply"
            priority
          />
        </Link>
        <div className="hidden md:flex space-x-8 text-sm font-mono font-bold text-slate-700">
          <Link
            href="/#features"
            className="hover:text-black border-b border-transparent hover:border-black transition-colors"
          >
            FEATURES
          </Link>
          <Link
            href="/about"
            className="text-black border-b border-black transition-colors"
          >
            ABOUT
          </Link>
        </div>
        <Link
          href="/"
          className="hidden md:block font-mono font-bold text-xs uppercase border-2 border-black px-4 py-2 bg-white hover:bg-black hover:text-white transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5"
        >
          Join Waitlist
        </Link>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto w-full px-6 pt-12 pb-20 flex-1 relative z-10">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-black mb-10 transition-colors"
        >
          <ArrowLeft size={14} />
          Back to Home
        </Link>

        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="font-serif text-4xl md:text-6xl font-black tracking-tight text-slate-950 mb-6 leading-none">
            About Kae Me
          </h1>
          <p className="text-base text-center md:text-lg text-slate-700 leading-relaxed font-medium max-w-3xl">
            In Twi (a language spoken in Ghana), <strong>“Kae Me”</strong>{" "}
            translates simply to <strong>Remind Me.</strong>
            We built Kae Me because life is busy, and key dates shouldn't catch
            you off guard. From passports and driver's licenses to visa
            expirations and personal anniversaries, Kae Me is designed to keep
            your documents in order and give you total peace of mind.
          </p>
        </div>

        {/* Our Mission Card */}
        <div className="bg-white border-2 border-black p-8 rounded-none shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-16">
          <h2 className="font-serif text-2xl md:text-3xl font-black text-slate-950 mb-4">
            The Mission
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium mb-6">
            Important dates are scattered across physical cards, emails, and
            calendar apps. Too often, we only realize a document has expired
            when we are checking in for a flight or pulled over on the road. Kae
            Me consolidates these crucial deadlines into one secure dashboard
            and reaches you directly where you're looking—via text messages
            (SMS) and email notifications.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="flex gap-3 items-start">
              <div className="p-2 bg-slate-100 border border-black rounded-none">
                <Clock size={18} className="text-black" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-sm text-slate-950 mb-1">
                  Time Tracking
                </h4>
                <p className="text-xs text-slate-500 font-medium">
                  Proactive alerts sent 90, 30, and 7 days prior to expiry.
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <div className="p-2 bg-slate-100 border border-black rounded-none">
                <Bell size={18} className="text-black" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-sm text-slate-950 mb-1">
                  Multi-Channel
                </h4>
                <p className="text-xs text-slate-500 font-medium">
                  Notifications delivered directly through SMS text and email.
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <div className="p-2 bg-slate-100 border border-black rounded-none">
                <Shield size={18} className="text-black" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-sm text-slate-950 mb-1">
                  Bank-Level Security
                </h4>
                <p className="text-xs text-slate-500 font-medium">
                  Fully encrypted storage ensuring your documents remain
                  private.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works Header */}
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl font-black text-slate-950">
            How It Works
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              step: "01",
              title: "Register Expirations",
              description:
                "Enter expiration details of your passport, driver's license, insurance, or custom milestones in under 10 seconds.",
            },
            {
              step: "02",
              title: "Choose Alert Times",
              description:
                "Specify how far in advance you want to be notified. Standard alerts go out 3 months, 1 month, and 1 week before.",
            },
            {
              step: "03",
              title: "Relax & Be Reminded",
              description:
                "Receive timely SMS and email alerts with clear action details so you can renew or prepare warning-free.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between"
            >
              <div className="font-mono text-3xl font-black text-slate-300 mb-4">
                {item.step}
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-slate-950 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-xs md:text-sm font-medium leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA section */}
        <div className="text-center bg-[#262626] border-2 border-black p-8 md:p-12 rounded-none text-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="font-serif text-2xl md:text-3xl font-black mb-4">
            Be the first to know when we launch
          </h3>
          <p className="text-slate-300 text-sm font-mono mb-8 max-w-lg mx-auto">
            Join the waiting list today to secure early access and lock in free
            lifetime notifications for your first 3 documents.
          </p>
          <Link
            href="/"
            className="bg-white hover:bg-slate-100 text-black border-2 border-black font-mono font-black uppercase px-8 py-4 text-xs tracking-widest shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all inline-block active:scale-95"
          >
            JOIN THE WAITLIST
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t-2 border-black bg-white text-center font-mono">
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

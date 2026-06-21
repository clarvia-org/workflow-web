"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { type Lang, l, LANGUAGES } from "@/lib/i18n";
import { headlineStyle } from "../data";

/* -- Donation tier data -- */

const MONTHLY_TIERS = [
  { amount: 10, label: "Keep the service free" },
  { amount: 25, label: "Support multilingual maintenance", default: true },
  { amount: 50, label: "Fund source-backed updates" },
  { amount: 100, label: "Founding Circle supporter" },
];

const ONETIME_TIERS = [
  { amount: 15, label: "Review and maintain one practical source" },
  { amount: 35, label: "Help translate and check one family-facing task" },
  { amount: 75, label: "Validate part of a Luxembourg workflow" },
  { amount: 150, label: "Strengthen cross-border guidance" },
  { amount: 500, label: "Support one public-service module" },
  { amount: 1500, label: "Founding build partner" },
];

/* -- What donations fund -- */

const FUND_ITEMS = [
  { icon: "\u{1F4C4}", label: "Source review and maintenance" },
  { icon: "\u{1F30D}", label: "Trilingual translation (EN/FR/DE)" },
  { icon: "\u267F", label: "Accessibility (WCAG 2.1 AA)" },
  { icon: "\u2713", label: "Workflow validation" },
  { icon: "\u{1F5A5}\uFE0F", label: "Hosting and infrastructure" },
  { icon: "\u{1F91D}", label: "Community outreach" },
];

/* -- Trust elements -- */

const TRUST_ITEMS = [
  "Clarvia ASBL - registered Luxembourg non-profit (RCS F15680)",
  "Build and validation phase - early support has outsized impact",
  "Free for families - always",
  "Luxembourg-first - built for local families",
  "No data monetisation - we never sell family data",
  "Not professional advice - we help families find their footing",
  "Open source - public GitHub, auditable workflows",
];

export default function SupportPage() {
  const params = useParams();
  const lang = (params.lang as Lang) || "en";
  const [tab, setTab] = useState<"monthly" | "onetime">("monthly");
  const [selectedAmount, setSelectedAmount] = useState<number>(25);

  const tiers = tab === "monthly" ? MONTHLY_TIERS : ONETIME_TIERS;

  return (
    <>
      {/* Header */}
      <header
        aria-label={l(lang, "Site header", "Site header", "Site header")}
        className="py-5 px-6 sm:px-12 flex items-center justify-between z-50 relative"
      >
        <Link
          href={`/${lang}`}
          aria-label={l(lang, "Clarvia home", "Clarvia home", "Clarvia home")}
          className="block"
        >
          <img src="/clarvia-logo.png" alt="Clarvia" className="h-20 w-auto" />
        </Link>
        <nav
          aria-label={l(lang, "Language switcher", "Language switcher", "Language switcher")}
          className="flex items-center gap-2"
        >
          {LANGUAGES.map((code) => (
            <Link
              key={code}
              href={`/${code}/support`}
              aria-label={`Switch to ${code.toUpperCase()}`}
              aria-current={lang === code ? "page" : undefined}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                lang === code
                  ? "bg-white text-calm-blue-800 shadow-sm border border-calm-blue-200"
                  : "text-calm-blue-500 hover:bg-white/40"
              }`}
            >
              {code.toUpperCase()}
            </Link>
          ))}
        </nav>
      </header>

      <main className="flex-grow w-full max-w-2xl mx-auto px-4 sm:px-6 py-16 relative z-10">

        {/* A. Hero */}
        <h1
          className="text-4xl sm:text-5xl font-semibold tracking-tight mb-6"
          style={headlineStyle}
        >
          {l(lang, "Support Clarvia", "Support Clarvia", "Support Clarvia")}
        </h1>
        <p className="text-lg text-calm-blue-600 leading-relaxed mb-4">
          {l(lang,
            "Help build a free, multilingual public service for families after a death.",
            "Help build a free, multilingual public service for families after a death.",
            "Help build a free, multilingual public service for families after a death."
          )}
        </p>
        <p className="text-base text-calm-blue-500 leading-relaxed mb-12">
          {l(lang,
            "Clarvia is in its build and validation phase. Your early support helps us lay the foundation: reviewing official sources, translating guidance into three languages, and building accessible, trustworthy workflows that any family can use for free.",
            "Clarvia is in its build and validation phase. Your early support helps us lay the foundation: reviewing official sources, translating guidance into three languages, and building accessible, trustworthy workflows that any family can use for free.",
            "Clarvia is in its build and validation phase. Your early support helps us lay the foundation: reviewing official sources, translating guidance into three languages, and building accessible, trustworthy workflows that any family can use for free."
          )}
        </p>

        {/* B. What your donation funds */}
        <section className="mb-12" aria-labelledby="funds-heading">
          <h2
            id="funds-heading"
            className="text-xl font-semibold text-calm-blue-800 mb-4"
            style={{ fontFamily: headlineStyle.fontFamily }}
          >
            {l(lang, "What your donation funds", "What your donation funds", "What your donation funds")}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {FUND_ITEMS.map((item) => (
              <div
                key={item.label}
                className="glass-panel p-4 text-center"
              >
                <span className="text-2xl mb-2 block" aria-hidden="true">{item.icon}</span>
                <p className="text-sm font-medium text-calm-blue-700">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* C. Donation amounts */}
        <section className="mb-12" aria-labelledby="amounts-heading">
          <h2
            id="amounts-heading"
            className="text-xl font-semibold text-calm-blue-800 mb-4"
            style={{ fontFamily: headlineStyle.fontFamily }}
          >
            {l(lang, "Choose an amount", "Choose an amount", "Choose an amount")}
          </h2>

          {/* Tab toggle */}
          <div className="flex gap-1 p-1 rounded-full bg-calm-blue-100/60 mb-6 w-fit">
            <button
              onClick={() => { setTab("monthly"); setSelectedAmount(25); }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                tab === "monthly"
                  ? "bg-white text-calm-blue-800 shadow-sm"
                  : "text-calm-blue-500 hover:text-calm-blue-700"
              }`}
            >
              {l(lang, "Monthly", "Monthly", "Monthly")}
            </button>
            <button
              onClick={() => { setTab("onetime"); setSelectedAmount(75); }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                tab === "onetime"
                  ? "bg-white text-calm-blue-800 shadow-sm"
                  : "text-calm-blue-500 hover:text-calm-blue-700"
              }`}
            >
              {l(lang, "One-time", "One-time", "One-time")}
            </button>
          </div>

          {/* Tier cards */}
          <div className={`grid gap-3 ${tab === "monthly" ? "grid-cols-2" : "grid-cols-2 sm:grid-cols-3"}`}>
            {tiers.map((tier) => (
              <button
                key={tier.amount}
                onClick={() => setSelectedAmount(tier.amount)}
                className={`glass-panel p-4 text-left cursor-pointer transition-all ${
                  selectedAmount === tier.amount
                    ? "ring-2 ring-calm-lilac-400 border-calm-lilac-300"
                    : "hover:ring-1 hover:ring-calm-blue-200"
                }`}
              >
                <p className="text-2xl font-semibold text-calm-blue-800 mb-1">
                  &euro;{tier.amount.toLocaleString()}
                  {tab === "monthly" && (
                    <span className="text-sm font-normal text-calm-blue-400">
                      /mo
                    </span>
                  )}
                </p>
                <p className="text-sm text-calm-blue-500">
                  {tier.label}
                </p>
              </button>
            ))}
          </div>

          {/* IBAN and payment info */}
          <div className="mt-8 space-y-4">
            <div className="donation-iban text-center">
              <p className="text-xs text-calm-blue-400 mb-1 font-medium uppercase tracking-wider">
                {l(lang, "Bank transfer", "Bank transfer", "Bank transfer")}
              </p>
              <p className="text-calm-blue-500 italic">
                {l(lang,
                  "IBAN will be published here shortly",
                  "IBAN will be published here shortly",
                  "IBAN will be published here shortly"
                )}
              </p>
              <p className="text-xs text-calm-blue-400 mt-1">
                Clarvia ASBL &middot; RCS F15680
              </p>
            </div>
            <p className="text-sm text-calm-blue-400 text-center">
              {l(lang,
                "Additional payment options coming soon.",
                "Additional payment options coming soon.",
                "Additional payment options coming soon."
              )}
            </p>
          </div>
        </section>

        {/* D. Trust block */}
        <section className="mb-12" aria-labelledby="trust-heading">
          <h2
            id="trust-heading"
            className="text-xl font-semibold text-calm-blue-800 mb-4"
            style={{ fontFamily: headlineStyle.fontFamily }}
          >
            {l(lang, "Why trust Clarvia", "Why trust Clarvia", "Why trust Clarvia")}
          </h2>
          <ul className="space-y-3">
            {TRUST_ITEMS.map((item) => (
              <li
                key={item}
                className="flex gap-3 items-start p-3 rounded-xl bg-white/40 border border-calm-blue-100"
              >
                <span className="governance-check mt-0.5" aria-hidden="true">&check;</span>
                <span className="text-sm text-calm-blue-600">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* E. Corporate sponsors */}
        <section className="mb-12" aria-labelledby="corporate-heading">
          <h2
            id="corporate-heading"
            className="text-xl font-semibold text-calm-blue-800 mb-4"
            style={{ fontFamily: headlineStyle.fontFamily }}
          >
            {l(lang, "Corporate sponsors", "Corporate sponsors", "Corporate sponsors")}
          </h2>
          <div className="glass-panel p-6">
            <p className="text-sm text-calm-blue-600 leading-relaxed mb-4">
              {l(lang,
                "Companies supporting Clarvia help build public-interest infrastructure. Sponsors receive acknowledgement but never influence over family guidance, user data, or referral rights.",
                "Companies supporting Clarvia help build public-interest infrastructure. Sponsors receive acknowledgement but never influence over family guidance, user data, or referral rights.",
                "Companies supporting Clarvia help build public-interest infrastructure. Sponsors receive acknowledgement but never influence over family guidance, user data, or referral rights."
              )}
            </p>
            <a
              href={`/${lang}/contact`}
              className="btn-secondary inline-flex items-center gap-2 px-6 py-3 text-base"
            >
              {l(lang, "Get in touch", "Get in touch", "Get in touch")}
            </a>
          </div>
        </section>

        {/* F. Privacy note */}
        <section className="mb-8" aria-labelledby="privacy-heading">
          <h2
            id="privacy-heading"
            className="text-xl font-semibold text-calm-blue-800 mb-4"
            style={{ fontFamily: headlineStyle.fontFamily }}
          >
            {l(lang, "Privacy", "Privacy", "Privacy")}
          </h2>
          <p className="text-sm text-calm-blue-500 leading-relaxed">
            {l(lang,
              "Your donation supports Clarvia ASBL's mission. We collect only the information needed to process your gift and send a receipt. We never collect bereavement details in our donor records. This acknowledgement is not a tax certificate.",
              "Your donation supports Clarvia ASBL's mission. We collect only the information needed to process your gift and send a receipt. We never collect bereavement details in our donor records. This acknowledgement is not a tax certificate.",
              "Your donation supports Clarvia ASBL's mission. We collect only the information needed to process your gift and send a receipt. We never collect bereavement details in our donor records. This acknowledgement is not a tax certificate."
            )}
          </p>
        </section>

        {/* G. Receipt note */}
        <section className="mb-12" aria-labelledby="receipt-heading">
          <div className="p-4 rounded-xl bg-calm-blue-50/60 border border-calm-blue-100">
            <p className="text-xs text-calm-blue-500 leading-relaxed">
              {l(lang,
                "Clarvia ASBL does not currently have tax-deductible donation status in Luxembourg. Your donation receipt is an acknowledgement of support, not a tax certificate.",
                "Clarvia ASBL does not currently have tax-deductible donation status in Luxembourg. Your donation receipt is an acknowledgement of support, not a tax certificate.",
                "Clarvia ASBL does not currently have tax-deductible donation status in Luxembourg. Your donation receipt is an acknowledgement of support, not a tax certificate."
              )}
            </p>
          </div>
        </section>

      </main>
    </>
  );
}

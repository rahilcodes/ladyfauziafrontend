"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const faqItems = [
  {
    question: "How long will my order take to arrive?",
    answer:
      "Standard shipping within the US takes 5–7 business days. Express shipping delivers in 2–3 business days. International orders typically arrive within 10–15 business days, depending on the destination and customs processing.",
  },
  {
    question: "Do you offer free shipping?",
    answer:
      "Yes! We offer complimentary standard shipping on all US orders over $150. Orders under $150 ship at a flat rate of $8.95.",
  },
  {
    question: "Can I return sale items?",
    answer:
      "Sale items are final sale and cannot be returned or exchanged. We recommend reviewing our size guide carefully before purchasing sale items.",
  },
  {
    question: "How do I initiate a return?",
    answer:
      "Email us at support@ladyfauzia.com with your order number and the items you'd like to return. We'll provide a prepaid return label and guide you through the process.",
  },
  {
    question: "When will I receive my refund?",
    answer:
      "Once we receive and inspect your return, your refund will be processed within 5–7 business days. The refund will be credited to your original payment method.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship to most countries worldwide. International shipping rates are calculated at checkout based on destination and package weight. Please note that customs duties and import taxes may apply and are the responsibility of the customer.",
  },
  {
    question: "Can I change or cancel my order?",
    answer:
      "We begin processing orders quickly, so please contact us at support@ladyfauzia.com as soon as possible if you need to make changes. We'll do our best to accommodate your request before shipment.",
  },
];

function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-border">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-outfit text-sm font-semibold tracking-[0.05em] text-foreground md:text-base">
          {question}
        </span>
        <span
          className={`ml-4 shrink-0 text-primary transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="8"
              y1="2"
              x2="8"
              y2="14"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <line
              x1="2"
              y1="8"
              x2="14"
              y2="8"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-sm leading-relaxed text-muted-strong">{answer}</p>
      </div>
    </div>
  );
}

export default function ShippingReturnsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative h-[45vh] min-h-[360px] w-full overflow-hidden">
        <Image
          src="/image/shipping_hero.png"
          alt="Lady Fauzia Co. — Shipping & Returns"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
          <p className="mb-4 text-xs tracking-[0.3em] uppercase text-white/80">
            Customer Care
          </p>
          <h1 className="font-outfit text-4xl font-semibold tracking-[0.15em] uppercase md:text-6xl">
            Shipping &amp; Returns
          </h1>
        </div>
      </section>

      {/* ── Breadcrumb ────────────────────────────────────────── */}
      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-screen-xl px-6 py-6 md:px-12"
      >
        <ol className="flex items-center gap-2 text-xs tracking-[0.15em] text-muted">
          <li>
            <Link href="/" className="transition hover:text-primary">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-foreground">Shipping &amp; Returns</li>
        </ol>
      </nav>

      {/* ── Shipping Info ─────────────────────────────────────── */}
      <section className="mx-auto max-w-screen-xl px-6 py-16 md:px-12 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <p className="mb-3 text-xs tracking-[0.2em] uppercase text-primary">
              Shipping
            </p>
            <h2 className="font-outfit text-3xl font-semibold tracking-[0.15em] uppercase text-foreground md:text-4xl">
              Delivery
              <br />
              Information
            </h2>
            <div className="mt-8 space-y-5 text-sm leading-relaxed text-muted-strong md:text-base">
              <p>
                We want your Lady Fauzia Co. pieces to reach you as swiftly and
                safely as possible. Every order is carefully packaged in our
                signature boxes — because the experience of unboxing should be
                as beautiful as the garment inside.
              </p>
            </div>

            <div className="mt-10 space-y-6">
              <div className="border-t border-border pt-5">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-outfit text-sm font-semibold tracking-[0.1em] uppercase text-foreground">
                      Standard Shipping
                    </h3>
                    <p className="mt-1 text-sm text-muted-strong">
                      5–7 business days
                    </p>
                  </div>
                  <p className="text-sm font-semibold text-foreground">
                    $8.95
                  </p>
                </div>
              </div>
              <div className="border-t border-border pt-5">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-outfit text-sm font-semibold tracking-[0.1em] uppercase text-foreground">
                      Express Shipping
                    </h3>
                    <p className="mt-1 text-sm text-muted-strong">
                      2–3 business days
                    </p>
                  </div>
                  <p className="text-sm font-semibold text-foreground">
                    $18.95
                  </p>
                </div>
              </div>
              <div className="border-t border-border pt-5">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-outfit text-sm font-semibold tracking-[0.1em] uppercase text-foreground">
                      Free Shipping
                    </h3>
                    <p className="mt-1 text-sm text-muted-strong">
                      On all US orders over $150
                    </p>
                  </div>
                  <p className="text-sm font-semibold text-primary">Free</p>
                </div>
              </div>
              <div className="border-t border-border pt-5">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-outfit text-sm font-semibold tracking-[0.1em] uppercase text-foreground">
                      International Shipping
                    </h3>
                    <p className="mt-1 text-sm text-muted-strong">
                      10–15 business days · rates at checkout
                    </p>
                  </div>
                  <p className="text-sm font-semibold text-foreground">
                    Varies
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Returns */}
          <div>
            <p className="mb-3 text-xs tracking-[0.2em] uppercase text-primary">
              Returns
            </p>
            <h2 className="font-outfit text-3xl font-semibold tracking-[0.15em] uppercase text-foreground md:text-4xl">
              Our Return
              <br />
              Policy
            </h2>
            <div className="mt-8 space-y-5 text-sm leading-relaxed text-muted-strong md:text-base">
              <p>
                We want you to love every Lady Fauzia Co. piece. If something
                isn&apos;t quite right, we offer a generous return window to
                ensure your complete satisfaction.
              </p>
            </div>

            <div className="mt-10 space-y-6">
              <div className="border-t border-border pt-5">
                <h3 className="font-outfit text-sm font-semibold tracking-[0.1em] uppercase text-foreground">
                  30-Day Return Window
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-strong">
                  You have 30 days from the date of delivery to initiate a
                  return. Items must be unworn, unwashed, and in their original
                  condition with all tags attached.
                </p>
              </div>
              <div className="border-t border-border pt-5">
                <h3 className="font-outfit text-sm font-semibold tracking-[0.1em] uppercase text-foreground">
                  Condition Requirements
                </h3>
                <ul className="mt-2 space-y-1 text-sm text-muted-strong">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary">✦</span>
                    Items must be unworn with original tags attached
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary">✦</span>
                    No alterations, stains, or damage
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary">✦</span>
                    Original packaging preferred
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary">✦</span>
                    Hygiene items (hijabs, jewelry) are final sale
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Exchange Process ───────────────────────────────────── */}
      <section className="border-t border-border bg-primary-soft py-16 md:py-24">
        <div className="mx-auto max-w-screen-xl px-6 md:px-12">
          <div className="mb-12 text-center md:mb-16">
            <p className="mb-3 text-xs tracking-[0.2em] uppercase text-primary">
              Exchanges
            </p>
            <h2 className="font-outfit text-3xl font-semibold tracking-[0.15em] uppercase text-foreground md:text-4xl">
              Exchange Process
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm text-muted-strong">
              Need a different size or colour? Follow these simple steps.
            </p>
          </div>

          <div className="mx-auto grid max-w-3xl gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-primary bg-background">
                <span className="font-outfit text-lg font-semibold text-primary">
                  01
                </span>
              </div>
              <h3 className="font-outfit text-sm font-semibold tracking-[0.15em] uppercase text-foreground">
                Contact Us
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-strong">
                Email{" "}
                <a
                  href="mailto:support@ladyfauzia.com"
                  className="text-primary underline underline-offset-2"
                >
                  support@ladyfauzia.com
                </a>{" "}
                with your order number and the exchange you&apos;d like.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-primary bg-background">
                <span className="font-outfit text-lg font-semibold text-primary">
                  02
                </span>
              </div>
              <h3 className="font-outfit text-sm font-semibold tracking-[0.15em] uppercase text-foreground">
                Ship It Back
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-strong">
                We&apos;ll send you a prepaid return label. Pack your item in its
                original packaging and drop it off at the nearest carrier.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-primary bg-background">
                <span className="font-outfit text-lg font-semibold text-primary">
                  03
                </span>
              </div>
              <h3 className="font-outfit text-sm font-semibold tracking-[0.15em] uppercase text-foreground">
                Receive Your Exchange
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-strong">
                Once we receive your return, your new item will be shipped within
                2 business days. We&apos;ll send you a tracking number.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Accordion ─────────────────────────────────────── */}
      <section className="mx-auto max-w-screen-xl px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-2xl">
          <div className="mb-10 text-center">
            <p className="mb-3 text-xs tracking-[0.2em] uppercase text-primary">
              FAQ
            </p>
            <h2 className="font-outfit text-3xl font-semibold tracking-[0.15em] uppercase text-foreground md:text-4xl">
              Common Questions
            </h2>
          </div>

          <div>
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact CTA ───────────────────────────────────────── */}
      <section className="border-t border-border bg-primary-soft py-16 md:py-20">
        <div className="mx-auto max-w-screen-xl px-6 text-center md:px-12">
          <p className="font-outfit text-xl font-semibold tracking-[0.2em] uppercase text-foreground md:text-2xl">
            Still Have Questions?
          </p>
          <p className="mx-auto mt-4 max-w-md text-sm text-muted-strong">
            Our customer care team is here to help. Reach out and we&apos;ll
            respond within 24 hours.
          </p>
          <a
            href="mailto:support@ladyfauzia.com"
            className="mt-8 inline-block border border-foreground px-10 py-3 text-xs tracking-[0.2em] uppercase text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            support@ladyfauzia.com
          </a>
        </div>
      </section>
    </>
  );
}

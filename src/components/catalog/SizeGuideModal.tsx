"use client";

import { useState } from "react";
import { X } from "lucide-react";

interface SizeGuideModalProps {
  category?: string;
}

const DRESS_SIZES = [
  { us: "0", bust: '31"', waist: '24"', hip: '34"' },
  { us: "2", bust: '32"', waist: '25"', hip: '35"' },
  { us: "4", bust: '33"', waist: '26"', hip: '36"' },
  { us: "6", bust: '34.5"', waist: '27.5"', hip: '37.5"' },
  { us: "8", bust: '36"', waist: '29"', hip: '39"' },
  { us: "10", bust: '37.5"', waist: '30.5"', hip: '40.5"' },
  { us: "12", bust: '39.5"', waist: '32"', hip: '42"' },
  { us: "14", bust: '41.5"', waist: '34"', hip: '44"' },
];

const HIJAB_SIZES = [
  { name: "Standard", length: '70"', width: '27"' },
  { name: "Large", length: '79"', width: '31"' },
  { name: "Square", length: '45"', width: '45"' },
];

const RING_SIZES = [
  { us: "5", circumference: '49.3mm', diameter: '15.7mm' },
  { us: "6", circumference: '51.9mm', diameter: '16.5mm' },
  { us: "7", circumference: '54.4mm', diameter: '17.3mm' },
  { us: "8", circumference: '57.0mm', diameter: '18.1mm' },
  { us: "9", circumference: '59.5mm', diameter: '18.9mm' },
  { us: "10", circumference: '62.1mm', diameter: '19.8mm' },
];

export default function SizeGuideModal({ category = "dresses" }: SizeGuideModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-1.5 text-xs tracking-[0.1em] text-primary hover:text-primary-strong transition-colors uppercase cursor-pointer"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M1 13L5 9M5 9V12.5M5 9H1.5M13 1L9 5M9 5V1.5M9 5H12.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Size Guide
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center"
          onClick={() => setIsOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

          {/* Modal */}
          <div
            className="relative w-full max-w-lg max-h-[85vh] overflow-y-auto bg-background dark:bg-surface-darkest rounded-t-2xl sm:rounded-2xl shadow-2xl animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 border-b border-border/50 bg-background/95 dark:bg-surface-darkest/95 backdrop-blur-md rounded-t-2xl">
              <h2 className="text-sm font-semibold tracking-[0.15em] uppercase text-foreground">
                Size Guide
              </h2>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1 text-muted hover:text-foreground transition-colors cursor-pointer"
                aria-label="Close size guide"
              >
                <X size={18} />
              </button>
            </div>

            <div className="px-6 py-6 space-y-8">
              {/* Dresses */}
              <div>
                <h3 className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-3">
                  Dresses & Kaftans
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="py-2 pr-4 text-left font-semibold text-foreground/70 tracking-wide">US Size</th>
                        <th className="py-2 pr-4 text-left font-semibold text-foreground/70 tracking-wide">Bust</th>
                        <th className="py-2 pr-4 text-left font-semibold text-foreground/70 tracking-wide">Waist</th>
                        <th className="py-2 text-left font-semibold text-foreground/70 tracking-wide">Hip</th>
                      </tr>
                    </thead>
                    <tbody>
                      {DRESS_SIZES.map((row) => (
                        <tr key={row.us} className="border-b border-border/30">
                          <td className="py-2.5 pr-4 font-medium text-foreground">{row.us}</td>
                          <td className="py-2.5 pr-4 text-foreground/70">{row.bust}</td>
                          <td className="py-2.5 pr-4 text-foreground/70">{row.waist}</td>
                          <td className="py-2.5 text-foreground/70">{row.hip}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Hijabs */}
              <div>
                <h3 className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-3">
                  Hijabs
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="py-2 pr-4 text-left font-semibold text-foreground/70 tracking-wide">Style</th>
                        <th className="py-2 pr-4 text-left font-semibold text-foreground/70 tracking-wide">Length</th>
                        <th className="py-2 text-left font-semibold text-foreground/70 tracking-wide">Width</th>
                      </tr>
                    </thead>
                    <tbody>
                      {HIJAB_SIZES.map((row) => (
                        <tr key={row.name} className="border-b border-border/30">
                          <td className="py-2.5 pr-4 font-medium text-foreground">{row.name}</td>
                          <td className="py-2.5 pr-4 text-foreground/70">{row.length}</td>
                          <td className="py-2.5 text-foreground/70">{row.width}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Rings */}
              <div>
                <h3 className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-3">
                  Rings
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="py-2 pr-4 text-left font-semibold text-foreground/70 tracking-wide">US Size</th>
                        <th className="py-2 pr-4 text-left font-semibold text-foreground/70 tracking-wide">Circumference</th>
                        <th className="py-2 text-left font-semibold text-foreground/70 tracking-wide">Diameter</th>
                      </tr>
                    </thead>
                    <tbody>
                      {RING_SIZES.map((row) => (
                        <tr key={row.us} className="border-b border-border/30">
                          <td className="py-2.5 pr-4 font-medium text-foreground">{row.us}</td>
                          <td className="py-2.5 pr-4 text-foreground/70">{row.circumference}</td>
                          <td className="py-2.5 text-foreground/70">{row.diameter}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* How to Measure */}
              <div className="bg-primary-soft dark:bg-primary/10 rounded-lg p-5">
                <h3 className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-3">
                  How to Measure
                </h3>
                <ul className="space-y-2 text-xs text-foreground/70 leading-relaxed">
                  <li className="flex gap-2">
                    <span className="text-primary font-semibold">1.</span>
                    <span><strong>Bust:</strong> Measure around the fullest part of your chest.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-semibold">2.</span>
                    <span><strong>Waist:</strong> Measure around the narrowest part of your natural waist.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-semibold">3.</span>
                    <span><strong>Hips:</strong> Measure around the fullest part of your hips.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-semibold">4.</span>
                    <span><strong>Ring:</strong> Wrap a string around your finger, mark the overlap, and measure in mm.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </>
  );
}

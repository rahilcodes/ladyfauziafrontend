"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@components/common/button/LoadingButton";
import { userSubscribe } from "@utils/actions";
import { useCustomToast } from "@utils/hooks/useToast";
import { EMAIL_REGEX } from "@utils/constants";

type FormValues = {
  email: string;
};

export default function NewsletterSection() {
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ mode: "onSubmit" });
  const { showToast } = useCustomToast();

  const onSubmit = async (data: FormValues) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("email", data.email);

    try {
      const result = await userSubscribe(undefined as any, formData);
      if (result?.errors?.apiRes?.status === true) {
        setSubscribed(true);
        reset();
        showToast("Welcome to the Lady Fauzia family!", "success");
      } else if (result?.errors?.email) {
        showToast(result.errors.email[0], "warning");
      } else if (result?.errors?.apiRes?.msg) {
        showToast(result.errors.apiRes.msg, "warning");
      }
    } catch {
      showToast("Something went wrong. Please try again.", "warning");
    }
    setLoading(false);
  };

  return (
    <section className="py-16 sm:py-20">
      <div className="relative overflow-hidden rounded-xl bg-[#1A1A1A] dark:bg-[#0D0D0D] px-6 py-12 sm:px-12 sm:py-16 text-center">
        {/* Decorative border */}
        <div className="absolute inset-3 sm:inset-4 border border-[#C5A880]/20 rounded-lg pointer-events-none" />

        <span className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] text-[#C5A880] uppercase mb-3 block pl-[0.3em]">
          Stay Connected
        </span>

        <h2 className="text-xl sm:text-2xl lg:text-3xl font-light tracking-[0.15em] text-white uppercase mb-3">
          Join the Joy
        </h2>

        <p className="text-xs sm:text-sm font-light tracking-wide text-neutral-400 max-w-md mx-auto mb-8 leading-relaxed">
          Be the first to discover new collections, exclusive offers, and style
          inspiration delivered to your inbox.
        </p>

        {subscribed ? (
          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-[#C5A880]/20 flex items-center justify-center mb-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M5 10L8.5 13.5L15 7"
                  stroke="#C5A880"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="text-sm text-[#C5A880] tracking-[0.1em]">
              Welcome to the family.
            </p>
          </div>
        ) : (
          <form
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              aria-label="Email Address"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: EMAIL_REGEX,
                  message: "Enter a valid email",
                },
              })}
              className="w-full sm:flex-1 h-11 px-4 bg-white/5 border border-[#C5A880]/30 text-white text-sm tracking-wide placeholder:text-neutral-500 outline-none focus:border-[#C5A880] transition-colors"
              placeholder="Your email address"
            />
            <Button
              className="!w-full sm:!w-auto !h-11 !px-8 !bg-[#C5A880] hover:!bg-[#B59469] !text-[#1A1A1A] !font-semibold !text-xs !tracking-[0.15em] !uppercase !rounded-none !border-none transition-colors"
              disabled={loading || isSubmitting}
              loading={loading || isSubmitting}
              title="Subscribe"
              type="submit"
            />
          </form>
        )}

        {errors.email && (
          <p className="mt-2 text-xs text-red-400">{errors.email.message}</p>
        )}
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { Button, Input } from "@heroui/react";
import { Copy, Check, Send, Award, Gift, Star, Users, Calendar, ArrowUpRight } from "lucide-react";
import { inviteFriendAction } from "@/utils/actions";
import { useCustomToast } from "@/utils/hooks/useToast";
import AccountBreadcrumbs from "@/components/layout/AccountBreadcrumbs";
import MobileNavHeader from "@/components/layout/navbar/MobileNavHeader";
import { HideMainNavOnMobile } from "@/components/common/HideMainNavOnMobile";

interface Transaction {
  id: number;
  points: number;
  type: string;
  description: string;
  createdAt: string | null;
}

interface LoyaltyProps {
  loyalty: {
    joyPointsBalance: number;
    vipTierName: string;
    totalSpend: number;
    progressPercent: number;
    nextTierThreshold: number;
    benefits: string;
    referralCode: string;
    referralLink: string;
    transactions: Transaction[];
  };
}

export default function LoyaltyDetails({ loyalty }: LoyaltyProps) {
  const { showToast } = useCustomToast();
  const [friendEmail, setFriendEmail] = useState("");
  const [isInviting, setIsInviting] = useState(false);
  const [copied, setCopied] = useState(false);

  // Generate full sharing link locally if referralLink is relative or empty
  const fullReferralLink = typeof window !== "undefined"
    ? `${window.location.origin}/customer/register?ref=${loyalty.referralCode}`
    : loyalty.referralLink || "";

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(fullReferralLink);
      setCopied(true);
      showToast("Referral link copied to clipboard!", "success");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      showToast("Failed to copy link.", "danger");
    }
  };

  const handleInvite = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!friendEmail) {
      showToast("Please enter a valid email address.", "warning");
      return;
    }

    try {
      setIsInviting(true);
      const res = await inviteFriendAction(friendEmail);

      if (res.success) {
        showToast(res.message, "success");
        setFriendEmail("");
      } else {
        showToast(res.message, "danger");
      }
    } catch (err: any) {
      showToast(err?.message || "Something went wrong.", "danger");
    } finally {
      setIsInviting(false);
    }
  };

  const getTierBadgeColor = (tier: string) => {
    switch (tier.toLowerCase()) {
      case "elite":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 border-purple-200 dark:border-purple-800";
      case "gold":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300 border-amber-200 dark:border-amber-800";
      case "silver":
        return "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700";
      default:
        return "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300 border-orange-200 dark:border-orange-800";
    }
  };

  const getTransactionTypeLabel = (type: string) => {
    switch (type.toLowerCase()) {
      case "signup":
        return "Signup Reward";
      case "purchase":
        return "Order Credit";
      case "review":
        return "Review Reward";
      case "referral":
        return "Referral Reward";
      default:
        return "Adjustment";
    }
  };

  return (
    <div className="flex flex-col w-full font-outfit">
      <HideMainNavOnMobile />
      <div className="sticky top-0 z-[60] block lg:hidden w-[calc(100%+32px)] -mx-4 -mt-[78px] bg-white dark:bg-black">
        <MobileNavHeader backUrl="/account" />
      </div>

      <div className="hidden lg:block">
        <AccountBreadcrumbs />
      </div>

      {/* Header section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-5 lg:mt-2.5 mb-6 lg:mb-10 gap-4">
        <div>
          <h1 className="font-semibold text-2xl lg:text-26 leading-tight text-black dark:text-white">
            Lady Fauzia Loyalty
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] text-[#C5A880] uppercase mt-1">
            JOYFUL. ALWAYS.
          </p>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-10">
        
        {/* Left Column: Wallet & VIP Progress */}
        <div className="flex flex-col gap-8">
          
          {/* Points Balance Ring Card */}
          <div className="bg-[#FAF6EE] dark:bg-neutral-900/40 border border-[#FAF6EE] dark:border-neutral-800 rounded-md p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="flex flex-col text-center sm:text-left">
              <h2 className="text-20 font-medium text-black dark:text-white">Joy Points Balance</h2>
              <p className="text-sm text-muted dark:text-neutral-400 mt-2 max-w-[280px]">
                Your loyalty wallet. Redeem these points during future checkout campaigns for exclusive premium benefits.
              </p>
            </div>
            
            {/* Elegant Circular balance visualization */}
            <div className="relative flex items-center justify-center w-[150px] h-[150px] shrink-0">
              <svg className="w-full h-full rotate-[-90deg]">
                <circle
                  cx="75"
                  cy="75"
                  r="64"
                  className="stroke-neutral-200 dark:stroke-neutral-800 fill-transparent"
                  strokeWidth="8"
                />
                <circle
                  cx="75"
                  cy="75"
                  r="64"
                  className="stroke-[#C5A880] fill-transparent transition-all duration-1000"
                  strokeWidth="8"
                  strokeDasharray={2 * Math.PI * 64}
                  strokeDashoffset={2 * Math.PI * 64 * (1 - Math.min(100, Math.max(0, loyalty.joyPointsBalance)) / 100)}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute flex flex-col items-center justify-center">
                <span className="text-32 font-bold text-black dark:text-white leading-none">
                  {loyalty.joyPointsBalance}
                </span>
                <span className="text-xs font-semibold tracking-wider text-[#C5A880] uppercase mt-1">
                  Points
                </span>
              </div>
            </div>
          </div>

          {/* VIP Membership status Card */}
          <div className="bg-white dark:bg-neutral-900 border border-border dark:border-neutral-800 rounded-md p-8 flex flex-col gap-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-20 font-medium text-black dark:text-white flex items-center gap-2">
                <Star size={20} className="text-[#C5A880]" />
                VIP Member Status
              </h2>
              <span className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${getTierBadgeColor(loyalty.vipTierName)}`}>
                {loyalty.vipTierName} Tier
              </span>
            </div>

            {/* Spend progress bar */}
            <div className="flex flex-col gap-2 mt-2">
              <div className="flex items-center justify-between text-sm text-neutral-600 dark:text-neutral-400">
                <span>Tier Progress</span>
                <span className="font-semibold text-black dark:text-white">
                  ${Math.round(loyalty.totalSpend)} spent
                  {loyalty.vipTierName !== "Elite" && ` / $${Math.round(loyalty.nextTierThreshold)}`}
                </span>
              </div>
              <div className="w-full bg-neutral-100 dark:bg-neutral-800 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-[#C5A880] h-full rounded-full transition-all duration-1000"
                  style={{ width: `${loyalty.progressPercent}%` }}
                />
              </div>
              {loyalty.vipTierName !== "Elite" ? (
                <p className="text-xs text-muted dark:text-neutral-500 italic mt-1">
                  Spend ${Math.round(loyalty.nextTierThreshold - loyalty.totalSpend)} more to qualify for the next premium tier.
                </p>
              ) : (
                <p className="text-xs text-[#C5A880] font-medium mt-1">
                  Congratulations! You have unlocked our highest Elite modest luxury benefits.
                </p>
              )}
            </div>

            {/* Benefits section */}
            <div className="border-t border-border dark:border-neutral-800 pt-5 flex flex-col gap-3">
              <h3 className="text-sm font-semibold text-[#C5A880] uppercase tracking-wider">
                Current Tier Benefits
              </h3>
              <p className="text-sm text-muted dark:text-neutral-300 leading-relaxed">
                {loyalty.benefits}
              </p>
            </div>
          </div>

        </div>

        {/* Right Column: Referral Sharing & Invitations */}
        <div className="bg-white dark:bg-neutral-900 border border-border dark:border-neutral-800 rounded-md p-8 flex flex-col gap-6 shadow-sm">
          <h2 className="text-20 font-medium text-black dark:text-white flex items-center gap-2">
            <Users size={20} className="text-[#C5A880]" />
            Referral Platform
          </h2>
          <p className="text-sm text-muted dark:text-neutral-400">
            Invite your friends to experience Lady Fauzia modest luxury. They get a <span className="font-semibold text-black dark:text-white">$100 points bonus</span> on signing up, and you get <span className="font-semibold text-black dark:text-white">$200 points bonus</span> after their first checkout!
          </p>

          {/* Referral Code Copy Section */}
          <div className="flex flex-col gap-2 mt-2">
            <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
              Your Referral Link
            </span>
            <div className="flex items-center gap-2 border border-border dark:border-neutral-800 rounded-md p-2 bg-neutral-50 dark:bg-neutral-800/40">
              <span className="flex-1 text-sm font-medium text-black dark:text-white truncate px-2 font-mono">
                {fullReferralLink}
              </span>
              <Button
                onClick={handleCopyLink}
                isIconOnly
                size="sm"
                className="bg-transparent hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
              >
                {copied ? <Check size={16} className="text-green-600" /> : <Copy size={16} />}
              </Button>
            </div>
          </div>

          {/* Email Invitation Form */}
          <form onSubmit={handleInvite} className="flex flex-col gap-3 mt-4 border-t border-border dark:border-neutral-800 pt-5">
            <h3 className="text-sm font-semibold text-[#C5A880] uppercase tracking-wider">
              Invite a Friend via Email
            </h3>
            <div className="flex flex-col sm:flex-row gap-3 items-stretch">
              <Input
                type="email"
                placeholder="friend@example.com"
                value={friendEmail}
                onChange={(e) => setFriendEmail(e.target.value)}
                className="flex-1 font-outfit"
                classNames={{
                  inputWrapper: "border border-border dark:border-neutral-800 rounded-md h-[45px] bg-transparent",
                  input: "text-sm",
                }}
              />
              <Button
                type="submit"
                isLoading={isInviting}
                className="bg-[#C5A880] hover:bg-[#B59469] text-white font-semibold px-6 rounded-md h-[45px] shrink-0 font-outfit transition-all flex items-center justify-center gap-2"
              >
                <Send size={16} />
                Send Invitation
              </Button>
            </div>
          </form>

          {/* Invitation Rules list */}
          <div className="flex flex-col gap-2 mt-2 text-xs text-muted dark:text-neutral-500">
            <p className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] shrink-0" />
              Friends must use your referral link or code during sign up to earn welcome points.
            </p>
            <p className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] shrink-0" />
              Your rewards credit automatically as soon as your friend's first order is placed.
            </p>
          </div>
        </div>
      </div>

      {/* Points Transactions Log (Bottom) */}
      <div className="bg-white dark:bg-neutral-900 border border-border dark:border-neutral-800 rounded-md p-8 shadow-sm">
        <h2 className="text-20 font-medium text-black dark:text-white flex items-center gap-2 mb-6">
          <Award size={20} className="text-[#C5A880]" />
          Points Transaction History
        </h2>

        {loyalty.transactions && loyalty.transactions.length > 0 ? (
          <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border dark:border-neutral-800 text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                  <th className="py-4 px-4">Event Type</th>
                  <th className="py-4 px-4">Description</th>
                  <th className="py-4 px-4">Points</th>
                  <th className="py-4 px-4">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border dark:divide-neutral-800 text-sm text-neutral-800 dark:text-neutral-300">
                {loyalty.transactions.map((tx) => (
                  <tr key={tx.id} className="hover:bg-neutral-50/50 dark:hover:bg-neutral-800/10">
                    <td className="py-4 px-4 font-semibold text-black dark:text-white">
                      {getTransactionTypeLabel(tx.type)}
                    </td>
                    <td className="py-4 px-4">
                      {tx.description}
                    </td>
                    <td className={`py-4 px-4 font-bold ${tx.points >= 0 ? "text-green-600" : "text-red-600"}`}>
                      {tx.points >= 0 ? `+${tx.points}` : tx.points}
                    </td>
                    <td className="py-4 px-4 text-xs text-neutral-500">
                      {tx.createdAt ? new Date(tx.createdAt).toLocaleDateString(undefined, {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      }) : "N/A"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <Gift size={48} className="text-neutral-300 dark:text-neutral-700 mb-4" />
            <p className="text-base text-muted dark:text-neutral-500 font-medium">No loyalty point transactions recorded yet.</p>
            <p className="text-xs text-neutral-400 mt-1">Complete checkouts, write product reviews, or refer friends to see transactions here.</p>
          </div>
        )}
      </div>
    </div>
  );
}

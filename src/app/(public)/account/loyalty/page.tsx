import { getCustomerLoyalty } from "@/utils/bagisto";
import LoyaltyDetails from "@/components/customer/LoyaltyDetails";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lady Fauzia Co. | Joy Points Loyalty & VIP",
  description: "Manage your Joy Points wallet, view your VIP tier status, track tier progress, and invite friends to earn rewards.",
};

export default async function LoyaltyPage() {
  const loyaltyData = await getCustomerLoyalty();

  // Fallback default state if API returns null/guest
  const fallbackLoyalty = {
    joyPointsBalance: 0,
    vipTierName: "Bronze",
    totalSpend: 0,
    progressPercent: 0,
    nextTierThreshold: 500,
    benefits: "Welcome to Lady Fauzia Loyalty. Enjoy earning points on purchases and referrals.",
    referralCode: "",
    referralLink: "",
    transactions: [],
  };

  return <LoyaltyDetails loyalty={loyaltyData || fallbackLoyalty} />;
}

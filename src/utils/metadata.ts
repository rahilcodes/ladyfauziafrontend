import { IMAGES } from "@/utils/constants";

export const staticSeo = {
  default: {
    title: "Lady Fauzia Co. — Joyful. Always.",
    description: "Premium modest fashion brand. Luxury dresses, kaftans, hijabs, and jewelry. Handcrafted with joy. Launching in Miami, FL.",
    image: IMAGES.logo,
    canonical: "/",
  },
  register: {
    title: "Create Account | Lady Fauzia Co.",
    description: "Join the Lady Fauzia community. Create your account to earn Joy Points, track orders, and access exclusive collections.",
    image: IMAGES.logo,
    canonical: "/customer/register",
  },
  login: {
    title: "Sign In | Lady Fauzia Co.",
    description: "Sign in to your Lady Fauzia Co. account to manage your orders, Joy Points, and VIP membership.",
    image: IMAGES.logo,
    canonical: "/customer/login",
  },
  forget: {
    title: "Reset Password | Lady Fauzia Co.",
    description: "Recover your Lady Fauzia Co. account by resetting your password.",
    image: IMAGES.logo,
    canonical: "/customer/forget-password",
  },
};

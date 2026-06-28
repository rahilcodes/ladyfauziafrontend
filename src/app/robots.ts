import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ladyfauzia.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/checkout/",
          "/customer/login",
          "/customer/register",
          "/customer/forget-password",
          "/account/",
          "/cart",
          "/compare",
          "/success",
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

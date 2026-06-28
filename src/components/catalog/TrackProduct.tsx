"use client";

import { useEffect } from "react";
import { trackRecentlyViewed } from "@/components/catalog/RecentlyViewed";

export default function TrackProduct({
  id,
  name,
  urlKey,
  imageUrl,
  price,
}: {
  id: string;
  name: string;
  urlKey: string;
  imageUrl: string;
  price: string;
}) {
  useEffect(() => {
    trackRecentlyViewed({ id, name, urlKey, imageUrl, price });
  }, [id, name, urlKey, imageUrl, price]);

  return null;
}

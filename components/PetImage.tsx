"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const FALLBACK_IMAGE_DATA_URL = (() => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 800 800">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#F7F5F2"/>
          <stop offset="100%" stop-color="#E9F5EE"/>
        </linearGradient>
      </defs>
      <rect width="800" height="800" rx="64" fill="url(#g)"/>
      <circle cx="220" cy="240" r="110" fill="#6BA48A" opacity="0.16"/>
      <circle cx="620" cy="600" r="160" fill="#6BA48A" opacity="0.10"/>
      <text x="50%" y="52%" text-anchor="middle" font-family="Arial, sans-serif" font-size="120" font-weight="700" fill="#0F172A" opacity="0.75">Pet</text>
    </svg>
  `.trim();
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
})();

export function PetImage({
  src,
  alt,
  width,
  height,
  className
}: {
  src: string | null | undefined;
  alt: string;
  width: number;
  height: number;
  className?: string;
}) {
  const [imgSrc, setImgSrc] = useState(src ?? FALLBACK_IMAGE_DATA_URL);

  useEffect(() => {
    setImgSrc(src ?? FALLBACK_IMAGE_DATA_URL);
  }, [src]);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      // Use `unoptimized` for remote images too so Next.js does not proxy through its optimizer.
      // This avoids occasional upstream/network failures for dynamic Unsplash Source URLs.
      unoptimized
      onError={() => setImgSrc(FALLBACK_IMAGE_DATA_URL)}
    />
  );
}


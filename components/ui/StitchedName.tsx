'use client';

import React from 'react';
import { useLocale } from 'next-intl';

interface StitchedNameProps {
  name: string;
}

export function StitchedName({ name }: StitchedNameProps) {
  const locale = useLocale();
  const isAr = locale === 'ar';

  const words = name.split(' ');
  const firstWord = words[0] || name;
  const restWords = words.slice(1).join(' ');

  return (
    <div className="relative inline-block select-none w-full max-w-[500px] md:max-w-[560px]">
      <svg
        className="overflow-visible w-full h-auto block drop-shadow-[0_6px_20px_rgba(0,59,92,0.16)]"
        viewBox={isAr ? "0 0 280 230" : "0 0 480 190"}
        style={{
          fontFamily: isAr ? 'var(--font-almarai), system-ui, sans-serif' : 'var(--font-dm-sans), system-ui, sans-serif',
          fontWeight: 900,
        }}
      >
        <defs>
          {/* Thread 3D Shadow for authentic physical embroidery thread */}
          <filter id="thread-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="1" stdDeviation="0.5" floodColor="#001422" floodOpacity="0.8" />
          </filter>

          {/* Micro twill weave fabric texture for the appliqué letters */}
          <pattern id="fabric-texture" width="5" height="5" patternUnits="userSpaceOnUse">
            <rect width="5" height="5" fill="#003B5C" />
            <path
              d="M0 5L5 0M0 0L5 5"
              stroke="rgba(255, 255, 255, 0.09)"
              strokeWidth="0.75"
            />
          </pattern>
        </defs>

        {/* 1. Base Navy Appliqué: Expanded with solid border so white stitches sit cleanly INSIDE */}
        {isAr ? (
          <g direction="rtl">
            <text
              x="275"
              y="95"
              textAnchor="start"
              fontSize="110"
              fontWeight="900"
              fill="url(#fabric-texture)"
              stroke="#003B5C"
              strokeWidth="5"
              strokeLinejoin="round"
            >
              {firstWord}
            </text>
            <text
              x="275"
              y="210"
              textAnchor="start"
              fontSize="110"
              fontWeight="900"
              fill="url(#fabric-texture)"
              stroke="#003B5C"
              strokeWidth="5"
              strokeLinejoin="round"
            >
              {restWords}
            </text>
          </g>
        ) : (
          <g>
            <text
              x="5"
              y="80"
              textAnchor="start"
              fontSize="85"
              fontWeight="900"
              letterSpacing="-2"
              fill="url(#fabric-texture)"
              stroke="#003B5C"
              strokeWidth="5"
              strokeLinejoin="round"
            >
              {firstWord.toUpperCase()}
            </text>
            <text
              x="5"
              y="165"
              textAnchor="start"
              fontSize="85"
              fontWeight="900"
              letterSpacing="-2"
              fill="url(#fabric-texture)"
              stroke="#003B5C"
              strokeWidth="5"
              strokeLinejoin="round"
            >
              {restWords.toUpperCase()}
            </text>
          </g>
        )}

        {/* 2. White Inner Stitches: Running stitches set inside the navy border */}
        <g filter="url(#thread-shadow)">
          {isAr ? (
            <g direction="rtl">
              <text
                x="275"
                y="95"
                textAnchor="start"
                fontSize="110"
                fontWeight="900"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="2.2"
                strokeDasharray="5 3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {firstWord}
              </text>
              <text
                x="275"
                y="210"
                textAnchor="start"
                fontSize="110"
                fontWeight="900"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="2.2"
                strokeDasharray="5 3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {restWords}
              </text>
            </g>
          ) : (
            <g>
              <text
                x="5"
                y="80"
                textAnchor="start"
                fontSize="85"
                fontWeight="900"
                letterSpacing="-2"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="2"
                strokeDasharray="4.5 3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {firstWord.toUpperCase()}
              </text>
              <text
                x="5"
                y="165"
                textAnchor="start"
                fontSize="85"
                fontWeight="900"
                letterSpacing="-2"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="2"
                strokeDasharray="4.5 3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {restWords.toUpperCase()}
              </text>
            </g>
          )}
        </g>
      </svg>
    </div>
  );
}

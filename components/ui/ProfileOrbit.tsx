'use client';

import React from 'react';
import { Cpu } from 'lucide-react';
import { skillsData, type SkillItem } from '@/lib/data/skills';

interface ProfileOrbitProps {
  className?: string;
}

/**
 * Positioning strategy (all values are % of the square `pause-orbit` container):
 *  - Focal point:  X = 50%,  Y = 57.91%  (slightly below centre, aligns with chin)
 *  - Orbit radius: 44% of container  →  ~202 px at 460 px, ~160 px at 364 px
 *
 * The spinning wrapper fills the same square (absolute inset-0) and rotates around
 * the focal point via `transform-origin: 50% 57.91%`.
 *
 * Each icon's `left` / `top` is pre-computed in JS using cos / sin and expressed as
 * a plain percentage. The centering `translate(-50%, -50%)` lives on a wrapper div
 * so it is never clobbered by the counter-spin animation on the inner div.
 */

const FOCAL_X  = 50;    // % across the square container
const FOCAL_Y  = 57.91; // % down  the square container
const RADIUS   = 37;    // orbit radius as % of container side

export function ProfileOrbit({ className = '' }: ProfileOrbitProps) {
  const totalIcons = skillsData.length;

  return (
    <div
      className={`absolute inset-0 pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      {/* ── Decorative orbit ring ─────────────────────────────────────────── */}
      {/*
        left / top / width / height all use the SAME percentage base because the
        container is square (width === height), so 1% == the same pixel value in
        both axes.
      */}
      <div
        className="absolute rounded-full border border-slate-200/60 pointer-events-none"
        style={{
          width:  `${RADIUS * 2}%`,
          height: `${RADIUS * 2}%`,
          left:   `${FOCAL_X - RADIUS}%`,
          top:    `${FOCAL_Y - RADIUS}%`,
        }}
      />

      {/* ── Spinning wrapper ──────────────────────────────────────────────── */}
      {/*
        Fills the orbit container (inset-0 = same size as pause-orbit).
        Rotates around the focal point by overriding transform-origin.
      */}
      <div
        className="animate-profile-orbit absolute inset-0"
        style={{ transformOrigin: `${FOCAL_X}% ${FOCAL_Y}%` }}
      >
        {skillsData.map((skill: SkillItem, index: number) => {
          const angleDeg = (index / totalIcons) * 360;
          // Start at top (−90°) and go clockwise
          const angleRad  = ((angleDeg - 90) * Math.PI) / 180;
          const leftPct   = FOCAL_X + RADIUS * Math.cos(angleRad);
          const topPct    = FOCAL_Y + RADIUS * Math.sin(angleRad);

          return (
            // Outer div: absolute positioning + centering translate (never animated)
            <div
              key={skill.id}
              className="absolute pointer-events-auto"
              style={{
                left:      `${leftPct.toFixed(4)}%`,
                top:       `${topPct.toFixed(4)}%`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              {/* Inner div: counter-spin to keep icon visually upright */}
              <div className="animate-profile-counter">
                {/* Icon card */}
                <div
                  className="group relative flex items-center justify-center rounded-xl bg-[#ffffff] shadow-md border border-slate-100 transition-all duration-300 hover:scale-125 hover:shadow-lg hover:border-[#003B5C]/50 hover:z-30 cursor-pointer"
                  style={{ padding: 6, width: 36, height: 36 }}
                  title={skill.name}
                >
                  {skill.logoUrl ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={skill.logoUrl}
                      alt={skill.name}
                      width={20}
                      height={20}
                      style={{
                        width: 20,
                        height: 20,
                        objectFit: 'contain',
                        display: 'block',
                        flexShrink: 0,
                      }}
                      draggable={false}
                    />
                  ) : (
                    <div
                      className="flex items-center justify-center rounded-md bg-[#0284C7] text-white"
                      style={{ width: 20, height: 20, flexShrink: 0 }}
                    >
                      <Cpu style={{ width: 14, height: 14 }} />
                    </div>
                  )}

                  {/* Tooltip */}
                  <div className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50 whitespace-nowrap rounded-md bg-[#00283E] px-2 py-0.5 text-[10px] font-semibold text-white shadow-md">
                    {skill.name}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

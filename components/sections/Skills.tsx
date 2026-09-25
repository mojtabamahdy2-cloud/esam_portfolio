'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Cpu } from 'lucide-react';
import { skillsData } from '@/lib/data/skills';

export function SkillsSection() {
  const t = useTranslations('skills');

  return (
    <section id="skills" className="relative min-h-screen w-full overflow-hidden bg-[#ffffff] py-28 px-6 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14">
          <div className="max-w-2xl">
            <h2 className="text-section-title font-extrabold tracking-tight text-[#003B5C] leading-tight">
              {t('headline')}
            </h2>
          </div>
        </div>

        {/* Grid: Tool Logos */}
        <div className="w-full pt-8">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
            {skillsData.map((skill) => {
              const categoryColor =
                skill.category === 'production'
                  ? '#003B5C'
                  : skill.category === 'hardware'
                    ? '#0284C7'
                    : '#003B5C';

              return (
                <div
                  key={skill.id}
                  className="group flex flex-col items-center justify-center gap-3 transition-all duration-200 hover:-translate-y-1"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ffffff] shadow-sm border border-slate-100 transition-all duration-200 group-hover:shadow-md">
                    {skill.logoUrl ? (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        src={skill.logoUrl}
                        alt={skill.name}
                        className="h-8 w-8 object-contain transition-transform duration-200 group-hover:scale-110"
                      />
                    ) : (
                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-xl text-white transition-transform duration-200 group-hover:scale-110"
                        style={{ backgroundColor: categoryColor }}
                      >
                        <Cpu className="h-5 w-5 text-white" />
                      </div>
                    )}
                  </div>
                  <span className="text-center text-xs font-semibold text-slate-700 leading-tight group-hover:text-[#003B5C] transition-colors">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

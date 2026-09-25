'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { motion, AnimatePresence } from 'motion/react';
import { projects, type ProjectCategory, type Project } from '@/lib/data/projects';
import { ZoomIn, X, ExternalLink, ArrowUpRight } from 'lucide-react';

export function ProjectsSection() {
  const t = useTranslations('projects');
  const locale = useLocale();
  const [activeCategory, setActiveCategory] = useState<'all' | ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    if (selectedProject) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  const categories: { id: 'all' | ProjectCategory; label: string }[] = [
    { id: 'all', label: t('filter.all') },
    { id: 'branding', label: t('filter.branding') },
    { id: 'print', label: t('filter.print') },
    { id: 'large-format', label: t('filter.large-format') },
    { id: 'sublimation', label: t('filter.sublimation') },
    { id: 'embroidery', label: t('filter.embroidery') },
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative min-h-screen w-full overflow-hidden bg-slate-50/50 py-28 px-6 md:px-12 border-t border-slate-200/60">
      <div className="mx-auto max-w-7xl">
        {/* Section Header & Filters */}
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-section-title font-extrabold tracking-tight text-[#003B5C] leading-tight">
              {t('headline')}
            </h2>
          </div>

          <div className="flex flex-wrap gap-1.5 rounded-2xl border border-slate-200 bg-[#FAF8F5] p-1.5 shadow-xs">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  data-cursor="link"
                  className={`rounded-xl px-4 py-2 text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-[#003B5C] text-white shadow-xs'
                      : 'text-slate-600 hover:text-[#003B5C] hover:bg-slate-50'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards Grid */}
        <motion.div layout className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const title = locale === 'ar' ? project.titleAr : project.titleEn;
              const desc = locale === 'ar' ? project.descriptionAr : project.descriptionEn;
              const catLabel = categories.find((c) => c.id === project.category)?.label || project.category;

              return (
                <motion.article
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  data-cursor={project.liveUrl ? 'link' : 'view'}
                  onClick={() => {
                    if (!project.liveUrl) {
                      setSelectedProject(project);
                    }
                  }}
                  className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200/90 bg-[#FAF8F5] shadow-xs transition-all duration-300 hover:border-slate-300 hover:shadow-card-hover cursor-pointer"
                >
                  {/* Direct Link Overlay if project has an external URL */}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 z-20 cursor-pointer"
                      aria-label={title}
                    />
                  )}

                  {/* Card Visual Header / Preview */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 border-b border-slate-100">
                    <Image
                      src={project.imageUrl}
                      alt={title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Hover inspect hint */}
                    {!project.liveUrl && (
                      <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#003B5C]/25 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
                        <div className="flex items-center gap-1.5 rounded-full bg-[#FAF8F5]/95 px-3.5 py-1.5 font-mono text-[11px] font-bold text-[#003B5C] shadow-md backdrop-blur-md">
                          <ZoomIn className="h-3.5 w-3.5" />
                          <span>{t('viewProject')}</span>
                        </div>
                      </div>
                    )}

                    {/* Top tags */}
                    <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between pointer-events-none">
                      <span className="rounded-full border border-slate-200/90 bg-[#FAF8F5]/95 px-3 py-1 font-mono text-[10px] font-bold tracking-wider text-[#003B5C] uppercase shadow-xs backdrop-blur-md">
                        {catLabel}
                      </span>
                      <div className="flex items-center gap-1.5">
                        {project.liveUrl && (
                          <span className="flex items-center gap-1 rounded-full border border-slate-200/90 bg-[#FAF8F5]/95 px-2 py-0.5 font-mono text-[10px] font-semibold text-[#003B5C] shadow-xs backdrop-blur-md transition-colors group-hover:bg-[#003B5C] group-hover:text-white">
                            <ExternalLink className="h-3 w-3" />
                            <ArrowUpRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </span>
                        )}
                        <span className="rounded-full border border-slate-200/80 bg-[#FAF8F5]/90 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-slate-600 shadow-xs backdrop-blur-md">
                          {project.year}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div className="space-y-3">
                      <h3 className="flex items-center justify-between gap-2 text-xl font-extrabold text-[#003B5C] transition-colors group-hover:text-[#003B5C]">
                        <span>{title}</span>
                        {project.liveUrl && (
                          <ArrowUpRight className="h-4 w-4 text-slate-400 transition-all duration-200 group-hover:text-[#003B5C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
                        )}
                      </h3>
                      <p className="text-xs leading-relaxed text-slate-600 line-clamp-3">
                        {desc}
                      </p>
                    </div>

                    {/* Bottom Tags */}
                    <div className="mt-6 flex flex-wrap items-center gap-1.5 border-t border-slate-100 pt-4">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="rounded-md bg-slate-100 px-2.5 py-1 font-mono text-[10px] text-slate-600"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox / Full-Screen Inspection Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 p-4 sm:p-6 md:p-10 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex flex-col max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-3xl border border-white/15 bg-[#FAF8F5]/95 shadow-2xl backdrop-blur-xl"
            >
              {/* Header Bar */}
              <div className="flex items-center justify-between border-b border-slate-200/80 px-6 py-4">
                <div className="flex items-center gap-3">
                  <span className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 font-mono text-[11px] font-bold tracking-wider text-[#003B5C] uppercase">
                    {categories.find((c) => c.id === selectedProject.category)?.label || selectedProject.category}
                  </span>
                  <span className="rounded-full border border-slate-200 bg-slate-100 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-slate-600">
                    {selectedProject.year}
                  </span>
                  <h3 className="hidden sm:block text-base font-extrabold text-[#003B5C]">
                    {locale === 'ar' ? selectedProject.titleAr : selectedProject.titleEn}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close image inspection"
                  data-cursor="link"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition-colors hover:bg-[#003B5C] hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* High-Res Image Display */}
              <div className="relative flex-1 min-h-[350px] max-h-[66vh] w-full bg-slate-900/5 p-4 flex items-center justify-center overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selectedProject.imageUrl}
                  alt={locale === 'ar' ? selectedProject.titleAr : selectedProject.titleEn}
                  className="max-h-[62vh] max-w-full rounded-xl object-contain shadow-md transition-transform duration-300"
                />
              </div>

              {/* Footer with Details */}
              <div className="border-t border-slate-200/80 bg-[#FAF8F5] px-6 py-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <h4 className="text-lg font-bold text-[#003B5C] sm:hidden">
                      {locale === 'ar' ? selectedProject.titleAr : selectedProject.titleEn}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed max-w-2xl">
                      {locale === 'ar' ? selectedProject.descriptionAr : selectedProject.descriptionEn}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 shrink-0">
                    {selectedProject.tags.map((tag, i) => (
                      <span key={i} className="rounded-md bg-slate-100 px-2 py-0.5 font-mono text-[10px] text-slate-600">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

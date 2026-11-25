"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Grid2X2,
  List,
  Lock,
  SlidersHorizontal,
} from "lucide-react";
import Link from "next/link";
import { excludedProjectIds, projects, type Project } from "@/lib/projects";

const categories = ["All", "Websites", "Mobile Apps", "Software"] as const;
type Category = (typeof categories)[number];
type ViewMode = "grid" | "list";

const categoryColors: Record<string, string> = {
  Websites: "bg-white/90 text-slate-800",
  "Mobile Apps": "bg-white/90 text-slate-800",
  Software: "bg-white/90 text-slate-800",
};

const projectCardImages: Partial<Record<Project["id"], string>> = {
  "brew-haven": "/project/our_project/our_project_brew_haven_menu.png",
  "kb-exports": "/project/our_project/our_project_kb_exports_products_tablet_updated.png",
  "eduka-college": "/project/our_project/our_project_eduka_college_website.png",
  "glass-haven": "/project/our_project/our_project_glass_haven_website.png",
  "solar-solutions": "/project/our_project/our_project_solar_solutions_website_updated.png",
  "state-college": "/project/our_project/our_project_state_college_website.png",
  zostel: "/project/our_project/our_project_zostel_website_updated.png",
  "travel-hotel-hub": "/project/our_project/our_project_travel_hotel_website.png",
  "rider-app": "/project/our_project/our_project_driven_ride_booking_app_updated.png",
  veloura: "/project/our_project/our_project_veloura_salon_app_showcase_updated.png",
  "catering-app": "/project/our_project/our_project_goodfood_menu_mobile.png",
  hrms: "/project/our_project/our_project_aurapos_dashboard_laptop_updated.png",
  inventory: "/project/our_project/our_project_aurapos_dashboard_laptop.png",
  "salon-pos": "/case_studies/salon_soft/salon_showcase_soft_03.png",
  dom: "/project/our_project/our_project_driven_hr_dashboard.png",
  messenger: "/project/our_project/our_project_messenger_social_dashboard.png",
  crm: "/project/our_project/crm_work_soft_01_updated.png",
  lms: "/project/our_project/our_project_textile_erp_dashboard.png",
};

export default function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const visibleProjects = projects.filter((project) => !excludedProjectIds.has(project.id));
  const filteredProjects =
    activeCategory === "All"
      ? visibleProjects
      : activeCategory === "Mobile Apps"
        ? visibleProjects.filter((project) => project.category === "Mobile Apps" && ["rider-app", "veloura"].includes(project.id))
        : visibleProjects.filter((project) => project.category === activeCategory);

  return (
    <section
      id="portfolio-projects"
      className="w-full bg-transparent px-5 py-14 font-sans text-[#111] sm:px-8 sm:py-20 lg:px-14 lg:py-24 2xl:px-20"
    >
      <div className="mx-auto w-full max-w-[2440px]">
        <div className="mb-7 flex w-full items-center justify-between gap-5 lg:mb-10">
          <div className="flex shrink-0 items-center gap-2 text-sm font-medium tracking-tight sm:text-base">
            <span aria-hidden="true" className="size-2 rounded-full bg-black" />
            <span>Our projects</span>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              aria-label="Grid view"
              aria-pressed={viewMode === "grid"}
              onClick={() => setViewMode("grid")}
              className={`inline-flex size-10 items-center justify-center rounded-xl border transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A2540] sm:size-11 ${
                viewMode === "grid"
                  ? "border-[#0A2540] bg-[#0A2540] text-white"
                  : "border-black/10 bg-white text-black hover:bg-black/5"
              }`}
            >
              <Grid2X2 aria-hidden="true" className="size-4" />
            </button>
            <button
              type="button"
              aria-label="List view"
              aria-pressed={viewMode === "list"}
              onClick={() => setViewMode("list")}
              className={`inline-flex size-10 items-center justify-center rounded-xl border transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A2540] sm:size-11 ${
                viewMode === "list"
                  ? "border-[#0A2540] bg-[#0A2540] text-white"
                  : "border-black/10 bg-white text-black hover:bg-black/5"
              }`}
            >
              <List aria-hidden="true" className="size-4" />
            </button>
          </div>
        </div>

        <div className="mb-9 flex items-center gap-2 overflow-x-auto pb-3 sm:gap-3 lg:mb-12">
          <span className="mr-1 inline-flex shrink-0 items-center gap-2 text-xs font-medium text-black/55 sm:text-sm">
            <SlidersHorizontal aria-hidden="true" className="size-4" />
            Filter by work type
          </span>
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
              className={`shrink-0 rounded-2xl px-4 py-2.5 text-xs font-medium transition sm:px-5 sm:text-sm ${
                activeCategory === category
                  ? "bg-[#e5e7eb] text-black"
                  : "text-black/60 hover:bg-white/70 hover:text-black"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className={
            viewMode === "grid"
              ? "grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10 2xl:gap-14"
              : "flex flex-col gap-7 lg:gap-10"
          }
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                viewMode={viewMode}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  viewMode,
}: {
  project: Project;
  index: number;
  viewMode: ViewMode;
}) {
  const isList = viewMode === "list";

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.35, delay: Math.min(index, 5) * 0.035 }}
      className={`group min-w-0 ${
        isList
          ? "grid grid-cols-1 gap-5 md:grid-cols-[minmax(280px,0.9fr)_minmax(0,1.1fr)] md:gap-8 lg:gap-12"
          : "flex flex-col"
      }`}
    >
      <Link
        href={`/projects/${project.id}`}
        className={`relative block overflow-hidden rounded-2xl bg-black/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0A2540] sm:rounded-[1.4rem] ${
          isList ? "aspect-[16/10] md:aspect-auto md:min-h-[280px]" : "aspect-[16/10]"
        }`}
      >
        <img
          src={projectCardImages[project.id] ?? project.img}
          alt={project.title}
          loading={index < 4 ? "eager" : "lazy"}
          onError={(event) => {
            event.currentTarget.src = "/project/our_project/our_project_brew_haven_menu.png";
          }}
          className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

        <span
          className={`absolute left-4 top-4 rounded-xl px-3 py-1.5 text-[11px] font-semibold shadow-sm backdrop-blur-sm sm:left-5 sm:top-5 ${
            categoryColors[project.category] ?? "bg-white/90 text-slate-800"
          }`}
        >
          {project.category}
        </span>

        {project.status === "processing" && (
          <span className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-black/70 px-3 py-1.5 text-[10px] font-semibold text-white backdrop-blur-sm sm:bottom-5 sm:right-5">
            <Lock aria-hidden="true" className="size-3" />
            Coming Soon
          </span>
        )}

        <span className="absolute bottom-4 left-4 inline-flex size-10 translate-y-2 items-center justify-center rounded-full bg-white text-black opacity-0 shadow-lg transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:bottom-5 sm:left-5 sm:size-12">
          <ArrowUpRight aria-hidden="true" className="size-5" />
        </span>
      </Link>

      <div className={`flex min-w-0 flex-col ${isList ? "py-1 md:py-3" : "pt-5 sm:pt-6"}`}>
        <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
          <h2 className="text-xl font-semibold tracking-tight text-[#111] transition-colors group-hover:text-[#0A2540] sm:text-2xl lg:text-3xl">
            <Link href={`/projects/${project.id}`} className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A2540]">
              {project.title}
            </Link>
          </h2>
          <span className="shrink-0 pt-1 font-mono text-xs text-black/45 sm:text-sm">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div className="mt-1 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link
            href={`/projects/${project.id}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0A2540] transition-all hover:gap-3 sm:text-base"
          >
            View Details <ArrowUpRight aria-hidden="true" className="size-4" />
          </Link>
          {project.status === "live" && project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-black/45 transition-colors hover:text-[#0A2540]"
            >
              Open Website <ExternalLink aria-hidden="true" className="size-3.5" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

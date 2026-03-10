"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  TrendingUp,
  TrendingDown,
  Users,
  DollarSign,
  BarChart3,
  Target,
  Clock,
  Zap,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
} from "lucide-react";

// --- Typen ---

type Department = "vertrieb" | "marketing" | "operations" | "finanzen";

interface KPI {
  label: string;
  value: string;
  change: number;
  icon: React.ElementType;
  sparkline: number[];
}

interface DepartmentData {
  name: string;
  color: string;
  glowColor: string;
  kpis: KPI[];
  projects: { name: string; progress: number; status: string }[];
}

// --- Beispieldaten ---

const departments: Record<Department, DepartmentData> = {
  vertrieb: {
    name: "Vertrieb",
    color: "#3b82f6",
    glowColor: "rgba(59, 130, 246, 0.3)",
    kpis: [
      {
        label: "Pipeline",
        value: "€847k",
        change: 23.5,
        icon: DollarSign,
        sparkline: [30, 45, 38, 52, 60, 55, 72, 68, 85],
      },
      {
        label: "Abschlussquote",
        value: "34.2%",
        change: 8.1,
        icon: Target,
        sparkline: [20, 22, 25, 28, 26, 30, 32, 31, 34],
      },
      {
        label: "Neue Leads",
        value: "127",
        change: 15.3,
        icon: Users,
        sparkline: [40, 55, 48, 62, 70, 65, 82, 90, 127],
      },
      {
        label: "Avg. Deal Size",
        value: "€12.4k",
        change: -2.3,
        icon: BarChart3,
        sparkline: [14, 13, 15, 12, 11, 13, 12, 13, 12],
      },
    ],
    projects: [
      { name: "Enterprise Pipeline Q1", progress: 78, status: "Aktiv" },
      { name: "Lead Nurturing Automation", progress: 45, status: "In Arbeit" },
      { name: "CRM Migration", progress: 92, status: "Fast fertig" },
    ],
  },
  marketing: {
    name: "Marketing",
    color: "#8b5cf6",
    glowColor: "rgba(139, 92, 246, 0.3)",
    kpis: [
      {
        label: "Website Traffic",
        value: "24.8k",
        change: 31.2,
        icon: Activity,
        sparkline: [12, 14, 13, 16, 18, 17, 20, 22, 25],
      },
      {
        label: "Conversion Rate",
        value: "3.8%",
        change: 12.5,
        icon: Target,
        sparkline: [2, 2.5, 2.8, 3, 2.9, 3.2, 3.5, 3.6, 3.8],
      },
      {
        label: "MQLs",
        value: "89",
        change: 18.7,
        icon: Users,
        sparkline: [30, 38, 42, 50, 55, 60, 68, 75, 89],
      },
      {
        label: "CAC",
        value: "€342",
        change: -15.2,
        icon: DollarSign,
        sparkline: [420, 400, 390, 380, 370, 365, 355, 348, 342],
      },
    ],
    projects: [
      { name: "SEO Content Strategie", progress: 65, status: "Aktiv" },
      { name: "Social Media Automation", progress: 88, status: "Fast fertig" },
      { name: "Email Kampagnen Setup", progress: 30, status: "Geplant" },
    ],
  },
  operations: {
    name: "Operations",
    color: "#10b981",
    glowColor: "rgba(16, 185, 129, 0.3)",
    kpis: [
      {
        label: "Automatisierte Tasks",
        value: "1.247",
        change: 42.8,
        icon: Zap,
        sparkline: [200, 350, 480, 620, 750, 880, 1000, 1120, 1247],
      },
      {
        label: "Eingesparte Std/Woche",
        value: "23.5",
        change: 35.0,
        icon: Clock,
        sparkline: [5, 8, 10, 13, 15, 17, 19, 21, 23.5],
      },
      {
        label: "Fehlerquote",
        value: "0.3%",
        change: -87.5,
        icon: TrendingDown,
        sparkline: [5, 4, 3.5, 2.8, 2, 1.5, 1, 0.5, 0.3],
      },
      {
        label: "Systemverfügbarkeit",
        value: "99.9%",
        change: 0.4,
        icon: Activity,
        sparkline: [99, 99.2, 99.5, 99.6, 99.7, 99.8, 99.8, 99.9, 99.9],
      },
    ],
    projects: [
      {
        name: "ERP-CRM Integration",
        progress: 95,
        status: "Fast fertig",
      },
      {
        name: "Rechnungsautomation",
        progress: 60,
        status: "In Arbeit",
      },
      {
        name: "Reporting Dashboard",
        progress: 40,
        status: "In Arbeit",
      },
    ],
  },
  finanzen: {
    name: "Finanzen",
    color: "#f59e0b",
    glowColor: "rgba(245, 158, 11, 0.3)",
    kpis: [
      {
        label: "MRR",
        value: "€128k",
        change: 18.4,
        icon: DollarSign,
        sparkline: [80, 85, 90, 95, 100, 105, 112, 120, 128],
      },
      {
        label: "Marge",
        value: "68.5%",
        change: 5.2,
        icon: TrendingUp,
        sparkline: [58, 60, 61, 63, 64, 65, 66, 67, 68.5],
      },
      {
        label: "Cashflow",
        value: "€45.2k",
        change: 22.1,
        icon: BarChart3,
        sparkline: [20, 22, 25, 28, 30, 33, 38, 42, 45.2],
      },
      {
        label: "Offene Posten",
        value: "€8.3k",
        change: -34.0,
        icon: Clock,
        sparkline: [25, 22, 18, 15, 14, 12, 11, 9, 8.3],
      },
    ],
    projects: [
      { name: "DATEV-Anbindung", progress: 82, status: "Aktiv" },
      { name: "Forecast Automatisierung", progress: 55, status: "In Arbeit" },
      { name: "Kosten-Tracking", progress: 100, status: "Abgeschlossen" },
    ],
  },
};

// --- Mini-Sparkline (SVG) ---

function Sparkline({
  data,
  color,
  width = 80,
  height = 28,
}: {
  data: number[];
  color: string;
  width?: number;
  height?: number;
}) {
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;

  const points = data
    .map((v, i) => {
      const x = (i / (data.length - 1)) * width;
      const y = height - ((v - min) / range) * height;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg width={width} height={height} className="inline-block">
      <defs>
        <linearGradient
          id={`grad-${color.replace("#", "")}`}
          x1="0"
          y1="0"
          x2="0"
          y2="1"
        >
          <stop offset="0%" stopColor={color} stopOpacity={0.3} />
          <stop offset="100%" stopColor={color} stopOpacity={0} />
        </linearGradient>
      </defs>
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Area fill */}
      <polygon
        points={`0,${height} ${points} ${width},${height}`}
        fill={`url(#grad-${color.replace("#", "")})`}
      />
    </svg>
  );
}

// --- Hauptkomponente ---

export function HeroDashboard() {
  const [activeDept, setActiveDept] = useState<Department>("vertrieb");
  const dept = departments[activeDept];

  return (
    <div className="relative w-full">
      {/* Glow-Effekt hinter dem Dashboard */}
      <motion.div
        className="pointer-events-none absolute -inset-4 rounded-3xl opacity-40 blur-3xl"
        animate={{ backgroundColor: dept.glowColor }}
        transition={{ duration: 0.5 }}
      />

      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 shadow-2xl backdrop-blur-sm">
        {/* Header-Bar */}
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
            <span className="ml-3 text-xs text-slate-400">
              Hoba Master System — Live Dashboard
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
            <span className="text-xs text-green-400">Live</span>
          </div>
        </div>

        {/* Department Tabs */}
        <div className="flex gap-1 border-b border-white/10 px-4 pt-3">
          {(Object.keys(departments) as Department[]).map((key) => (
            <button
              key={key}
              onClick={() => setActiveDept(key)}
              className="relative px-4 py-2 text-sm font-medium transition-colors"
              style={{
                color: activeDept === key ? departments[key].color : "#94a3b8",
              }}
            >
              {departments[key].name}
              {activeDept === key && (
                <motion.div
                  layoutId="dept-tab"
                  className="absolute inset-x-0 -bottom-px h-0.5"
                  style={{ backgroundColor: departments[key].color }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Dashboard Content */}
        <div className="p-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDept}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {/* KPI Grid */}
              <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                {dept.kpis.map((kpi, i) => (
                  <motion.div
                    key={kpi.label}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.08 }}
                    className="group relative overflow-hidden rounded-xl border border-white/5 bg-slate-800/50 p-4 transition-colors hover:border-white/10 hover:bg-slate-800/80"
                  >
                    <div className="flex items-center justify-between">
                      <kpi.icon
                        className="h-4 w-4"
                        style={{ color: dept.color }}
                      />
                      <div
                        className={`flex items-center gap-0.5 text-xs font-medium ${
                          kpi.change >= 0 ? "text-green-400" : "text-red-400"
                        }`}
                      >
                        {kpi.change >= 0 ? (
                          <ArrowUpRight className="h-3 w-3" />
                        ) : (
                          <ArrowDownRight className="h-3 w-3" />
                        )}
                        {Math.abs(kpi.change)}%
                      </div>
                    </div>
                    <p className="mt-2 text-xl font-bold text-white">
                      {kpi.value}
                    </p>
                    <p className="text-xs text-slate-400">{kpi.label}</p>
                    <div className="mt-2">
                      <Sparkline data={kpi.sparkline} color={dept.color} />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Projects */}
              <div className="mt-4 rounded-xl border border-white/5 bg-slate-800/30 p-4">
                <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Aktive Projekte
                </h4>
                <div className="space-y-3">
                  {dept.projects.map((project, i) => (
                    <motion.div
                      key={project.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between">
                          <p className="truncate text-sm text-white">
                            {project.name}
                          </p>
                          <span className="ml-2 text-xs text-slate-400">
                            {project.progress}%
                          </span>
                        </div>
                        <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-slate-700">
                          <motion.div
                            className="h-full rounded-full"
                            style={{ backgroundColor: dept.color }}
                            initial={{ width: 0 }}
                            animate={{ width: `${project.progress}%` }}
                            transition={{
                              delay: 0.5 + i * 0.15,
                              duration: 0.8,
                              ease: "easeOut",
                            }}
                          />
                        </div>
                      </div>
                      <span
                        className="shrink-0 rounded-full px-2 py-0.5 text-xs"
                        style={{
                          backgroundColor: `${dept.color}20`,
                          color: dept.color,
                        }}
                      >
                        {project.status}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

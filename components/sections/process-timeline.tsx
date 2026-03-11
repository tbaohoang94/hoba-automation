"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, Route, Cog, Zap, CheckCircle2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* =================================================================
   Schritt-Daten — 1:1 aus Animation 4
   ================================================================= */
const processSteps: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Search,
    title: "Prozess identifizieren",
    description:
      "Manuelle, repetitive Aufgaben werden erkannt und priorisiert.",
  },
  {
    icon: Route,
    title: "Workflow designen",
    description:
      "Ablauf wird als Automatisierung modelliert — Trigger, Aktionen, Bedingungen.",
  },
  {
    icon: Cog,
    title: "Systeme verbinden",
    description:
      "APIs und Schnittstellen verknuepfen CRM, ERP, Email und weitere Tools.",
  },
  {
    icon: Zap,
    title: "Automation aktivieren",
    description:
      "Der Workflow geht live — Daten fliessen automatisch zwischen den Systemen.",
  },
  {
    icon: CheckCircle2,
    title: "Ergebnis messen",
    description:
      "KPIs werden getrackt: Zeitersparnis, Fehlerreduktion, ROI.",
  },
];

/* =================================================================
   Einzelner Schritt — vertikale Timeline (1:1 Animation 4, Dark-Theme)
   ================================================================= */
function ProcessTimelineStep({
  step,
  index,
  isLast,
}: {
  step: (typeof processSteps)[number];
  index: number;
  isLast: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="relative flex gap-6 pb-12 last:pb-0">
      {/* Vertikale Verbindungslinie */}
      {!isLast && (
        <div className="absolute left-[23px] top-14 bottom-0 w-px">
          <motion.div
            className="h-full w-full bg-gradient-to-b from-blue-400/40 to-blue-400/10"
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ transformOrigin: "top" }}
          />
        </div>
      )}

      {/* Icon-Kreis */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.1, type: "spring", stiffness: 200 }}
        className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-blue-400/30 bg-[var(--bg-surface)]"
      >
        {inView ? (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6, duration: 0.3, type: "spring" }}
          >
            <step.icon className="h-5 w-5 text-blue-300" />
          </motion.div>
        ) : (
          <step.icon className="h-5 w-5 text-blue-300 opacity-0" />
        )}
      </motion.div>

      {/* Text-Bereich */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex items-center gap-2">
          <h4 className="text-base font-semibold text-white md:text-lg">
            {step.title}
          </h4>
          {inView && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 300 }}
            >
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            </motion.div>
          )}
        </div>
        <p className="mt-1 text-sm leading-relaxed text-[var(--text-secondary)]">
          {step.description}
        </p>
      </motion.div>
    </div>
  );
}

/* =================================================================
   Haupt-Komponente — vertikale Timeline
   ================================================================= */
export function ProcessTimeline() {
  return (
    <div className="mx-auto max-w-xl">
      {processSteps.map((step, i) => (
        <ProcessTimelineStep
          key={step.title}
          step={step}
          index={i}
          isLast={i === processSteps.length - 1}
        />
      ))}
    </div>
  );
}

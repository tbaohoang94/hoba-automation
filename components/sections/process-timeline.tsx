"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, Route, Zap, CheckCircle2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* =================================================================
   Schritt-Daten
   ================================================================= */
interface ProcessStep {
  icon: LucideIcon;
  number: string;
  title: string;
  description: string;
}

const steps: ProcessStep[] = [
  {
    icon: Search,
    number: "01",
    title: "Potenzialanalyse",
    description:
      "In 30 Minuten analysieren wir Ihre Prozesse, identifizieren die groessten Zeitfresser und berechnen Ihr Einsparpotenzial.",
  },
  {
    icon: Route,
    number: "02",
    title: "Strategie & Roadmap",
    description:
      "Sie erhalten einen konkreten Umsetzungsplan mit Prioritaeten, Zeitrahmen und erwartetem ROI.",
  },
  {
    icon: Zap,
    number: "03",
    title: "Umsetzung & Uebergabe",
    description:
      "Wir implementieren, testen und schulen Ihr Team. Sie sind ab Tag 1 unabhaengig.",
  },
];

/* =================================================================
   Einzelner Schritt (Desktop-Karte)
   ================================================================= */
function StepCard({
  step,
  index,
}: {
  step: ProcessStep;
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      {/* Icon-Kreis */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{
          duration: 0.5,
          delay: index * 0.2 + 0.1,
          type: "spring",
          stiffness: 200,
        }}
        className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-400/20 bg-[var(--bg-surface)] shadow-lg shadow-blue-500/10 md:h-20 md:w-20"
      >
        {inView ? (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.2 + 0.5, duration: 0.3, type: "spring" }}
          >
            <step.icon className="h-7 w-7 text-blue-300 md:h-8 md:w-8" />
          </motion.div>
        ) : (
          <step.icon className="h-7 w-7 text-blue-300 opacity-0 md:h-8 md:w-8" />
        )}
      </motion.div>

      {/* Haekchenmarkierung */}
      {inView && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: index * 0.2 + 0.9, type: "spring", stiffness: 300 }}
          className="mt-3"
        >
          <CheckCircle2 className="h-5 w-5 text-emerald-500" />
        </motion.div>
      )}

      {/* Schrittnummer */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
        className="mt-4"
      >
        <span className="animate-pulse text-sm font-bold text-blue-300">
          {step.number}
        </span>
      </motion.div>

      {/* Titel + Beschreibung */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
        className="mt-2"
      >
        <h4 className="text-xl font-semibold text-white">{step.title}</h4>
        <p className="mt-2 text-[var(--text-secondary)] leading-relaxed">
          {step.description}
        </p>
      </motion.div>
    </div>
  );
}

/* =================================================================
   Verbindungslinie (horizontal, zwischen Desktop-Karten)
   ================================================================= */
function ConnectingLineH({ index }: { index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div
      ref={ref}
      className="hidden md:flex items-center justify-center"
      style={{ marginTop: "2.5rem" /* auf Icon-Mitte ausrichten */ }}
    >
      <div className="h-px w-full overflow-hidden">
        <motion.div
          className="h-full w-full bg-gradient-to-r from-blue-400/30 via-blue-400/20 to-blue-400/30"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
          style={{ transformOrigin: "left" }}
        />
      </div>
    </div>
  );
}

/* =================================================================
   Mobiler Einzelschritt (vertikale Timeline)
   ================================================================= */
function MobileStep({
  step,
  index,
  isLast,
}: {
  step: ProcessStep;
  index: number;
  isLast: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="relative flex gap-5 pb-12 last:pb-0">
      {/* Vertikale Verbindungslinie */}
      {!isLast && (
        <div className="absolute left-[31px] top-[5rem] bottom-0 w-px">
          <motion.div
            className="h-full w-full bg-gradient-to-b from-blue-400/30 via-blue-400/20 to-blue-400/10"
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
        transition={{
          duration: 0.4,
          delay: 0.1,
          type: "spring",
          stiffness: 200,
        }}
        className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-blue-400/20 bg-[var(--bg-surface)] shadow-lg shadow-blue-500/10"
      >
        {inView ? (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.3, type: "spring" }}
          >
            <step.icon className="h-7 w-7 text-blue-300" />
          </motion.div>
        ) : (
          <step.icon className="h-7 w-7 text-blue-300 opacity-0" />
        )}
      </motion.div>

      {/* Text-Bereich */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="pt-1"
      >
        <div className="flex items-center gap-2">
          <span className="animate-pulse text-sm font-bold text-blue-300">
            {step.number}
          </span>
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
        <h4 className="mt-1 text-xl font-semibold text-white">{step.title}</h4>
        <p className="mt-1 text-[var(--text-secondary)] leading-relaxed">
          {step.description}
        </p>
      </motion.div>
    </div>
  );
}

/* =================================================================
   Haupt-Komponente
   ================================================================= */
export function ProcessTimeline() {
  return (
    <div>
      {/* Desktop: horizontales Layout mit 3 Spalten */}
      <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-start md:gap-4 lg:gap-6">
        {steps.map((step, i) => (
          <div key={step.number} className="contents">
            <StepCard step={step} index={i} />
            {i < steps.length - 1 && <ConnectingLineH index={i} />}
          </div>
        ))}
      </div>

      {/* Mobile: vertikale Timeline */}
      <div className="mx-auto max-w-xl md:hidden">
        {steps.map((step, i) => (
          <MobileStep
            key={step.number}
            step={step}
            index={i}
            isLast={i === steps.length - 1}
          />
        ))}
      </div>
    </div>
  );
}

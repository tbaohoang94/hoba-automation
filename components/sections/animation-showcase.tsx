"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import {
  Mail,
  Bot,
  Users,
  FileText,
  MonitorDot,
  Calendar,
  Database,
  HardDrive,
  CheckCircle2,
  Search,
  Route,
  Zap,
  Cog,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

/* =================================================================
   Hilfsfunktion: Animierter Zaehler (lokale Kopie fuer Autarkie)
   ================================================================= */
function Counter({
  target,
  suffix = "",
  prefix = "",
  duration = 2000,
  decimals = 0,
}: {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  decimals?: number;
}) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const t0 = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - t0) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setValue(parseFloat((eased * target).toFixed(decimals)));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration, decimals]);

  return (
    <span ref={ref}>
      {prefix}
      {value.toLocaleString("de-DE", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}

/* =================================================================
   Hilfs-Wrapper: Einblenden bei Scroll
   ================================================================= */
function RevealOnScroll({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.4, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* =================================================================
   1. DATA FLOW PIPELINE
   ================================================================= */
const pipelineNodes = [
  { icon: Mail, label: "Email" },
  { icon: Bot, label: "AI" },
  { icon: Users, label: "CRM" },
  { icon: FileText, label: "Report" },
];

function DataFlowPipeline() {
  return (
    <RevealOnScroll>
      <div className="relative mx-auto max-w-3xl">
        {/* CSS fuer laufende Partikel */}
        <style>{`
          @keyframes flowDot {
            0%   { left: 0%; opacity: 0; }
            10%  { opacity: 1; }
            90%  { opacity: 1; }
            100% { left: 100%; opacity: 0; }
          }
          @keyframes nodeGlow {
            0%, 100% { box-shadow: 0 0 0 0 rgba(96,165,250,0); }
            50%      { box-shadow: 0 0 24px 4px rgba(96,165,250,0.35); }
          }
          .pipeline-line { position: relative; overflow: hidden; }
          .pipeline-dot {
            position: absolute;
            width: 8px; height: 8px;
            border-radius: 50%;
            background: #60a5fa;
            top: 50%; transform: translateY(-50%);
            animation: flowDot 3s linear infinite;
          }
          .pipeline-dot:nth-child(2) { animation-delay: 1s; }
          .pipeline-dot:nth-child(3) { animation-delay: 2s; }
          .node-ring { animation: nodeGlow 3s ease-in-out infinite; }
          .node-ring:nth-child(2) .node-inner { animation-delay: 0.75s; }
          .node-ring:nth-child(3) .node-inner { animation-delay: 1.5s; }
          .node-ring:nth-child(4) .node-inner { animation-delay: 2.25s; }
        `}</style>

        <div className="flex items-center justify-between gap-2 md:gap-0">
          {pipelineNodes.map((node, i) => (
            <div key={node.label} className="flex items-center" style={{ flex: 1 }}>
              {/* Knoten */}
              <div className="node-ring relative z-10 flex flex-col items-center" style={{ animationDelay: `${i * 0.75}s` }}>
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-400/30 bg-[var(--bg-surface)] md:h-20 md:w-20">
                  <node.icon className="h-7 w-7 text-blue-300 md:h-8 md:w-8" />
                </div>
                <span className="mt-2 text-xs font-medium text-blue-200/70 md:text-sm">
                  {node.label}
                </span>
              </div>

              {/* Verbindungslinie mit Partikeln */}
              {i < pipelineNodes.length - 1 && (
                <div className="pipeline-line relative mx-1 h-[2px] flex-1 bg-blue-400/20 md:mx-2">
                  <span className="pipeline-dot" />
                  <span className="pipeline-dot" />
                  <span className="pipeline-dot" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </RevealOnScroll>
  );
}

/* =================================================================
   2. BEFORE / AFTER METRICS
   ================================================================= */
const metrics = [
  { label: "Bearbeitungszeit", before: "3 Stunden", after: "6 Sekunden", beforePct: 100, afterPct: 0.06 },
  { label: "Fehlerquote", before: "8 %", after: "0,2 %", beforePct: 80, afterPct: 2.5 },
  { label: "Kosten (relativ)", before: "100 %", after: "15 %", beforePct: 100, afterPct: 15 },
  { label: "Manuelle Schritte", before: "12", after: "1", beforePct: 100, afterPct: 8 },
];

function BeforeAfterMetrics() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <RevealOnScroll>
      <div ref={ref} className="mx-auto max-w-3xl space-y-8">
        {/* Spalten-Header */}
        <div className="grid grid-cols-[1fr_1fr_1fr] gap-4 text-center text-sm font-semibold md:text-base">
          <span className="text-[var(--text-on-light-secondary)]">Kennzahl</span>
          <span className="text-red-500">Vorher</span>
          <span className="text-emerald-600">Nachher</span>
        </div>

        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="grid grid-cols-[1fr_1fr_1fr] items-center gap-4"
          >
            <span className="text-sm font-medium text-[var(--text-on-light)] md:text-base">
              {m.label}
            </span>

            {/* Vorher */}
            <div>
              <div className="mb-1 text-center text-sm font-semibold text-red-500 md:text-base">
                {m.before}
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-red-100">
                <motion.div
                  className="h-full rounded-full bg-red-400"
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${m.beforePct}%` } : {}}
                  transition={{ duration: 1, delay: 0.3 + i * 0.15, ease: "easeOut" }}
                />
              </div>
            </div>

            {/* Nachher */}
            <div>
              <div className="mb-1 text-center text-sm font-semibold text-emerald-600 md:text-base">
                {m.after}
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-emerald-100">
                <motion.div
                  className="h-full rounded-full bg-emerald-400"
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${Math.max(m.afterPct, 3)}%` } : {}}
                  transition={{ duration: 1, delay: 0.6 + i * 0.15, ease: "easeOut" }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </RevealOnScroll>
  );
}

/* =================================================================
   3. SYSTEM INTEGRATION WHEEL
   ================================================================= */
const orbitTools = [
  { icon: Users, label: "CRM" },
  { icon: Database, label: "ERP" },
  { icon: Mail, label: "Email" },
  { icon: Calendar, label: "Kalender" },
  { icon: FileText, label: "Buchhaltung" },
  { icon: HardDrive, label: "Storage" },
];

function IntegrationWheel() {
  return (
    <RevealOnScroll>
      <style>{`
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(var(--orbit-r)) rotate(0deg); }
          to   { transform: rotate(360deg) translateX(var(--orbit-r)) rotate(-360deg); }
        }
        @keyframes pulse-line {
          0%, 100% { opacity: 0.15; }
          50%      { opacity: 0.5; }
        }
      `}</style>

      <div className="relative mx-auto flex aspect-square w-full max-w-[420px] items-center justify-center">
        {/* Orbit-Kreis (dekorative Linie) */}
        <div className="absolute h-[85%] w-[85%] rounded-full border border-dashed border-blue-400/20" />

        {/* Zentrum */}
        <div className="relative z-10 flex h-20 w-20 flex-col items-center justify-center rounded-full border border-blue-400/30 bg-[var(--bg-surface)] shadow-lg shadow-blue-500/20 md:h-24 md:w-24">
          <Cog className="h-8 w-8 text-blue-300 md:h-10 md:w-10" />
          <span className="mt-0.5 text-[10px] font-bold leading-none text-blue-200/70 md:text-xs">
            HOBA
          </span>
        </div>

        {/* Orbit-Nodes */}
        {orbitTools.map((tool, i) => {
          const angle = (360 / orbitTools.length) * i;
          const duration = 30 + i * 4; // leicht unterschiedlich
          return (
            <div
              key={tool.label}
              className="absolute left-1/2 top-1/2 -ml-6 -mt-6 h-12 w-12 md:-ml-7 md:-mt-7 md:h-14 md:w-14"
              style={
                {
                  "--orbit-r": "min(38%, 155px)",
                  animation: `orbit ${duration}s linear infinite`,
                  animationDelay: `${-(duration / orbitTools.length) * i}s`,
                } as React.CSSProperties
              }
            >
              <div className="flex h-full w-full flex-col items-center justify-center rounded-xl border border-blue-400/20 bg-[var(--bg-surface)] shadow-md">
                <tool.icon className="h-5 w-5 text-blue-200 md:h-6 md:w-6" />
                <span className="mt-0.5 text-[9px] font-medium leading-none text-blue-300/70 md:text-[10px]">
                  {tool.label}
                </span>
              </div>
            </div>
          );
        })}

        {/* Pulsierende Verbindungslinien (statisch, radiale Linien) */}
        {orbitTools.map((_, i) => {
          const angle = (360 / orbitTools.length) * i;
          return (
            <div
              key={`line-${i}`}
              className="absolute left-1/2 top-1/2 origin-left"
              style={{
                width: "min(38%, 155px)",
                height: "1px",
                background: "linear-gradient(to right, rgba(96,165,250,0.4), rgba(96,165,250,0.05))",
                transform: `rotate(${angle}deg)`,
                animation: `pulse-line 3s ease-in-out infinite`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          );
        })}
      </div>
    </RevealOnScroll>
  );
}

/* =================================================================
   4. PROCESS AUTOMATION STEPS (Vertikale Timeline)
   ================================================================= */
const processSteps = [
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
      {/* Vertikale Linie */}
      {!isLast && (
        <div className="absolute left-[23px] top-14 bottom-0 w-px">
          <motion.div
            className="h-full w-full bg-gradient-to-b from-blue-300/40 to-blue-300/10"
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
        className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-blue-300/30 bg-[var(--bg-light)]"
      >
        {inView ? (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6, duration: 0.3, type: "spring" }}
          >
            <step.icon className="h-5 w-5 text-blue-600" />
          </motion.div>
        ) : (
          <step.icon className="h-5 w-5 text-blue-600 opacity-0" />
        )}
      </motion.div>

      {/* Inhalt */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex items-center gap-2">
          <h4 className="text-base font-semibold text-[var(--text-on-light)] md:text-lg">
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
        <p className="mt-1 text-sm leading-relaxed text-[var(--text-on-light-secondary)]">
          {step.description}
        </p>
      </motion.div>
    </div>
  );
}

function ProcessTimeline() {
  return (
    <RevealOnScroll>
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
    </RevealOnScroll>
  );
}

/* =================================================================
   5. ROI CALCULATOR ANIMATION
   ================================================================= */

function ROIDashboard() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  // Datenpunkte fuer die Linie (Kosten ueber 12 Monate)
  const months = ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"];
  // Kumulative Einsparungen (in Tausend EUR)
  const savings = [0, 2, 5, 9, 14, 20, 27, 35, 44, 54, 65, 78];
  // Investitionskosten (einmalig + laufend)
  const costs = [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];
  // Break-even bei Monat 4 (Index 3)
  const breakEvenIdx = 3;

  const maxY = 80;
  const chartW = 600;
  const chartH = 240;

  const toX = (i: number) => (i / (months.length - 1)) * chartW;
  const toY = (v: number) => chartH - (v / maxY) * chartH;

  const savingsPath = savings.map((v, i) => `${i === 0 ? "M" : "L"} ${toX(i)} ${toY(v)}`).join(" ");
  const costsPath = costs.map((v, i) => `${i === 0 ? "M" : "L"} ${toX(i)} ${toY(v)}`).join(" ");

  // Flaechenpfad fuer Einsparungen (gefuellt)
  const areaPath = `${savingsPath} L ${toX(11)} ${chartH} L ${toX(0)} ${chartH} Z`;

  return (
    <RevealOnScroll>
      <div ref={ref} className="mx-auto max-w-3xl">
        {/* Obere Kennzahlen */}
        <div className="mb-8 grid grid-cols-3 gap-4">
          {[
            { label: "Jahres-ROI", value: 300, suffix: " %", color: "text-emerald-400" },
            { label: "Einsparung / Monat", value: 6500, suffix: " €", prefix: "", color: "text-blue-300" },
            { label: "Break-even", value: 4, suffix: " Monate", color: "text-amber-300" },
          ].map((kpi) => (
            <div
              key={kpi.label}
              className="rounded-xl border border-blue-400/15 p-4 text-center"
              style={{ background: "var(--bg-surface)" }}
            >
              <p className={`text-2xl font-bold ${kpi.color} md:text-3xl`}>
                <Counter target={kpi.value} suffix={kpi.suffix} prefix={kpi.prefix || ""} />
              </p>
              <p className="mt-1 text-xs text-[var(--text-muted)]">{kpi.label}</p>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div
          className="overflow-hidden rounded-2xl border border-blue-400/15 p-4 md:p-6"
          style={{ background: "var(--bg-surface)" }}
        >
          <div className="mb-3 flex items-center justify-between text-xs text-[var(--text-muted)]">
            <span>Kumulative Einsparung vs. Investition</span>
            <div className="flex gap-4">
              <span className="flex items-center gap-1.5">
                <span className="inline-block h-2 w-4 rounded-full bg-blue-400" />
                Einsparung
              </span>
              <span className="flex items-center gap-1.5">
                <span className="inline-block h-2 w-4 rounded-full bg-red-400/60" />
                Investition
              </span>
            </div>
          </div>

          <svg viewBox={`-40 -10 ${chartW + 60} ${chartH + 40}`} className="w-full" aria-hidden="true">
            {/* Rasterlinien */}
            {[0, 20, 40, 60, 80].map((v) => (
              <g key={v}>
                <line
                  x1={0} y1={toY(v)} x2={chartW} y2={toY(v)}
                  stroke="rgba(96,165,250,0.08)" strokeWidth={1}
                />
                <text x={-8} y={toY(v) + 4} textAnchor="end" className="fill-blue-300/40 text-[10px]">
                  {v}k
                </text>
              </g>
            ))}

            {/* X-Achsen-Labels */}
            {months.map((m, i) => (
              <text key={m} x={toX(i)} y={chartH + 20} textAnchor="middle" className="fill-blue-300/40 text-[10px]">
                {m}
              </text>
            ))}

            {/* Einsparungs-Flaeche */}
            <motion.path
              d={areaPath}
              fill="url(#savingsGrad)"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.5 }}
            />

            {/* Einsparungs-Linie */}
            <motion.path
              d={savingsPath}
              fill="none"
              stroke="#60a5fa"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={inView ? { pathLength: 1 } : {}}
              transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
            />

            {/* Kosten-Linie */}
            <motion.path
              d={costsPath}
              fill="none"
              stroke="rgba(248,113,113,0.6)"
              strokeWidth={2}
              strokeDasharray="6 4"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={inView ? { pathLength: 1 } : {}}
              transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
            />

            {/* Break-even Marker */}
            <motion.g
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1.5, duration: 0.5, type: "spring" }}
            >
              <line
                x1={toX(breakEvenIdx)}
                y1={0}
                x2={toX(breakEvenIdx)}
                y2={chartH}
                stroke="rgba(251,191,36,0.4)"
                strokeWidth={1}
                strokeDasharray="4 3"
              />
              <rect
                x={toX(breakEvenIdx) - 38}
                y={toY(savings[breakEvenIdx]) - 26}
                width={76}
                height={20}
                rx={4}
                fill="rgba(251,191,36,0.15)"
                stroke="rgba(251,191,36,0.4)"
                strokeWidth={1}
              />
              <text
                x={toX(breakEvenIdx)}
                y={toY(savings[breakEvenIdx]) - 12}
                textAnchor="middle"
                className="fill-amber-300 text-[10px] font-semibold"
              >
                Break-even
              </text>
              <circle
                cx={toX(breakEvenIdx)}
                cy={toY(savings[breakEvenIdx])}
                r={5}
                fill="#fbbf24"
                stroke="var(--bg-surface)"
                strokeWidth={2}
              />
            </motion.g>

            {/* Gradient Definition */}
            <defs>
              <linearGradient id="savingsGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(96,165,250,0.25)" />
                <stop offset="100%" stopColor="rgba(96,165,250,0)" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </RevealOnScroll>
  );
}

/* =================================================================
   HAUPTKOMPONENTE — Alle Sektionen zusammen
   ================================================================= */
export function AnimationShowcase() {
  return (
    <>
      {/* ============================================================
          1. DATA FLOW PIPELINE — dunkel
          ============================================================ */}
      <section className="py-28" style={{ background: "var(--bg-base)" }}>
        <div className="mx-auto max-w-[1280px] px-4 md:px-6">
          <RevealOnScroll className="mx-auto mb-12 max-w-2xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-sm text-blue-300">
              Animation 1
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              Data Flow Pipeline
            </h2>
            <p className="mx-auto mt-4 max-w-[640px] text-[var(--text-secondary)]">
              Daten fliessen automatisch durch die Pipeline — von der Quelle
              ueber AI-Verarbeitung bis zum fertigen Report.
            </p>
          </RevealOnScroll>
          <DataFlowPipeline />
        </div>
      </section>

      {/* ============================================================
          2. BEFORE / AFTER METRICS — hell
          ============================================================ */}
      <section className="py-28" style={{ background: "var(--bg-light)" }}>
        <div className="mx-auto max-w-[1280px] px-4 md:px-6">
          <RevealOnScroll className="mx-auto mb-12 max-w-2xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-300/40 bg-blue-50 px-3 py-1 text-sm text-blue-600">
              Animation 2
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-[var(--text-on-light)] md:text-4xl lg:text-5xl">
              Vorher / Nachher Metriken
            </h2>
            <p className="mx-auto mt-4 max-w-[640px] text-[var(--text-on-light-secondary)]">
              Animierte Fortschrittsbalken und Counter zeigen den direkten
              Vergleich zwischen manueller und automatisierter Arbeit.
            </p>
          </RevealOnScroll>
          <BeforeAfterMetrics />
        </div>
      </section>

      {/* ============================================================
          3. SYSTEM INTEGRATION WHEEL — dunkel
          ============================================================ */}
      <section className="py-28" style={{ background: "var(--bg-base)" }}>
        <div className="mx-auto max-w-[1280px] px-4 md:px-6">
          <RevealOnScroll className="mx-auto mb-12 max-w-2xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-sm text-blue-300">
              Animation 3
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              System Integration Wheel
            </h2>
            <p className="mx-auto mt-4 max-w-[640px] text-[var(--text-secondary)]">
              Alle Tools kreisen um die zentrale Plattform — verbunden durch
              pulsierende Datenleitungen.
            </p>
          </RevealOnScroll>
          <IntegrationWheel />
        </div>
      </section>

      {/* ============================================================
          4. PROCESS AUTOMATION STEPS — hell
          ============================================================ */}
      <section className="py-28" style={{ background: "var(--bg-light)" }}>
        <div className="mx-auto max-w-[1280px] px-4 md:px-6">
          <RevealOnScroll className="mx-auto mb-12 max-w-2xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-300/40 bg-blue-50 px-3 py-1 text-sm text-blue-600">
              Animation 4
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-[var(--text-on-light)] md:text-4xl lg:text-5xl">
              Process Automation Steps
            </h2>
            <p className="mx-auto mt-4 max-w-[640px] text-[var(--text-on-light-secondary)]">
              Vertikale Timeline mit Scroll-Reveal — jeder Schritt erscheint
              einzeln und wird mit einem Haekchen abgeschlossen.
            </p>
          </RevealOnScroll>
          <ProcessTimeline />
        </div>
      </section>

      {/* ============================================================
          5. ROI CALCULATOR — dunkel
          ============================================================ */}
      <section className="py-28" style={{ background: "var(--bg-base)" }}>
        <div className="mx-auto max-w-[1280px] px-4 md:px-6">
          <RevealOnScroll className="mx-auto mb-12 max-w-2xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-sm text-blue-300">
              Animation 5
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              ROI Calculator Animation
            </h2>
            <p className="mx-auto mt-4 max-w-[640px] text-[var(--text-secondary)]">
              Ein animiertes Dashboard mit selbstzeichnendem Linien-Chart,
              hochzaehlenden KPIs und Break-even-Marker.
            </p>
          </RevealOnScroll>
          <ROIDashboard />
        </div>
      </section>
    </>
  );
}

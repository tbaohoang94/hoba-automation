"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  FileSpreadsheet,
  Database,
  Send,
  AlertTriangle,
  Clock,
  Zap,
  CheckCircle2,
  XCircle,
  User,
} from "lucide-react";

type Mode = "manuell" | "automatisiert";

const manualSteps = [
  {
    icon: Mail,
    label: "Anfrage per E-Mail",
    time: "—",
    status: "start" as const,
  },
  {
    icon: User,
    label: "Mitarbeiter liest Mail",
    time: "15 min",
    status: "slow" as const,
  },
  {
    icon: FileSpreadsheet,
    label: "Daten in Excel kopieren",
    time: "20 min",
    status: "slow" as const,
  },
  {
    icon: User,
    label: "Kalkulation erstellen",
    time: "45 min",
    status: "slow" as const,
  },
  {
    icon: Database,
    label: "In ERP eintragen",
    time: "15 min",
    status: "slow" as const,
  },
  {
    icon: Send,
    label: "Bestätigung versenden",
    time: "10 min",
    status: "slow" as const,
  },
];

const automatedSteps = [
  {
    icon: Mail,
    label: "Anfrage per E-Mail",
    time: "—",
    status: "start" as const,
  },
  {
    icon: Zap,
    label: "KI extrahiert Daten",
    time: "2 Sek.",
    status: "fast" as const,
  },
  {
    icon: Database,
    label: "CRM + ERP automatisch",
    time: "1 Sek.",
    status: "fast" as const,
  },
  {
    icon: Zap,
    label: "Auto-Kalkulation",
    time: "3 Sek.",
    status: "fast" as const,
  },
  {
    icon: Send,
    label: "Bestätigung versendet",
    time: "Sofort",
    status: "fast" as const,
  },
];

/* ---------------------------------------------------------------------------
 * FlowingArrow — animierter Pfeil-Connector mit fliessenden Partikeln
 * Verwendet reine CSS-Keyframes fuer performante Endlos-Animation.
 * ---------------------------------------------------------------------------*/
function FlowingArrow({ isManual }: { isManual: boolean }) {
  const color = isManual ? "#ef4444" : "#22c55e";
  const glowColor = isManual ? "rgba(239,68,68,0.4)" : "rgba(34,197,94,0.4)";
  // Manuell = langsam (3s), Automatisiert = schnell (1s)
  const duration = isManual ? "3s" : "1s";

  return (
    <div className="relative flex w-10 items-center justify-center shrink-0">
      {/* Basislinie */}
      <div
        className="absolute h-[2px] w-full rounded-full"
        style={{ backgroundColor: `${color}20` }}
      />

      {/* Pfeilspitze */}
      <svg
        className="absolute right-0 -mr-[3px]"
        width="8"
        height="10"
        viewBox="0 0 8 10"
        fill="none"
      >
        <path d="M0 0L8 5L0 10V0Z" fill={color} opacity={0.6} />
      </svg>

      {/* Fliessende Punkte — 3 Stueck, zeitversetzt */}
      {[0, 1, 2].map((dotIndex) => (
        <div
          key={dotIndex}
          className="absolute left-0 h-[6px] w-[6px] rounded-full"
          style={{
            backgroundColor: color,
            boxShadow: `0 0 6px 1px ${glowColor}`,
            animation: `flowRight ${duration} linear infinite`,
            animationDelay: `${dotIndex * (parseFloat(duration) / 3)}s`,
          }}
        />
      ))}
    </div>
  );
}

/* ---------------------------------------------------------------------------
 * FlowingArrowMobile — vertikaler Connector fuer Mobile-Ansicht
 * ---------------------------------------------------------------------------*/
function FlowingArrowMobile({ isManual }: { isManual: boolean }) {
  const color = isManual ? "#ef4444" : "#22c55e";
  const glowColor = isManual ? "rgba(239,68,68,0.4)" : "rgba(34,197,94,0.4)";
  const duration = isManual ? "3s" : "1s";

  return (
    <div className="relative flex h-6 w-full items-center justify-center">
      {/* Vertikale Linie */}
      <div
        className="absolute h-full w-[2px] rounded-full"
        style={{ backgroundColor: `${color}20` }}
      />

      {/* Pfeilspitze nach unten */}
      <svg
        className="absolute bottom-0 -mb-[3px]"
        width="10"
        height="8"
        viewBox="0 0 10 8"
        fill="none"
      >
        <path d="M0 0L5 8L10 0H0Z" fill={color} opacity={0.6} />
      </svg>

      {/* Fliessende Punkte — vertikal */}
      {[0, 1, 2].map((dotIndex) => (
        <div
          key={dotIndex}
          className="absolute top-0 h-[6px] w-[6px] rounded-full"
          style={{
            backgroundColor: color,
            boxShadow: `0 0 6px 1px ${glowColor}`,
            animation: `flowDown ${duration} linear infinite`,
            animationDelay: `${dotIndex * (parseFloat(duration) / 3)}s`,
          }}
        />
      ))}
    </div>
  );
}

export function WorkflowVisualizer() {
  const [mode, setMode] = useState<Mode>("manuell");

  const steps = mode === "manuell" ? manualSteps : automatedSteps;
  const isManual = mode === "manuell";

  return (
    <div className="relative">
      {/* CSS Keyframe Animationen */}
      <style jsx global>{`
        @keyframes flowRight {
          0% {
            left: -10%;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            left: 95%;
            opacity: 0;
          }
        }

        @keyframes flowDown {
          0% {
            top: -10%;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            top: 95%;
            opacity: 0;
          }
        }

        @keyframes pulseGlow {
          0%,
          100% {
            box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
          }
          50% {
            box-shadow: 0 0 12px 4px rgba(34, 197, 94, 0.15);
          }
        }
      `}</style>

      {/* Mode Toggle */}
      <div className="mb-8 flex items-center justify-center">
        <div className="inline-flex rounded-full border border-white/10 bg-slate-800/50 p-1">
          <button
            onClick={() => setMode("manuell")}
            className={`relative rounded-full px-6 py-2 text-sm font-medium transition-colors ${
              isManual ? "text-white" : "text-slate-400 hover:text-slate-300"
            }`}
          >
            {isManual && (
              <motion.div
                layoutId="mode-bg"
                className="absolute inset-0 rounded-full bg-red-500/20 ring-1 ring-red-500/40"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative flex items-center gap-2">
              <XCircle className="h-4 w-4" />
              Manueller Prozess
            </span>
          </button>
          <button
            onClick={() => setMode("automatisiert")}
            className={`relative rounded-full px-6 py-2 text-sm font-medium transition-colors ${
              !isManual ? "text-white" : "text-slate-400 hover:text-slate-300"
            }`}
          >
            {!isManual && (
              <motion.div
                layoutId="mode-bg"
                className="absolute inset-0 rounded-full bg-green-500/20 ring-1 ring-green-500/40"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4" />
              Automatisiert
            </span>
          </button>
        </div>
      </div>

      {/* Workflow Visualization */}
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-sm md:p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Steps — Desktop: horizontal, Mobile: vertikal */}
            <div className="flex flex-col gap-0 md:flex-row md:items-center md:gap-0">
              {steps.map((step, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center md:flex-row md:flex-1"
                >
                  {/* Step Card */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className={`flex w-full flex-1 items-center gap-3 rounded-xl border p-3 md:flex-col md:gap-2 md:p-4 md:text-center ${
                      step.status === "slow"
                        ? "border-red-500/20 bg-red-500/5"
                        : step.status === "fast"
                          ? "border-green-500/20 bg-green-500/5"
                          : "border-white/10 bg-slate-800/30"
                    }`}
                    style={
                      !isManual && step.status === "fast"
                        ? {
                            animation: `pulseGlow 2s ease-in-out infinite`,
                            animationDelay: `${i * 0.4}s`,
                          }
                        : undefined
                    }
                  >
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                        step.status === "slow"
                          ? "bg-red-500/20"
                          : step.status === "fast"
                            ? "bg-green-500/20"
                            : "bg-slate-700/50"
                      }`}
                    >
                      <step.icon
                        className={`h-5 w-5 ${
                          step.status === "slow"
                            ? "text-red-400"
                            : step.status === "fast"
                              ? "text-green-400"
                              : "text-slate-300"
                        }`}
                      />
                    </div>
                    <div className="min-w-0 flex-1 md:flex-initial">
                      <p className="text-sm font-medium text-white">
                        {step.label}
                      </p>
                      {step.time !== "—" && (
                        <p
                          className={`mt-0.5 text-xs ${
                            step.status === "slow"
                              ? "text-red-400"
                              : "text-green-400"
                          }`}
                        >
                          {step.status === "slow" && (
                            <Clock className="mr-1 inline h-3 w-3" />
                          )}
                          {step.status === "fast" && (
                            <Zap className="mr-1 inline h-3 w-3" />
                          )}
                          {step.time}
                        </p>
                      )}
                    </div>
                  </motion.div>

                  {/* Animierter Pfeil zwischen Steps */}
                  {i < steps.length - 1 && (
                    <>
                      {/* Desktop: horizontaler Pfeil */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: i * 0.1 + 0.15 }}
                        className="hidden shrink-0 md:flex md:items-center md:px-1"
                      >
                        <FlowingArrow isManual={isManual} />
                      </motion.div>

                      {/* Mobile: vertikaler Pfeil */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: i * 0.1 + 0.15 }}
                        className="flex items-center justify-center py-1 md:hidden"
                      >
                        <FlowingArrowMobile isManual={isManual} />
                      </motion.div>
                    </>
                  )}
                </div>
              ))}
            </div>

            {/* Summary Bar */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className={`mt-6 flex flex-wrap items-center justify-between gap-4 rounded-xl border p-4 ${
                isManual
                  ? "border-red-500/20 bg-red-500/5"
                  : "border-green-500/20 bg-green-500/5"
              }`}
            >
              <div className="flex items-center gap-3">
                {isManual ? (
                  <AlertTriangle className="h-5 w-5 text-red-400" />
                ) : (
                  <CheckCircle2 className="h-5 w-5 text-green-400" />
                )}
                <div>
                  <p className="text-sm font-medium text-white">
                    {isManual
                      ? "Gesamtdauer: ~1,5 Stunden"
                      : "Gesamtdauer: ~6 Sekunden"}
                  </p>
                  <p className="text-xs text-slate-400">
                    {isManual
                      ? "Pro Vorgang · Fehlerquote: 8%"
                      : "Pro Vorgang · Fehlerquote: 0.2%"}
                  </p>
                </div>
              </div>
              {!isManual && (
                <div className="rounded-full bg-green-500/20 px-4 py-1.5 text-sm font-semibold text-green-400">
                  99% schneller
                </div>
              )}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

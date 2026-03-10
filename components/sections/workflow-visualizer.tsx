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
  ArrowRight,
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

export function WorkflowVisualizer() {
  const [mode, setMode] = useState<Mode>("manuell");

  const steps = mode === "manuell" ? manualSteps : automatedSteps;
  const isManual = mode === "manuell";

  return (
    <div className="relative">
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
            {/* Steps */}
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-2">
              {steps.map((step, i) => (
                <div key={i} className="flex items-center gap-2 md:flex-1">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className={`flex flex-1 items-center gap-3 rounded-xl border p-3 md:flex-col md:gap-2 md:p-4 md:text-center ${
                      step.status === "slow"
                        ? "border-red-500/20 bg-red-500/5"
                        : step.status === "fast"
                          ? "border-green-500/20 bg-green-500/5"
                          : "border-white/10 bg-slate-800/30"
                    }`}
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

                  {/* Arrow between steps */}
                  {i < steps.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.1 + 0.15 }}
                      className="hidden shrink-0 md:block"
                    >
                      <ArrowRight
                        className={`h-4 w-4 ${
                          isManual ? "text-red-500/40" : "text-green-500/40"
                        }`}
                      />
                    </motion.div>
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
                    {isManual ? "Gesamtdauer: ~1,5 Stunden" : "Gesamtdauer: ~6 Sekunden"}
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

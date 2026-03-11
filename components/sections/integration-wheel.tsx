"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Cog, FileText, MessageSquare, LayoutGrid } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  siGmail,
  siGooglesheets,
  siNotion,
  siHubspot,
  siGooglecalendar,
} from "simple-icons/icons";

/* ------------------------------------------------------------------ */
/*  Konstanten                                                        */
/* ------------------------------------------------------------------ */

const ORBIT_RADIUS = 150;
const TOOL_COUNT = 8;
const ANGLE_STEP = 360 / TOOL_COUNT; // 45 Grad
const ORBIT_DURATION = 30; // Sekunden — gleiche Geschwindigkeit fuer alle

interface ToolDef {
  name: string;
  path?: string;
  color: string;
  LucideIcon?: LucideIcon;
}

const TOOLS: ToolDef[] = [
  { name: "Gmail", path: siGmail.path, color: `#${siGmail.hex}` },
  { name: "Sheets", path: siGooglesheets.path, color: `#${siGooglesheets.hex}` },
  { name: "Notion", path: siNotion.path, color: `#${siNotion.hex}` },
  { name: "Slack", LucideIcon: MessageSquare, color: "#4A154B" },
  { name: "HubSpot", path: siHubspot.path, color: `#${siHubspot.hex}` },
  { name: "Lexoffice", LucideIcon: FileText, color: "#2BA2E4" },
  { name: "Calendar", path: siGooglecalendar.path, color: `#${siGooglecalendar.hex}` },
  { name: "Monday", LucideIcon: LayoutGrid, color: "#FF3D57" },
];

/* ------------------------------------------------------------------ */
/*  Keyframes                                                         */
/* ------------------------------------------------------------------ */

const keyframesCSS = `
@keyframes orbitSpin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
@keyframes counterSpin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(-360deg); }
}
@keyframes dashFlow {
  from { stroke-dashoffset: 16; }
  to   { stroke-dashoffset: 0; }
}
@keyframes pulseGlow {
  0%, 100% { box-shadow: 0 0 6px 0 rgba(96,165,250,0.15); }
  50%      { box-shadow: 0 0 14px 4px rgba(96,165,250,0.30); }
}
`;

/* ------------------------------------------------------------------ */
/*  Komponente                                                        */
/* ------------------------------------------------------------------ */

export function IntegrationWheel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-80px" });

  return (
    <>
      <style>{keyframesCSS}</style>

      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, scale: 0.85 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative mx-auto flex aspect-square w-full max-w-[420px] items-center justify-center"
      >
        {/* SVG: Orbit-Kreis + Verbindungslinien */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 420 420"
          fill="none"
        >
          {/* Gestrichelter Orbit-Kreis */}
          <circle
            cx="210"
            cy="210"
            r={ORBIT_RADIUS}
            stroke="rgba(96,165,250,0.15)"
            strokeWidth="1"
            strokeDasharray="6 6"
            fill="none"
          />

          {/* Animierte Verbindungslinien vom Zentrum zu jedem Node */}
          {TOOLS.map((_, i) => {
            const angleDeg = i * ANGLE_STEP - 90;
            const angleRad = (angleDeg * Math.PI) / 180;
            const x2 = 210 + Math.cos(angleRad) * ORBIT_RADIUS;
            const y2 = 210 + Math.sin(angleRad) * ORBIT_RADIUS;

            return (
              <line
                key={i}
                x1="210"
                y1="210"
                x2={x2}
                y2={y2}
                stroke="rgba(96,165,250,0.35)"
                strokeWidth={2}
                strokeDasharray="8 8"
                style={{
                  animation: "dashFlow 2s linear infinite",
                  animationDelay: `${i * 0.25}s`,
                }}
              />
            );
          })}
        </svg>

        {/* Orbit-Wrapper (rotiert alle Nodes gleichzeitig) */}
        <div
          className="absolute"
          style={{
            width: ORBIT_RADIUS * 2,
            height: ORBIT_RADIUS * 2,
            animation: `orbitSpin ${ORBIT_DURATION}s linear infinite`,
          }}
        >
          {TOOLS.map((tool, i) => {
            const angleDeg = i * ANGLE_STEP - 90;
            const angleRad = (angleDeg * Math.PI) / 180;
            const x = ORBIT_RADIUS + Math.cos(angleRad) * ORBIT_RADIUS;
            const y = ORBIT_RADIUS + Math.sin(angleRad) * ORBIT_RADIUS;

            return (
              <div
                key={tool.name}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: x, top: y }}
              >
                {/* Gegen-Rotation */}
                <div
                  className="flex flex-col items-center gap-1"
                  style={{ animation: `counterSpin ${ORBIT_DURATION}s linear infinite` }}
                >
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-xl border border-blue-400/20 bg-[var(--bg-surface)] md:h-16 md:w-16"
                    style={{ animation: "pulseGlow 3s ease-in-out infinite" }}
                  >
                    {tool.LucideIcon ? (
                      <tool.LucideIcon size={20} color={tool.color} strokeWidth={1.8} />
                    ) : (
                      <svg
                        role="img"
                        viewBox="0 0 24 24"
                        width={20}
                        height={20}
                        fill={tool.color}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d={tool.path} />
                      </svg>
                    )}
                  </div>

                  <span className="whitespace-nowrap text-[9px] font-medium text-blue-300/70 md:text-[10px]">
                    {tool.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Zentrum: HOBA */}
        <div className="relative z-10 flex h-20 w-20 flex-col items-center justify-center rounded-full border border-blue-400/30 bg-[var(--bg-surface)] shadow-lg shadow-blue-500/20 md:h-24 md:w-24">
          <Cog className="mb-1 h-6 w-6 text-blue-400" />
          <span className="text-sm font-bold tracking-wide text-blue-100">
            HOBA
          </span>
        </div>
      </motion.div>
    </>
  );
}

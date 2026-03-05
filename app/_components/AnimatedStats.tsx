"use client";

import { useEffect, useRef, useState } from "react";

interface StatItem {
  target: number;
  prefix?: string;
  suffix: string;
  label: string;
  duration?: number;
}

const stats: StatItem[] = [
  { target: 1000, suffix: "+", label: "aktive Kunden", duration: 2000 },
  { target: 2018, prefix: "seit ", suffix: "", label: "dabei", duration: 1500 },
  { target: 30, suffix: " %", label: "max. Provision", duration: 1200 },
  { target: 78, prefix: "ab ", suffix: " €", label: "Einstiegspaket", duration: 1200 },
];

function useCountUp(target: number, duration: number, start: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    let raf: number;

    const animate = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);

  return start ? value : 0;
}

function StatCounter({ item, visible }: { item: StatItem; visible: boolean }) {
  const value = useCountUp(item.target, item.duration ?? 1500, visible);
  const display = `${item.prefix ?? ""}${value.toLocaleString("de-DE")}${item.suffix}`;

  return (
    <div>
      <p className="text-3xl font-extrabold text-green-600 tabular-nums">{display}</p>
      <p className="text-xs text-gray-500 mt-1">{item.label}</p>
    </div>
  );
}

export default function AnimatedStats() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
      {stats.map((item, i) => (
        <StatCounter key={i} item={item} visible={visible} />
      ))}
    </div>
  );
}

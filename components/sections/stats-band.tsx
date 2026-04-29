"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import * as React from "react";

import { stats } from "@/lib/stats";

export function StatsBand() {
  return (
    <section className="border-y border-neutral-200 bg-white py-14 md:py-20">
      <div className="container-prose grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
        {stats.map((s) => (
          <StatItem key={s.label} stat={s} />
        ))}
      </div>
    </section>
  );
}

function StatItem({ stat }: { stat: (typeof stats)[number] }) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduced = useReducedMotion();
  const Icon = stat.icon;

  return (
    <div ref={ref} className="text-center md:text-left">
      <span className="inline-flex size-10 items-center justify-center rounded-md bg-brand-blue-50 text-brand-blue-700">
        <Icon className="size-5" strokeWidth={1.75} />
      </span>
      <div
        className="num mt-4 font-bold tracking-tight text-brand-blue-900"
        style={{ fontSize: "var(--font-size-stat)", lineHeight: 1 }}
      >
        {stat.prefix ?? ""}
        {reduced || !inView ? (
          <span>{stat.value}</span>
        ) : (
          <Counter to={stat.value} />
        )}
        {stat.suffix ? <span className="text-brand-blue-700">{stat.suffix}</span> : null}
      </div>
      <div className="mt-2 text-sm text-neutral-600">{stat.label}</div>
    </div>
  );
}

function Counter({ to }: { to: number }) {
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (v) => Math.round(v).toString());

  React.useEffect(() => {
    const controls = motionValue.set(0);
    const start = performance.now();
    const duration = 1500;
    let raf = 0;
    function step(now: number) {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      motionValue.set(eased * to);
      if (t < 1) raf = requestAnimationFrame(step);
    }
    raf = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(raf);
      void controls;
    };
  }, [to, motionValue]);

  return <motion.span>{rounded}</motion.span>;
}

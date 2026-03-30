import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { track } from "@vercel/analytics";

function clampNumber(value: number, min: number, max: number) {
  if (Number.isNaN(value)) return min;
  return Math.max(min, Math.min(max, value));
}

export default function RecurringValueSection() {
  const [hoursSavedPerWeek, setHoursSavedPerWeek] = useState(6);
  const [hourlyCost, setHourlyCost] = useState(250);
  const [monthlyServiceCost, setMonthlyServiceCost] = useState(6900);

  const monthlySavings = useMemo(() => {
    const hoursMonth = hoursSavedPerWeek * 4.33;
    return Math.round(hoursMonth * hourlyCost);
  }, [hoursSavedPerWeek, hourlyCost]);

  const netValue = useMemo(() => monthlySavings - monthlyServiceCost, [monthlySavings, monthlyServiceCost]);
  const roi = useMemo(() => {
    if (monthlyServiceCost <= 0) return null;
    return Math.round((netValue / monthlyServiceCost) * 100);
  }, [monthlyServiceCost, netValue]);

  return (
    <section id="recurrente" className="scroll-mt-[80px] bg-brand-bg text-brand-text py-28 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="max-w-xl">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
          >
            Ingresos recurrentes: el valor de mantener el sistema
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.06 }}
            className="mt-5 text-lg text-brand-muted leading-relaxed"
          >
            La mejora real no es un proyecto de una vez. Es iteración: soporte, optimización, nuevas automatizaciones y control continuo.
          </motion.p>
          <div className="mt-8 grid grid-cols-1 gap-3">
            {[
              "Soporte proactivo y respuesta a incidencias",
              "Optimización mensual basada en métricas",
              "Ajustes de procesos por cambios del negocio",
              "Evolución del sistema por fases sin reescribir",
            ].map((b) => (
              <div key={b} className="rounded-2xl border border-brand-border bg-brand-surface px-5 py-4 text-sm">
                {b}
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.06 }}
          className="rounded-3xl border border-brand-border bg-brand-surface p-7"
        >
          <div className="text-lg font-semibold">Calculadora de ahorro (ejemplo)</div>
          <div className="mt-2 text-sm text-brand-muted">
            Estima el valor mensual de ahorrar tiempo operativo vs. mantener el acompañamiento recurrente.
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <div className="text-sm font-semibold">Horas/semana ahorradas</div>
              <Input
                type="number"
                value={hoursSavedPerWeek}
                min={0}
                max={60}
                onChange={(e) => {
                  const v = clampNumber(Number(e.target.value), 0, 60);
                  setHoursSavedPerWeek(v);
                  track("Recurring Calculator Changed", { field: "hoursSavedPerWeek" });
                }}
                className="mt-2"
              />
            </div>
            <div>
              <div className="text-sm font-semibold">Costo por hora (MXN)</div>
              <Input
                type="number"
                value={hourlyCost}
                min={0}
                max={10000}
                onChange={(e) => {
                  const v = clampNumber(Number(e.target.value), 0, 10000);
                  setHourlyCost(v);
                  track("Recurring Calculator Changed", { field: "hourlyCost" });
                }}
                className="mt-2"
              />
            </div>
            <div>
              <div className="text-sm font-semibold">Costo mensual (MXN)</div>
              <Input
                type="number"
                value={monthlyServiceCost}
                min={0}
                max={200000}
                onChange={(e) => {
                  const v = clampNumber(Number(e.target.value), 0, 200000);
                  setMonthlyServiceCost(v);
                  track("Recurring Calculator Changed", { field: "monthlyServiceCost" });
                }}
                className="mt-2"
              />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-brand-border bg-brand-bg/35 p-5">
              <div className="text-xs text-brand-muted">Ahorro mensual estimado</div>
              <div className="mt-2 text-xl font-bold">${monthlySavings.toLocaleString("es-MX")} MXN</div>
            </div>
            <div className="rounded-2xl border border-brand-border bg-brand-bg/35 p-5">
              <div className="text-xs text-brand-muted">Valor neto</div>
              <div className="mt-2 text-xl font-bold">${netValue.toLocaleString("es-MX")} MXN</div>
            </div>
            <div className="rounded-2xl border border-brand-border bg-brand-bg/35 p-5">
              <div className="text-xs text-brand-muted">ROI estimado</div>
              <div className="mt-2 text-xl font-bold">{roi === null ? "—" : `${roi}%`}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


import { motion } from "framer-motion";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  location: string;
};

const testimonials: Testimonial[] = [
  {
    quote: "En el primer mes bajamos el tiempo de respuesta y dejamos de perder oportunidades. Hoy el pipeline está visible y medimos conversión por etapa.",
    name: "Mariana G.",
    role: "Directora Comercial",
    company: "Empresa B2B",
    location: "México",
  },
  {
    quote: "Conectamos operación y reportes. Reducimos retrabajo y ahora dirección ve métricas semanales sin depender de Excel.",
    name: "Luis R.",
    role: "CEO",
    company: "Retail",
    location: "Guadalajara",
  },
  {
    quote: "La automatización de seguimiento aumentó demos agendadas sin aumentar el equipo. El proceso se volvió consistente y medible.",
    name: "Ana P.",
    role: "Marketing Manager",
    company: "Servicios",
    location: "Monterrey",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonios" className="scroll-mt-[80px] bg-brand-bg text-brand-text py-24 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
          >
            Lo que dicen nuestros clientes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.06 }}
            className="mt-4 text-lg text-brand-muted"
          >
            Testimonios reales de equipos que hoy operan con más orden, seguimiento y visibilidad.
          </motion.p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={`${t.name}-${t.company}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              className="rounded-2xl border border-brand-border bg-brand-surface p-7"
            >
              <div className="text-base leading-relaxed text-brand-text">“{t.quote}”</div>
              <div className="mt-6 flex items-center justify-between gap-4">
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-brand-muted">
                    {t.role} · {t.company}
                  </div>
                </div>
                <div className="text-xs text-brand-muted">{t.location}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

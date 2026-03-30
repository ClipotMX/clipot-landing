import { motion } from "framer-motion";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import CalBookingModal from "@/components/CalBookingModal";
import { buildWhatsAppUrl, CLIPOT_PHONE_DISPLAY } from "@/config/contact";
import { track } from "@vercel/analytics";

const demoSchema = z.object({
  fullName: z.string().min(2, "Ingresa tu nombre completo"),
  company: z.string().min(2, "Ingresa tu empresa"),
  email: z.string().email("Correo inválido"),
  phone: z.string().min(7, "Teléfono inválido"),
  preferredDate: z.string().min(1, "Selecciona una fecha"),
  preferredTime: z.string().min(1, "Selecciona una hora"),
  message: z.string().optional(),
  consent: z.literal(true, { errorMap: () => ({ message: "Requerido" }) }),
});

type DemoValues = z.infer<typeof demoSchema>;

function buildMessage(values: DemoValues) {
  const lines = [
    "Hola Clipot, quiero agendar una demostración de Negocio Core.",
    "",
    `Nombre: ${values.fullName}`,
    `Empresa: ${values.company}`,
    `Correo: ${values.email}`,
    `Teléfono: ${values.phone}`,
    `Fecha preferida: ${values.preferredDate}`,
    `Hora preferida: ${values.preferredTime}`,
  ];
  const extra = (values.message || "").trim();
  if (extra) lines.push("", `Mensaje: ${extra}`);
  return lines.join("\n");
}

export default function DemoBookingSection() {
  const form = useForm<DemoValues>({
    resolver: zodResolver(demoSchema),
    defaultValues: {
      fullName: "",
      company: "",
      email: "",
      phone: "",
      preferredDate: "",
      preferredTime: "",
      message: "",
      consent: false,
    },
  });

  const onSubmit = (values: DemoValues) => {
    track("Demo Form Submitted", { channel: "whatsapp" });
    window.open(buildWhatsAppUrl(buildMessage(values)), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contacto" className="scroll-mt-[80px] bg-brand-bg text-brand-text py-28 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
          >
            Agenda una demostración
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.06 }}
            className="mt-5 text-lg text-brand-muted leading-relaxed"
          >
            Te mostramos cómo Negocio Core mejora tiempos, reduce errores y crea visibilidad real para dirección y operación.
            <span className="block mt-3">WhatsApp es el canal principal. Calendario en Cal.com disponible como alternativa.</span>
          </motion.p>

          <div className="mt-8 rounded-2xl border border-brand-border bg-brand-surface p-6">
            <div className="text-sm font-semibold">Contacto directo</div>
            <div className="mt-2 text-sm text-brand-muted">{CLIPOT_PHONE_DISPLAY}</div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.06 }}
          className="rounded-3xl border border-brand-border bg-brand-surface p-7"
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre completo</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Empresa</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Correo</FormLabel>
                      <FormControl>
                        <Input type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Teléfono</FormLabel>
                      <FormControl>
                        <Input type="tel" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="preferredDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Fecha preferida</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="preferredTime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Hora preferida</FormLabel>
                      <FormControl>
                        <Input type="time" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mensaje (opcional)</FormLabel>
                    <FormControl>
                      <Textarea rows={4} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="consent"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        checked={field.value}
                        onChange={(e) => field.onChange(e.target.checked)}
                        className="mt-1 h-4 w-4"
                      />
                      <div className="text-sm text-brand-muted">
                        Autorizo el contacto para coordinar la demostración y acepto el uso de mis datos conforme a nuestra política.
                      </div>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex flex-col sm:flex-row gap-3">
                <Button type="submit" className="h-11 w-full sm:w-auto">
                  Agendar demostración por WhatsApp
                </Button>
                <CalBookingModal
                  className="h-11 w-full sm:w-auto inline-flex items-center justify-center px-4 rounded-md border border-brand-border bg-brand-bg text-brand-text font-semibold hover:bg-brand-surface/60 transition-colors"
                  title="Agendar demostración (Cal.com)"
                >
                  Ver disponibilidad en Cal.com
                </CalBookingModal>
              </div>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  );
}

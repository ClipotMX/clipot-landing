import { motion } from "framer-motion";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button, buttonVariants } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import CalBookingModal from "@/components/CalBookingModal";
import { buildWhatsAppUrl, CLIPOT_PHONE_DISPLAY } from "@/config/contact";
import { track } from "@vercel/analytics";
import { cn } from "@/lib/utils";

const interests = [
  "Nucleus Lite - POS/Sistemas simples",
  "Nucleus Digital - CRM+ERP+Estrategia",
  "Nucleus Total - Escalabilidad total",
  "Auditoría de Preparación Digital",
  "Consultoría general",
  "Otro",
];

const demoSchema = z.object({
  fullName: z.string().min(2, "Ingresa tu nombre completo"),
  company: z.string().min(2, "Ingresa tu empresa"),
  email: z.string().email("Correo inválido"),
  phone: z.string().min(7, "Teléfono inválido"),
  interest: z.string().min(1, "Selecciona un interés"),
  preferredDate: z.string().min(1, "Selecciona una fecha"),
  preferredTime: z.string().min(1, "Selecciona una hora"),
  message: z.string().optional(),
  consent: z.boolean(),
});

type DemoValues = z.infer<typeof demoSchema>;

function buildMessage(values: DemoValues) {
  const lines = [
    "Hola Clipot, quiero agendar una Auditoría de Preparación Digital.",
    "",
    `Nombre: ${values.fullName}`,
    `Empresa: ${values.company}`,
    `Correo: ${values.email}`,
    `Teléfono: ${values.phone}`,
    `Interés: ${values.interest}`,
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
      interest: "",
      preferredDate: "",
      preferredTime: "",
      message: "",
      consent: false,
    },
  });

  const onSubmit = async (values: DemoValues) => {
    track("Demo Form Submitted", { channel: "whatsapp" });
    
    const apiKey = import.meta.env.VITE_AIRTABLE_API_KEY;
    const baseId = import.meta.env.VITE_AIRTABLE_BASE_ID;
    const tableName = import.meta.env.VITE_AIRTABLE_TABLE_NAME;
    
    if (apiKey && baseId && tableName) {
      try {
        const url = "https://api.airtable.com/v0/" + baseId + "/" + tableName;
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Authorization": "Bearer " + apiKey,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fields: {
              "Name": values.fullName,
              "Empresa": values.company,
              "Email": values.email,
              "Telefono": values.phone,
              "Interes": values.interest,
              "Fecha": values.preferredDate,
              "Hora": values.preferredTime,
              "Mensaje": values.message || "",
            },
          }),
        });
        if (!response.ok) {
          const errorData = await response.json();
          console.warn("Airtable warning (datos enviados igual):", errorData);
        } else {
          console.log("✓ Datos enviados a Airtable correctamente");
        }
      } catch (error) {
        console.warn("Airtable error (continuando...):", error);
      }
    }
    
    window.open(buildWhatsAppUrl(buildMessage(values)), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contacto" className="scroll-mt-[80px] bg-background text-foreground py-28 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div data-aos="fade-right">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight">
            Agenda una auditoría de preparación digital
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Evaluamos tu operación, riesgos de adopción y priorizamos un roadmap para estabilizar antes de escalar.
            <span className="block mt-3">WhatsApp es el canal principal. Calendario disponible como alternativa.</span>
          </p>

          <div className="mt-8 rounded-2xl border border-border bg-card p-6">
            <div className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-2">Contacto directo</div>
            <div className="text-lg font-semibold">{CLIPOT_PHONE_DISPLAY}</div>
          </div>
        </div>

        <div
          data-aos="fade-left"
          className="rounded-3xl border border-border bg-card p-7 hover-glow"
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

              <FormField
                control={form.control}
                name="interest"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>¿Qué te interesa?</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona una opción" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-card border-border">
                        {interests.map((interest) => (
                          <SelectItem key={interest} value={interest}>
                            {interest}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

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
                      <div className="text-sm text-muted-foreground">
                        Autorizo el contacto para coordinar la demostración y acepto el uso de mis datos conforme a nuestra política.
                      </div>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  type="button"
                  variant="default"
                  className="h-11 w-full sm:w-auto"
                  onClick={() => form.handleSubmit(onSubmit)()}
                >
                  Agenda tu Auditoría
                </Button>
                <Button type="submit" variant="outline" className="h-11 w-full sm:w-auto">
                  Enviar por WhatsApp
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
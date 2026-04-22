import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const LeadCapture = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      fields: {
        Nombre: formData.get("name"),
        Email: formData.get("email"),
        Telefono: formData.get("phone"),
        Interes: formData.get("interest"),
        Mensaje: formData.get("message"),
        Fecha: new Date().toISOString(),
      }
    };

    try {
      // Usar variables de entorno para Airtable
      const AIRTABLE_API_KEY = import.meta.env.VITE_AIRTABLE_API_KEY;
      const AIRTABLE_BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;
      const AIRTABLE_TABLE_NAME = import.meta.env.VITE_AIRTABLE_TABLE_NAME || "Leads";

      if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) {
        throw new Error("Airtable configuration missing");
      }

      const response = await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${AIRTABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send to Airtable");
      }

      toast.success("Mensaje enviado correctamente. Nos pondremos en contacto pronto.");
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error("Airtable Error:", error);
      // Fallback para que el usuario no se quede sin respuesta si no ha configurado las variables
      if (error instanceof Error && error.message === "Airtable configuration missing") {
        toast.info("Configuración de Airtable pendiente, pero simulamos envío exitoso.");
        setTimeout(() => {
          (e.target as HTMLFormElement).reset();
        }, 1000);
      } else {
        toast.error("Hubo un error al enviar el mensaje. Por favor intenta de nuevo.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div 
          className="max-w-4xl mx-auto glass-card rounded-3xl overflow-hidden flex flex-col md:flex-row"
          data-aos="zoom-in"
        >
          <div className="md:w-1/2 p-8 md:p-12 bg-primary flex flex-col justify-between">
            <div data-aos="fade-right" data-aos-delay="200">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-black mb-6 italic">
                Construyamos tu infraestructura digital.
              </h2>
              <p className="text-black/70 font-medium mb-8">
                Déjanos tus datos y un especialista en sistemas NUCLEUS se pondrá en contacto para una auditoría inicial.
              </p>
            </div>
            <div className="space-y-4" data-aos="fade-up" data-aos-delay="400">
              <div className="flex items-center gap-3 text-black font-mono text-sm">
                <span className="w-8 h-[1px] bg-black/30" />
                AUDITORÍA_SIN_COSTO
              </div>
              <div className="flex items-center gap-3 text-black font-mono text-sm">
                <span className="w-8 h-[1px] bg-black/30" />
                ESCALABILIDAD_GARANTIZADA
              </div>
            </div>
          </div>

          <div className="md:w-1/2 p-8 md:p-12" data-aos="fade-left" data-aos-delay="300">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Nombre Completo</label>
                <input
                  required
                  type="text"
                  name="name"
                  placeholder="Ej. Juan Pérez"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary transition-colors outline-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Teléfono</label>
                  <input
                    required
                    type="tel"
                    name="phone"
                    placeholder="+52 ..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary transition-colors outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Email</label>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="juan@empresa.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary transition-colors outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Interés Principal</label>
                <select
                  name="interest"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary transition-colors outline-none appearance-none"
                >
                  <option value="lite" className="bg-[#111114]">Nucleus Lite (POS / Sistemas Simples)</option>
                  <option value="digital" className="bg-[#111114]">Nucleus Digital (CRM + ERP + Pauta)</option>
                  <option value="total" className="bg-[#111114]">Nucleus Total (Escalamiento All-in-one)</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Mensaje / Desafío Actual</label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Cuéntanos brevemente qué proceso quieres optimizar..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary transition-colors outline-none resize-none"
                />
              </div>

              <button
                disabled={isSubmitting}
                type="submit"
                className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar Solicitud
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadCapture;

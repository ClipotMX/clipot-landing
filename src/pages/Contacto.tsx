import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { contactSchema, ContactFormValues } from "@/lib/contact-schema";
import SEO from "@/components/SEO";

const Contacto = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [csrfToken, setCsrfToken] = useState<string | null>(null);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/csrf-token", { credentials: "include" });
        const data = await res.json();
        if (data?.token) setCsrfToken(data.token);
      } catch {
        // ignore
      }
    })();
  }, []);

  const onSubmit = async (values: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(csrfToken ? { "X-CSRF-Token": csrfToken } : {}),
        },
        credentials: "include",
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (!res.ok || !data?.ok) {
        const msg =
          data?.errors?.join?.(", ") ||
          data?.error ||
          "No se pudo enviar el mensaje. Intenta nuevamente.";
        toast({ title: "Error", description: msg });
        return;
      }
      setIsSubmitted(true);
      toast({
        title: "¡Mensaje enviado!",
        description: "Te contactaremos en menos de 24 horas.",
      });
    } catch {
      toast({ title: "Error", description: "Error de red al enviar el formulario." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Contacto | Agencia de marketing digital en CDMX – Clipot"
        description="Contacto con Clipot, agencia de marketing digital en Ciudad de México (CDMX). Agenda una llamada y recibe una propuesta de generación y gestión de leads para tu negocio en México."
        keywords={[
          "contacto agencia de marketing digital cdmx",
          "agencia de marketing digital ciudad de méxico",
          "agencia de marketing méxico",
          "generación de leads cdmx",
          "agencia de leads cerca de mí",
          "paid media cdmx",
          "desarrollo web cdmx",
        ]}
      />
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-sm font-medium text-primary mb-4 block">CONTACTO</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="sr-only">Agencia de marketing digital</span>
              Hablemos de tu{" "}
              <span className="text-primary">proyecto</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Cuéntanos qué necesitas y te contactamos en menos de 24 horas 
              con una propuesta a medida.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-2"
              >
                <div className="bg-background rounded-3xl p-8 md:p-12">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
                      <h3 className="font-display text-2xl font-bold mb-4">
                        ¡Gracias por contactarnos!
                      </h3>
                      <p className="text-muted-foreground">
                        Hemos recibido tu mensaje. Un especialista te contactará 
                        en menos de 24 horas.
                      </p>
                    </div>
                  ) : (
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" noValidate>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Nombre *</FormLabel>
                                <FormControl>
                                  <Input type="text" placeholder="Tu nombre" className="h-12" {...field} />
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
                                  <Input type="text" placeholder="Nombre de tu empresa" className="h-12" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email *</FormLabel>
                                <FormControl>
                                  <Input type="email" placeholder="tu@email.com" className="h-12" {...field} />
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
                                  <Input type="tel" placeholder="+52 55 1234 5678" className="h-12" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="service"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>¿Qué servicio te interesa?</FormLabel>
                              <FormControl>
                                <select
                                  className="w-full h-12 px-4 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                                  {...field}
                                >
                                  <option value="">Selecciona una opción</option>
                                  <option value="leads">Generación de leads</option>
                                  <option value="gestion">Gestión de leads</option>
                                  <option value="paid">Paid Media</option>
                                  <option value="web">Desarrollo web</option>
                                  <option value="ecommerce">Ecommerce</option>
                                  <option value="crm">Implementación Kommo CRM</option>
                                  <option value="otro">Otro</option>
                                </select>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Cuéntanos sobre tu proyecto *</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="¿Qué problema quieres resolver? ¿Cuál es tu objetivo principal?"
                                  className="min-h-[150px] resize-none"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button
                          type="submit"
                          size="lg"
                          className="w-full md:w-auto"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            "Enviando..."
                          ) : (
                            <>
                              Enviar mensaje
                              <Send className="ml-2" size={18} />
                            </>
                          )}
                        </Button>
                      </form>
                    </Form>
                  )}
                </div>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h3 className="font-display text-xl font-semibold mb-6">
                    Información de contacto
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium mb-1">Email</p>
                        <a href="mailto:hola@clipot.com" className="text-muted-foreground hover:text-primary transition-colors">
                          hola@clipot.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium mb-1">Teléfono</p>
                        <a href="tel:+525512345678" className="text-muted-foreground hover:text-primary transition-colors">
                          +52 55 1234 5678
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium mb-1">Ubicación</p>
                        <p className="text-muted-foreground">
                          Ciudad de México, MX
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/10 rounded-2xl p-6">
                  <h4 className="font-display font-semibold mb-3">
                    ¿Prefieres una llamada?
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Agenda una llamada de 15 minutos directamente en nuestro calendario.
                  </p>
                  <Button variant="outline" className="w-full">
                    Agendar llamada
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Contacto;

"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
var Header_1 = require("@/components/Header");
var Footer_1 = require("@/components/Footer");
var ChatWidget_1 = require("@/components/ChatWidget");
var CTA_1 = require("@/components/CTA");
var framer_motion_1 = require("framer-motion");
var button_1 = require("@/components/ui/button");
var lucide_react_1 = require("lucide-react");
var services_1 = require("@/data/services");
var accordion_1 = require("@/components/ui/accordion");
var SEO_1 = require("@/components/SEO");
var ServicioDetalle = function () {
    var slug = react_router_dom_1.useParams().slug;
    var service = services_1.getServiceBySlug(slug || "");
    if (!service) {
        return React.createElement(react_router_dom_1.Navigate, { to: "/servicios", replace: true });
    }
    var Icon = service.icon;
    return (React.createElement("div", { className: "min-h-screen" },
        React.createElement(SEO_1["default"], { title: service.title + " | Agencia de marketing digital \u2013 Clipot", description: service.description, keywords: [service.title, "servicios de marketing digital", "generación de leads"], type: "article", canonical: typeof window !== "undefined" ? window.location.origin + "/servicios/" + service.slug : undefined }),
        React.createElement(Header_1["default"], null),
        React.createElement("section", { className: "pt-32 pb-20 bg-background" },
            React.createElement("div", { className: "container mx-auto px-4" },
                React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, className: "max-w-4xl mx-auto" },
                    React.createElement(react_router_dom_1.Link, { to: "/servicios", className: "inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6 transition-colors" },
                        React.createElement(lucide_react_1.ArrowLeft, { size: 16, className: "mr-2" }),
                        "Volver a servicios"),
                    React.createElement("div", { className: "flex items-start gap-6 mb-8" },
                        React.createElement("div", { className: "w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0" },
                            React.createElement(Icon, { className: "w-8 h-8 text-primary" })),
                        React.createElement("div", null,
                            React.createElement("h1", { className: "font-display text-4xl md:text-5xl font-bold mb-4" }, service.title),
                            React.createElement("p", { className: "text-xl text-primary font-medium" }, service.tagline))),
                    React.createElement("p", { className: "text-lg text-muted-foreground leading-relaxed mb-8" }, service.description),
                    React.createElement("div", { className: "flex flex-wrap gap-3 mb-10" }, service.features.map(function (feature) { return (React.createElement("span", { key: feature, className: "px-4 py-2 bg-muted rounded-full text-sm font-medium" }, feature)); })),
                    React.createElement(button_1.Button, { asChild: true, size: "lg" },
                        React.createElement(react_router_dom_1.Link, { to: "/contacto" },
                            "Solicitar cotizaci\u00F3n",
                            React.createElement(lucide_react_1.ArrowRight, { className: "ml-2", size: 18 })))))),
        React.createElement("section", { className: "py-12 bg-muted" },
            React.createElement("div", { className: "container mx-auto px-4" },
                React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, scale: 0.98 }, whileInView: { opacity: 1, scale: 1 }, viewport: { once: true }, className: "max-w-4xl mx-auto" },
                    React.createElement("img", { src: service.image, alt: service.title, className: "w-full aspect-video object-cover rounded-3xl" })))),
        React.createElement("section", { className: "py-20 bg-background" },
            React.createElement("div", { className: "container mx-auto px-4" },
                React.createElement("div", { className: "max-w-4xl mx-auto" },
                    React.createElement(framer_motion_1.motion.h2, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, className: "font-display text-3xl md:text-4xl font-bold mb-12 text-center" }, "\u00BFPor qu\u00E9 elegirnos?"),
                    React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6" }, service.benefits.map(function (benefit, index) { return (React.createElement(framer_motion_1.motion.div, { key: benefit, initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { delay: index * 0.1 }, className: "flex items-start gap-4 p-6 bg-muted rounded-2xl shadow-sm" },
                        React.createElement(lucide_react_1.CheckCircle, { className: "w-6 h-6 text-primary flex-shrink-0 mt-0.5" }),
                        React.createElement("span", { className: "font-medium" }, benefit))); }))))),
        React.createElement("section", { className: "py-20 bg-muted" },
            React.createElement("div", { className: "container mx-auto px-4" },
                React.createElement("div", { className: "max-w-4xl mx-auto" },
                    React.createElement(framer_motion_1.motion.h2, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, className: "font-display text-3xl md:text-4xl font-bold mb-12 text-center" }, "Nuestro proceso"),
                    React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8" }, service.process.map(function (step, index) { return (React.createElement(framer_motion_1.motion.div, { key: step.step, initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { delay: index * 0.1 }, className: "bg-background p-8 rounded-2xl" },
                        React.createElement("span", { className: "text-4xl font-display font-bold text-primary/30" }, step.step),
                        React.createElement("h3", { className: "font-display text-xl font-semibold mt-2 mb-3" }, step.title),
                        React.createElement("p", { className: "text-muted-foreground" }, step.description))); }))))),
        React.createElement("section", { className: "py-20 bg-background" },
            React.createElement("div", { className: "container mx-auto px-4" },
                React.createElement("div", { className: "max-w-3xl mx-auto" },
                    React.createElement(framer_motion_1.motion.h2, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, className: "font-display text-3xl md:text-4xl font-bold mb-12 text-center" }, "Preguntas frecuentes"),
                    React.createElement(accordion_1.Accordion, { type: "single", collapsible: true, className: "space-y-4" }, service.faqs.map(function (faq, index) { return (React.createElement(accordion_1.AccordionItem, { key: index, value: "item-" + index, className: "bg-muted rounded-2xl px-6 border-none" },
                        React.createElement(accordion_1.AccordionTrigger, { className: "text-left font-display font-semibold hover:no-underline py-6" }, faq.question),
                        React.createElement(accordion_1.AccordionContent, { className: "text-muted-foreground pb-6" }, faq.answer))); }))))),
        React.createElement("section", { className: "py-20 bg-muted" },
            React.createElement("div", { className: "container mx-auto px-4" },
                React.createElement("div", { className: "max-w-4xl mx-auto" },
                    React.createElement("h2", { className: "font-display text-2xl font-bold mb-8 text-center" }, "Otros servicios"),
                    React.createElement("div", { className: "flex flex-wrap justify-center gap-4" }, services_1.services
                        .filter(function (s) { return s.slug !== slug; })
                        .map(function (s) { return (React.createElement(react_router_dom_1.Link, { key: s.slug, to: "/servicios/" + s.slug, className: "px-6 py-3 bg-background rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors" }, s.title)); }))))),
        React.createElement(CTA_1["default"], null),
        React.createElement(Footer_1["default"], null),
        React.createElement(ChatWidget_1["default"], null)));
};
exports["default"] = ServicioDetalle;

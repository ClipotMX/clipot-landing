"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
var Header_1 = require("@/components/Header");
var Footer_1 = require("@/components/Footer");
var ChatWidget_1 = require("@/components/ChatWidget");
var framer_motion_1 = require("framer-motion");
var button_1 = require("@/components/ui/button");
var lucide_react_1 = require("lucide-react");
var SEO_1 = require("@/components/SEO");
var features = [
    {
        icon: lucide_react_1.MessageSquare,
        title: "Todos tus canales en uno",
        description: "WhatsApp, Instagram, Facebook, Email y más. Todo centralizado en una sola bandeja de entrada."
    },
    {
        icon: lucide_react_1.Zap,
        title: "Automatización inteligente",
        description: "Flujos automatizados que responden, califican y asignan leads sin intervención manual."
    },
    {
        icon: lucide_react_1.Users,
        title: "Gestión de equipo",
        description: "Asigna leads a vendedores, mide rendimiento y optimiza tu proceso de ventas."
    },
    {
        icon: lucide_react_1.BarChart,
        title: "Analytics en tiempo real",
        description: "Dashboards con métricas que importan: leads, conversiones, tiempos de respuesta."
    },
];
var benefits = [
    "Implementación guiada por expertos",
    "Migración de datos sin pérdida",
    "Capacitación para tu equipo",
    "Soporte prioritario como partners",
    "Integraciones personalizadas",
    "Automatizaciones a medida",
];
var Kommo = function () {
    return (React.createElement("div", { className: "min-h-screen" },
        React.createElement(SEO_1["default"], { title: "Implementaci\u00F3n Kommo CRM | Agencia de marketing digital \u2013 Clipot", description: "Implementamos Kommo CRM para centralizar tus canales, automatizar y gestionar leads. Partners oficiales para integraciones y soporte.", keywords: ["Kommo CRM", "implementación CRM", "agencia marketing digital", "gestión de leads"] }),
        React.createElement(Header_1["default"], null),
        React.createElement("section", { className: "pt-32 pb-20 bg-background" },
            React.createElement("div", { className: "container mx-auto px-4" },
                React.createElement("div", { className: "max-w-4xl mx-auto" },
                    React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, className: "text-center" },
                        React.createElement("span", { className: "inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6" }, "Partners Oficiales"),
                        React.createElement("h1", { className: "font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6" },
                            React.createElement("span", { className: "sr-only" }, "Agencia de marketing digital"),
                            "Kommo CRM"),
                        React.createElement("p", { className: "text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10" }, "Centralice canales, automatice calificaci\u00F3n y mida tiempos de respuesta. Implementamos Kommo para acelerar pipeline y mejorar conversi\u00F3n con reporting ejecutivo."),
                        React.createElement("div", { className: "flex flex-col sm:flex-row gap-4 justify-center" },
                            React.createElement(button_1.Button, { asChild: true, size: "lg" },
                                React.createElement(react_router_dom_1.Link, { to: "/contacto" },
                                    "Solicitar demo",
                                    React.createElement(lucide_react_1.ArrowRight, { className: "ml-2", size: 18 }))),
                            React.createElement(button_1.Button, { asChild: true, variant: "outline", size: "lg" },
                                React.createElement("a", { href: "https://www.kommo.com", target: "_blank", rel: "noopener noreferrer" }, "Conocer Kommo"))))))),
        React.createElement("section", { className: "py-20 bg-muted" },
            React.createElement("div", { className: "container mx-auto px-4" },
                React.createElement(framer_motion_1.motion.h2, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, className: "font-display text-3xl md:text-4xl font-bold text-center mb-16" }, "\u00BFPor qu\u00E9 Kommo?"),
                React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto" }, features.map(function (feature, index) { return (React.createElement(framer_motion_1.motion.div, { key: feature.title, initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { delay: index * 0.1 }, className: "bg-background p-8 rounded-2xl" },
                    React.createElement(feature.icon, { className: "w-10 h-10 text-primary mb-4" }),
                    React.createElement("h3", { className: "font-display text-xl font-semibold mb-3" }, feature.title),
                    React.createElement("p", { className: "text-muted-foreground" }, feature.description))); })))),
        React.createElement("section", { className: "py-20 bg-background" },
            React.createElement("div", { className: "container mx-auto px-4" },
                React.createElement("div", { className: "max-w-4xl mx-auto" },
                    React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" },
                        React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, x: -30 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true } },
                            React.createElement("h2", { className: "font-display text-3xl md:text-4xl font-bold mb-6" }, "\u00BFPor qu\u00E9 implementar con Clipot?"),
                            React.createElement("p", { className: "text-lg text-muted-foreground mb-8" }, "Como partners oficiales de Kommo, no solo conocemos la herramienta por dentro y por fuera, sino que la usamos todos los d\u00EDas para gestionar leads de nuestros clientes."),
                            React.createElement(button_1.Button, { asChild: true, size: "lg" },
                                React.createElement(react_router_dom_1.Link, { to: "/contacto" },
                                    "Agendar llamada",
                                    React.createElement(lucide_react_1.ArrowRight, { className: "ml-2", size: 18 })))),
                        React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, x: 30 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true } },
                            React.createElement("div", { className: "bg-muted rounded-2xl p-8" },
                                React.createElement("h3", { className: "font-display text-xl font-semibold mb-6" }, "Lo que incluye"),
                                React.createElement("ul", { className: "space-y-4" }, benefits.map(function (benefit) { return (React.createElement("li", { key: benefit, className: "flex items-center gap-3" },
                                    React.createElement(lucide_react_1.CheckCircle, { className: "w-5 h-5 text-primary flex-shrink-0" }),
                                    React.createElement("span", null, benefit))); })))))))),
        React.createElement(Footer_1["default"], null),
        React.createElement(ChatWidget_1["default"], null)));
};
exports["default"] = Kommo;

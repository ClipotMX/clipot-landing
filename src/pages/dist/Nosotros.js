"use strict";
exports.__esModule = true;
var Header_1 = require("@/components/Header");
var Footer_1 = require("@/components/Footer");
var ChatWidget_1 = require("@/components/ChatWidget");
var CTA_1 = require("@/components/CTA");
var framer_motion_1 = require("framer-motion");
var lucide_react_1 = require("lucide-react");
var SEO_1 = require("@/components/SEO");
var values = [
    {
        icon: lucide_react_1.Target,
        title: "Resultados primero",
        description: "No medimos nuestro éxito por impresiones o clics. Lo medimos por leads calificados y ventas cerradas."
    },
    {
        icon: lucide_react_1.Zap,
        title: "Velocidad",
        description: "En el mundo digital, cada segundo cuenta. Respondemos rápido y ejecutamos más rápido."
    },
    {
        icon: lucide_react_1.Heart,
        title: "Transparencia",
        description: "Sin letra pequeña, sin sorpresas. Reportes claros y comunicación directa siempre."
    },
];
var Nosotros = function () {
    return (React.createElement("div", { className: "min-h-screen" },
        React.createElement(SEO_1["default"], { title: "Agencia de marketing digital especializada en leads | Clipot", description: "Conoce a Clipot: especialistas en generaci\u00F3n y gesti\u00F3n de leads. Transparencia, velocidad y resultados para tu negocio.", keywords: ["agencia marketing digital", "generación de leads", "gestión de leads", "transparencia", "resultados"] }),
        React.createElement(Header_1["default"], null),
        React.createElement("section", { className: "pt-32 pb-20 bg-background" },
            React.createElement("div", { className: "container mx-auto px-4" },
                React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, className: "max-w-3xl mx-auto text-center" },
                    React.createElement("span", { className: "text-sm font-medium text-primary mb-4 block" }, "NOSOTROS"),
                    React.createElement("h1", { className: "font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6" },
                        React.createElement("span", { className: "sr-only" }, "Agencia de marketing digital"),
                        "Sabemos de leads porque",
                        " ",
                        React.createElement("span", { className: "text-primary" }, "solo hacemos eso")),
                    React.createElement("p", { className: "text-xl text-muted-foreground leading-relaxed" }, "Trabajamos con equipos de ventas y direcci\u00F3n para reducir CAC y acelerar el cierre. Generamos oportunidades y gestionamos el flujo para maximizar ingresos.")))),
        React.createElement("section", { className: "py-20 bg-muted" },
            React.createElement("div", { className: "container mx-auto px-4" },
                React.createElement("div", { className: "max-w-3xl mx-auto" },
                    React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } },
                        React.createElement("h2", { className: "font-display text-3xl md:text-4xl font-bold mb-8" }, "Nuestra historia"),
                        React.createElement("div", { className: "space-y-6 text-lg text-muted-foreground leading-relaxed" },
                            React.createElement("p", null, "Empezamos como muchos: frustrados. Ve\u00EDamos c\u00F3mo agencias promet\u00EDan resultados incre\u00EDbles y entregaban reportes llenos de m\u00E9tricas que no significaban nada para el negocio."),
                            React.createElement("p", null, "Leads sin responder. Oportunidades perdidas. Inversi\u00F3n desperdiciada."),
                            React.createElement("p", null, "Decidimos hacer las cosas diferente. No solo generamos leads, los gestionamos. Porque de nada sirve tener 100 leads si no puedes atenderlos a tiempo."),
                            React.createElement("p", { className: "font-semibold text-foreground" }, "Hoy, m\u00E1s de 150 empresas conf\u00EDan en nosotros para hacer crecer sus ventas. Y seguimos creciendo.")))))),
        React.createElement("section", { className: "py-20 bg-background" },
            React.createElement("div", { className: "container mx-auto px-4" },
                React.createElement(framer_motion_1.motion.h2, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, className: "font-display text-3xl md:text-4xl font-bold text-center mb-16" }, "Lo que nos mueve"),
                React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto" }, values.map(function (value, index) { return (React.createElement(framer_motion_1.motion.div, { key: value.title, initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { delay: index * 0.1 }, className: "text-center" },
                    React.createElement(value.icon, { className: "w-12 h-12 text-primary mx-auto mb-4" }),
                    React.createElement("h3", { className: "font-display text-xl font-semibold mb-3" }, value.title),
                    React.createElement("p", { className: "text-muted-foreground" }, value.description))); })))),
        React.createElement(CTA_1["default"], null),
        React.createElement(Footer_1["default"], null),
        React.createElement(ChatWidget_1["default"], null)));
};
exports["default"] = Nosotros;

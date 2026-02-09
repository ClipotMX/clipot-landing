"use strict";
exports.__esModule = true;
var Header_1 = require("@/components/Header");
var Footer_1 = require("@/components/Footer");
var framer_motion_1 = require("framer-motion");
var SEO_1 = require("@/components/SEO");
var Privacidad = function () {
    return (React.createElement("div", { className: "min-h-screen" },
        React.createElement(SEO_1["default"], { title: "Pol\u00EDtica de privacidad | Clipot", description: "Consulta nuestra pol\u00EDtica de privacidad y c\u00F3mo protegemos tus datos en Clipot.", keywords: ["política de privacidad", "protección de datos", "Clipot"] }),
        React.createElement(Header_1["default"], null),
        React.createElement("section", { className: "pt-32 pb-16 bg-background" },
            React.createElement("div", { className: "container mx-auto px-4" },
                React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, className: "max-w-3xl mx-auto" },
                    React.createElement("h1", { className: "font-display text-3xl md:text-4xl font-bold mb-6" }, "Pol\u00EDtica de Privacidad"),
                    React.createElement("p", { className: "text-muted-foreground mb-4" }, "Tu privacidad es importante para nosotros. Esta pol\u00EDtica describe qu\u00E9 datos recopilamos, c\u00F3mo los usamos y tus derechos como usuario."),
                    React.createElement("div", { className: "space-y-4 text-sm leading-relaxed text-muted-foreground" },
                        React.createElement("p", null, "\u2022 Recopilamos datos de contacto y uso del sitio para mejorar tu experiencia."),
                        React.createElement("p", null, "\u2022 No compartimos tus datos con terceros sin tu consentimiento."),
                        React.createElement("p", null, "\u2022 Puedes solicitar acceso, rectificaci\u00F3n o eliminaci\u00F3n de tus datos."),
                        React.createElement("p", null, "\u2022 Para cualquier consulta, cont\u00E1ctanos en hola@clipot.com."))))),
        React.createElement(Footer_1["default"], null)));
};
exports["default"] = Privacidad;

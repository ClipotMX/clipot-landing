"use strict";
exports.__esModule = true;
var Header_1 = require("@/components/Header");
var Footer_1 = require("@/components/Footer");
var framer_motion_1 = require("framer-motion");
var SEO_1 = require("@/components/SEO");
var Terminos = function () {
    return (React.createElement("div", { className: "min-h-screen" },
        React.createElement(SEO_1["default"], { title: "T\u00E9rminos y condiciones | Clipot", description: "Lee los t\u00E9rminos y condiciones de uso del sitio de Clipot.", keywords: ["términos y condiciones", "uso del sitio", "Clipot"] }),
        React.createElement(Header_1["default"], null),
        React.createElement("section", { className: "pt-32 pb-16 bg-background" },
            React.createElement("div", { className: "container mx-auto px-4" },
                React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, className: "max-w-3xl mx-auto" },
                    React.createElement("h1", { className: "font-display text-3xl md:text-4xl font-bold mb-6" }, "T\u00E9rminos y Condiciones"),
                    React.createElement("p", { className: "text-muted-foreground mb-4" }, "Al utilizar este sitio, aceptas los siguientes t\u00E9rminos y condiciones."),
                    React.createElement("div", { className: "space-y-4 text-sm leading-relaxed text-muted-foreground" },
                        React.createElement("p", null, "\u2022 El contenido del sitio es informativo y puede cambiar sin aviso."),
                        React.createElement("p", null, "\u2022 No garantizamos la disponibilidad continua del servicio."),
                        React.createElement("p", null, "\u2022 El uso del sitio debe cumplir con las leyes aplicables."))))),
        React.createElement(Footer_1["default"], null)));
};
exports["default"] = Terminos;

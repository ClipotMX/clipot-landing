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
var SEO_1 = require("@/components/SEO");
var services = [
    {
        icon: lucide_react_1.Target,
        title: "Paid Media",
        description: "Campañas de publicidad digital en Meta, Google, TikTok y LinkedIn. Optimizadas para generar leads de calidad, no solo clics.",
        features: ["Meta Ads", "Google Ads", "TikTok Ads", "LinkedIn Ads", "Remarketing", "A/B Testing"]
    },
    {
        icon: lucide_react_1.Palette,
        title: "Diseño Digital",
        description: "Creativos que convierten. Desde banners hasta landing pages, todo diseñado para captar atención y generar acción.",
        features: ["Diseño de anuncios", "Landing pages", "Branding digital", "Motion graphics", "UX/UI", "Presentaciones"]
    },
    {
        icon: lucide_react_1.Globe,
        title: "Desarrollo Web",
        description: "Sitios web optimizados para conversión. Rápidos, responsivos y diseñados para guiar al usuario hacia la acción.",
        features: ["Sitios corporativos", "Landing pages", "Optimización SEO", "Velocidad", "Analytics", "Integraciones"]
    },
    {
        icon: lucide_react_1.ShoppingCart,
        title: "Ecommerce",
        description: "Tiendas online que venden. Desde el setup inicial hasta la optimización continua de tu catálogo y proceso de compra.",
        features: ["Shopify", "WooCommerce", "Optimización checkout", "Catálogo", "Pasarelas de pago", "Logística"]
    },
    {
        icon: lucide_react_1.Users,
        title: "Community Management",
        description: "Gestión profesional de tus redes sociales. Construimos comunidad, respondemos comentarios y generamos engagement.",
        features: ["Instagram", "Facebook", "TikTok", "LinkedIn", "Moderación", "Reportes mensuales"]
    },
    {
        icon: lucide_react_1.Video,
        title: "Content Creation",
        description: "Contenido que engancha y convierte. Fotografía de producto, video para redes y copywriting estratégico.",
        features: ["Fotografía", "Video", "Reels", "Copywriting", "Guiones", "Edición"]
    },
    {
        icon: lucide_react_1.Sparkles,
        title: "UGC Campaigns",
        description: "Contenido generado por usuarios reales. Auténtico, creíble y con alto engagement para tus campañas.",
        features: ["Red de creadores", "Brief creativo", "Producción", "Derechos de uso", "Optimización", "Reportes"]
    },
];
var Servicios = function () {
    return (React.createElement("div", { className: "min-h-screen" },
        React.createElement(SEO_1["default"], { title: "Servicios de marketing digital | Paid media, desarrollo web, SEO \u2013 Clipot", description: "Servicios de agencia de marketing digital: paid media, dise\u00F1o, desarrollo web, ecommerce, community y contenidos. Estrategias enfocadas en conversi\u00F3n.", keywords: ["servicios marketing digital", "paid media", "desarrollo web", "seo", "ecommerce", "community management"] }),
        React.createElement(Header_1["default"], null),
        React.createElement("section", { className: "pt-32 pb-20 bg-background" },
            React.createElement("div", { className: "container mx-auto px-4" },
                React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, className: "max-w-3xl mx-auto text-center" },
                    React.createElement("span", { className: "text-sm font-medium text-primary mb-4 block" }, "SERVICIOS"),
                    React.createElement("h1", { className: "font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6" },
                        React.createElement("span", { className: "sr-only" }, "Servicios de agencia de marketing digital"),
                        "Soluciones que",
                        " ",
                        React.createElement("span", { className: "text-primary" }, "funcionan")),
                    React.createElement("p", { className: "text-xl text-muted-foreground leading-relaxed" }, "Dise\u00F1amos estrategias a medida para decisores de negocio: objetivos claros, m\u00E9tricas accionables y retorno demostrable.")))),
        React.createElement("section", { className: "py-20 bg-muted" },
            React.createElement("div", { className: "container mx-auto px-4" },
                React.createElement("div", { className: "space-y-12" }, services.map(function (service, index) { return (React.createElement(framer_motion_1.motion.div, { key: service.title, initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { delay: index * 0.05 }, className: "bg-background rounded-3xl p-8 md:p-12 shadow-sm ring-1 ring-border" },
                    React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 items-start" },
                        React.createElement("div", null,
                            React.createElement(service.icon, { className: "w-12 h-12 text-primary mb-4" }),
                            React.createElement("h2", { className: "font-display text-2xl md:text-3xl font-bold mb-4" }, service.title),
                            React.createElement("p", { className: "text-lg text-muted-foreground mb-6" }, service.description),
                            React.createElement(button_1.Button, { asChild: true },
                                React.createElement(react_router_dom_1.Link, { to: "/servicios/" + service.title.toLowerCase().replace(/ /g, '-') },
                                    "Ver m\u00E1s",
                                    React.createElement(lucide_react_1.ArrowRight, { className: "ml-2", size: 18 })))),
                        React.createElement("div", null,
                            React.createElement("p", { className: "text-sm font-medium text-muted-foreground mb-4" }, "Incluye:"),
                            React.createElement("div", { className: "grid grid-cols-2 gap-3" }, service.features.map(function (feature) { return (React.createElement("div", { key: feature, className: "flex items-center gap-2" },
                                React.createElement(lucide_react_1.CheckCircle, { className: "w-4 h-4 text-primary flex-shrink-0" }),
                                React.createElement("span", { className: "text-sm" }, feature))); })))))); })))),
        React.createElement(CTA_1["default"], null),
        React.createElement(Footer_1["default"], null),
        React.createElement(ChatWidget_1["default"], null)));
};
exports["default"] = Servicios;

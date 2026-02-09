"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
var lucide_react_1 = require("lucide-react");
var button_1 = require("@/components/ui/button");
var react_1 = require("swiper/react");
var modules_1 = require("swiper/modules");
require("swiper/css");
require("swiper/css/pagination");
require("swiper/css/navigation");
var slides = [
    {
        title: "¿Su equipo comercial necesita más",
        highlight: "clientes calificados",
        subtitle: "Activamos campañas y gestionamos leads para que sus vendedores dediquen tiempo a cerrar. Menor CAC, mayor tasa de cierre.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        cta: "Solicitar plan de inversión"
    },
    {
        title: "¿Su ecommerce no está",
        highlight: "rentabilizando",
        subtitle: "Optimizamos adquisición y checkout para mejorar conversión y ticket promedio. Implementación ágil con reporting ejecutivo.",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
        cta: "Optimizar mi tienda"
    },
    {
        title: "¿Leads que no reciben",
        highlight: "respuesta oportuna",
        subtitle: "Respondemos y calificamos en minutos, con flujos y CRM integrados. Más velocidad, más reuniones, más ingresos.",
        image: "https://images.unsplash.com/photo-1552581234-26160f608093?w=800&h=600&fit=crop",
        cta: "Mejorar gestión de leads"
    },
];
var Hero = function () {
    return (React.createElement("section", { className: "min-h-screen flex items-center pt-20 bg-background overflow-hidden" },
        React.createElement("div", { className: "container mx-auto px-4" },
            React.createElement(react_1.Swiper, { modules: [modules_1.Autoplay, modules_1.Pagination, modules_1.Navigation], autoplay: {
                    delay: 5000,
                    disableOnInteraction: false
                }, pagination: {
                    clickable: true,
                    el: ".hero-pagination"
                }, navigation: {
                    prevEl: ".hero-prev",
                    nextEl: ".hero-next"
                }, loop: true, speed: 600, slidesPerView: 1, spaceBetween: 0, className: "w-full hero-swiper" }, slides.map(function (slide, index) { return (React.createElement(react_1.SwiperSlide, { key: index, className: "!h-auto" },
                React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh] py-8" },
                    React.createElement("div", { className: "order-2 lg:order-1" },
                        React.createElement("span", { className: "inline-block px-4 py-2 bg-muted rounded-full text-sm font-medium text-muted-foreground mb-6" }, "Partners oficiales de Kommo CRM"),
                        React.createElement("h1", { className: "font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" },
                            React.createElement("span", { className: "sr-only" }, "Agencia de marketing digital"),
                            slide.title,
                            " ",
                            React.createElement("span", { className: "text-primary" }, slide.highlight),
                            "?"),
                        React.createElement("p", { className: "text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed" }, slide.subtitle),
                        React.createElement("div", { className: "flex flex-col sm:flex-row gap-4" },
                            React.createElement(button_1.Button, { asChild: true, size: "lg", className: "text-base px-8" },
                                React.createElement(react_router_dom_1.Link, { to: "/contacto" },
                                    slide.cta,
                                    React.createElement(lucide_react_1.ArrowRight, { className: "ml-2", size: 18 }))),
                            React.createElement(button_1.Button, { asChild: true, variant: "outline", size: "lg", className: "text-base px-8" },
                                React.createElement(react_router_dom_1.Link, { to: "/servicios" }, "Ver servicios")))),
                    React.createElement("div", { className: "order-1 lg:order-2" },
                        React.createElement("div", { className: "relative" },
                            React.createElement("div", { className: "aspect-[4/3] rounded-3xl overflow-hidden" },
                                React.createElement("img", { src: slide.image, alt: slide.title, className: "w-full h-full object-cover" })),
                            React.createElement("div", { className: "absolute -z-10 top-8 right-8 w-full h-full rounded-3xl bg-primary/10" })))))); })),
            React.createElement("div", { className: "flex items-center justify-center gap-6 mt-4" },
                React.createElement("button", { className: "hero-prev w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors cursor-pointer", "aria-label": "Slide anterior" },
                    React.createElement(lucide_react_1.ChevronLeft, { size: 24, className: "text-foreground" })),
                React.createElement("div", { className: "hero-pagination flex gap-2" }),
                React.createElement("button", { className: "hero-next w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors cursor-pointer", "aria-label": "Siguiente slide" },
                    React.createElement(lucide_react_1.ChevronRight, { size: 24, className: "text-foreground" }))))));
};
exports["default"] = Hero;

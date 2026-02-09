"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
var lucide_react_1 = require("lucide-react");
var ScrollReveal_1 = require("./ScrollReveal");
var services_1 = require("@/data/services");
var Services = function () {
    return (React.createElement("section", { className: "py-24 bg-muted" },
        React.createElement("div", { className: "container mx-auto px-4" },
            React.createElement("div", { className: "max-w-3xl mx-auto text-center mb-16" },
                React.createElement(ScrollReveal_1["default"], null,
                    React.createElement("span", { className: "text-sm font-medium text-primary mb-4 block" }, "SERVICIOS")),
                React.createElement(ScrollReveal_1["default"], { delay: 0.1 },
                    React.createElement("h2", { className: "font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6" }, "Todo lo que necesitas para escalar")),
                React.createElement(ScrollReveal_1["default"], { delay: 0.2 },
                    React.createElement("p", { className: "text-lg text-muted-foreground" }, "No vendemos humo. Trabajamos con lo que funciona."))),
            React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" }, services_1.services.map(function (service, index) { return (React.createElement(ScrollReveal_1["default"], { key: service.title, delay: index * 0.1 },
                React.createElement("div", { className: "bg-background p-8 rounded-2xl shadow-sm ring-1 ring-border hover:shadow-md transition-shadow group cursor-pointer h-full" },
                    React.createElement(service.icon, { className: "w-10 h-10 text-primary mb-4" }),
                    React.createElement("h3", { className: "font-display text-xl font-semibold mb-1" }, service.title),
                    React.createElement("p", { className: "text-primary text-sm font-medium mb-2" }, service.tagline),
                    React.createElement("p", { className: "text-muted-foreground text-sm leading-relaxed mb-4" }, service.description),
                    React.createElement(react_router_dom_1.Link, { to: "/servicios/" + service.slug, className: "inline-flex items-center text-sm font-medium text-primary group-hover:gap-2 transition-all" },
                        "M\u00E1s info",
                        React.createElement(lucide_react_1.ArrowRight, { size: 16, className: "ml-1 opacity-0 group-hover:opacity-100 transition-opacity" }))))); })))));
};
exports["default"] = Services;

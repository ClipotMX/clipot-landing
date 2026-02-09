"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
var Header_1 = require("@/components/Header");
var Footer_1 = require("@/components/Footer");
var ChatWidget_1 = require("@/components/ChatWidget");
var framer_motion_1 = require("framer-motion");
var lucide_react_1 = require("lucide-react");
var SEO_1 = require("@/components/SEO");
var react_1 = require("react");
var supabase_js_1 = require("@supabase/supabase-js");
var Blog = function () {
    var _a = react_1.useState([]), posts = _a[0], setPosts = _a[1];
    react_1.useEffect(function () {
        (function () { return __awaiter(void 0, void 0, void 0, function () {
            var url, anon, supabase, _a, data, error, res, json, _b;
            var _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _e.trys.push([0, 5, , 6]);
                        url = (_c = import.meta.env) === null || _c === void 0 ? void 0 : _c.VITE_SUPABASE_URL;
                        anon = (_d = import.meta.env) === null || _d === void 0 ? void 0 : _d.VITE_SUPABASE_ANON_KEY;
                        if (!(url && anon)) return [3 /*break*/, 2];
                        supabase = supabase_js_1.createClient(url, anon);
                        return [4 /*yield*/, supabase
                                .from("blog_posts")
                                .select("title, slug, image, category, read_time, ts, content, status, publish_at")
                                .eq("status", "published")
                                .lte("publish_at", new Date().toISOString() || new Date(0).toISOString())];
                    case 1:
                        _a = _e.sent(), data = _a.data, error = _a.error;
                        if (!error && data) {
                            setPosts(data.map(function (p) { return ({
                                title: p.title,
                                slug: p.slug,
                                image: p.image,
                                category: p.category || "Blog",
                                readTime: p.read_time || "5 min",
                                excerpt: String(p.content || "").replace(/<[^>]+>/g, "").slice(0, 220)
                            }); }));
                            return [2 /*return*/];
                        }
                        _e.label = 2;
                    case 2: return [4 /*yield*/, fetch("http://localhost:3001/api/public/posts")];
                    case 3:
                        res = _e.sent();
                        return [4 /*yield*/, res.json()];
                    case 4:
                        json = _e.sent();
                        if (json === null || json === void 0 ? void 0 : json.ok)
                            setPosts(json.items || []);
                        return [3 /*break*/, 6];
                    case 5:
                        _b = _e.sent();
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        }); })();
    }, []);
    return (React.createElement("div", { className: "min-h-screen" },
        React.createElement(SEO_1["default"], { title: "Blog de marketing digital | Leads, paid media y CRM \u2013 Clipot", description: "Consejos pr\u00E1cticos de marketing digital: generaci\u00F3n y gesti\u00F3n de leads, paid media, automatizaci\u00F3n y CRM.", keywords: ["blog marketing digital", "leads", "paid media", "CRM", "automatización"] }),
        React.createElement(Header_1["default"], null),
        React.createElement("section", { className: "pt-32 pb-20 bg-background" },
            React.createElement("div", { className: "container mx-auto px-4" },
                React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, className: "max-w-3xl mx-auto text-center" },
                    React.createElement("span", { className: "text-sm font-medium text-primary mb-4 block" }, "BLOG"),
                    React.createElement("h1", { className: "font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6" },
                        React.createElement("span", { className: "sr-only" }, "Agencia de marketing digital"),
                        "Tips & Tricks"),
                    React.createElement("p", { className: "text-xl text-muted-foreground leading-relaxed" }, "Estrategias, t\u00E1cticas y aprendizajes de gestionar miles de leads. Sin relleno, solo lo que funciona.")))),
        React.createElement("section", { className: "py-20 bg-muted" },
            React.createElement("div", { className: "container mx-auto px-4" },
                React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" },
                    posts.map(function (post, index) { return (React.createElement(react_router_dom_1.Link, { key: post.slug, to: "/blog/" + post.slug },
                        React.createElement(framer_motion_1.motion.article, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { delay: index * 0.1 }, className: "bg-background rounded-2xl overflow-hidden group cursor-pointer h-full shadow-sm ring-1 ring-border hover:shadow-md transition-shadow" },
                            React.createElement("div", { className: "aspect-[3/2] overflow-hidden" },
                                React.createElement("img", { src: post.image || "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop", alt: post.title, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" })),
                            React.createElement("div", { className: "p-6" },
                                React.createElement("div", { className: "flex items-center gap-4 mb-3" },
                                    React.createElement("span", { className: "text-xs font-medium text-primary uppercase tracking-wider" }, post.category),
                                    React.createElement("span", { className: "flex items-center text-xs text-muted-foreground" },
                                        React.createElement(lucide_react_1.Clock, { size: 12, className: "mr-1" }),
                                        post.readTime)),
                                React.createElement("h2", { className: "font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors" }, post.title),
                                React.createElement("p", { className: "text-muted-foreground text-sm mb-4 line-clamp-2" }, post.excerpt),
                                React.createElement("span", { className: "inline-flex items-center text-sm font-medium text-primary" },
                                    "Leer m\u00E1s",
                                    React.createElement(lucide_react_1.ArrowRight, { size: 16, className: "ml-1 group-hover:translate-x-1 transition-transform" })))))); }),
                    posts.length === 0 && (React.createElement("div", { className: "col-span-3 text-center text-muted-foreground" }, "No hay publicaciones a\u00FAn."))))),
        React.createElement("section", { className: "py-20 bg-foreground text-background" },
            React.createElement("div", { className: "container mx-auto px-4" },
                React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, className: "max-w-2xl mx-auto text-center" },
                    React.createElement("h2", { className: "font-display text-3xl md:text-4xl font-bold mb-4" }, "Tips directo a tu inbox"),
                    React.createElement("p", { className: "text-background/70 mb-8" }, "Suscr\u00EDbete y recibe estrategias de generaci\u00F3n de leads cada semana. Sin spam, solo valor."),
                    React.createElement("form", { className: "flex flex-col sm:flex-row gap-4 max-w-md mx-auto" },
                        React.createElement("input", { type: "email", placeholder: "tu@email.com", className: "flex-1 px-4 py-3 rounded-lg bg-background/10 border border-background/20 text-background placeholder:text-background/50 focus:outline-none focus:border-primary" }),
                        React.createElement("button", { type: "submit", className: "px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors" }, "Suscribirse"))))),
        React.createElement(Footer_1["default"], null),
        React.createElement(ChatWidget_1["default"], null)));
};
exports["default"] = Blog;

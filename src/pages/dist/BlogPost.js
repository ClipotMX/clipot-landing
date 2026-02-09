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
var button_1 = require("@/components/ui/button");
var SEO_1 = require("@/components/SEO");
var react_1 = require("react");
var supabase_js_1 = require("@supabase/supabase-js");
var BlogPost = function () {
    var slug = react_router_dom_1.useParams().slug;
    var _a = react_1.useState(null), post = _a[0], setPost = _a[1];
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
                                .select("*")
                                .eq("slug", slug)
                                .eq("status", "published")
                                .limit(1)
                                .maybeSingle()];
                    case 1:
                        _a = _e.sent(), data = _a.data, error = _a.error;
                        if (!error && data) {
                            setPost(data);
                            return [2 /*return*/];
                        }
                        _e.label = 2;
                    case 2: return [4 /*yield*/, fetch("http://localhost:3001/api/public/posts/" + slug)];
                    case 3:
                        res = _e.sent();
                        return [4 /*yield*/, res.json()];
                    case 4:
                        json = _e.sent();
                        if (json === null || json === void 0 ? void 0 : json.ok)
                            setPost(json.item);
                        return [3 /*break*/, 6];
                    case 5:
                        _b = _e.sent();
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        }); })();
    }, [slug]);
    if (!post) {
        return React.createElement(react_router_dom_1.Navigate, { to: "/blog", replace: true });
    }
    var relatedPosts = [];
    return (React.createElement("div", { className: "min-h-screen" },
        React.createElement(SEO_1["default"], { title: post.title + " | Blog de marketing digital \u2013 Clipot", description: post.excerpt, keywords: [post.category, "blog marketing digital", "leads", "paid media", "CRM"], type: "article", canonical: typeof window !== "undefined" ? window.location.origin + "/blog/" + post.slug : undefined }),
        React.createElement(Header_1["default"], null),
        React.createElement("section", { className: "pt-32 pb-12 bg-background" },
            React.createElement("div", { className: "container mx-auto px-4" },
                React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, className: "max-w-3xl mx-auto" },
                    React.createElement(react_router_dom_1.Link, { to: "/blog", className: "inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6 transition-colors" },
                        React.createElement(lucide_react_1.ArrowLeft, { size: 16, className: "mr-2" }),
                        "Volver al blog"),
                    post.category && (React.createElement("span", { className: "text-sm font-medium text-primary uppercase tracking-wider" }, post.category)),
                    React.createElement("h1", { className: "font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6" }, post.title),
                    React.createElement("div", { className: "flex flex-wrap items-center gap-6 text-sm text-muted-foreground" },
                        React.createElement("span", { className: "flex items-center" },
                            React.createElement(lucide_react_1.User, { size: 16, className: "mr-2" }),
                            post.author || "Clipot"),
                        React.createElement("span", { className: "flex items-center" },
                            React.createElement(lucide_react_1.Calendar, { size: 16, className: "mr-2" }),
                            new Date(post.ts).toLocaleDateString()),
                        React.createElement("span", { className: "flex items-center" },
                            React.createElement(lucide_react_1.Clock, { size: 16, className: "mr-2" }),
                            (post.readTime || "5 min"),
                            " de lectura"))))),
        React.createElement("section", { className: "pb-12 bg-background" },
            React.createElement("div", { className: "container mx-auto px-4" },
                React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, scale: 0.98 }, animate: { opacity: 1, scale: 1 }, transition: { delay: 0.2 }, className: "max-w-4xl mx-auto" }, post.image && (React.createElement("img", { src: post.image, alt: post.title, className: "w-full aspect-video object-cover rounded-3xl" }))))),
        React.createElement("section", { className: "py-12 bg-background" },
            React.createElement("div", { className: "container mx-auto px-4" },
                React.createElement(framer_motion_1.motion.article, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.3 }, className: "max-w-3xl mx-auto prose prose-lg prose-neutral dark:prose-invert" },
                    React.createElement("div", { className: "text-muted-foreground leading-relaxed mb-6", dangerouslySetInnerHTML: { __html: String(post.content || "") } })))),
        React.createElement("section", { className: "py-16 bg-primary text-primary-foreground" },
            React.createElement("div", { className: "container mx-auto px-4" },
                React.createElement("div", { className: "max-w-2xl mx-auto text-center" },
                    React.createElement("h2", { className: "font-display text-2xl md:text-3xl font-bold mb-4" }, "\u00BFListo para aplicar estas estrategias?"),
                    React.createElement("p", { className: "text-primary-foreground/80 mb-8" }, "Agenda una llamada con nuestro equipo y te ayudamos a implementarlas en tu negocio."),
                    React.createElement(button_1.Button, { asChild: true, variant: "secondary", size: "lg" },
                        React.createElement(react_router_dom_1.Link, { to: "/contacto" }, "Agendar llamada gratis"))))),
        React.createElement("section", { className: "py-20 bg-muted" },
            React.createElement("div", { className: "container mx-auto px-4" },
                React.createElement("h2", { className: "font-display text-2xl md:text-3xl font-bold text-center mb-12" }, "Tambi\u00E9n te puede interesar"),
                React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto" }, relatedPosts.map(function (relatedPost) { return (React.createElement(react_router_dom_1.Link, { key: relatedPost.slug, to: "/blog/" + relatedPost.slug, className: "bg-background rounded-2xl overflow-hidden group shadow-sm ring-1 ring-border hover:shadow-md transition-shadow" },
                    React.createElement("div", { className: "aspect-[3/2] overflow-hidden" },
                        React.createElement("img", { src: relatedPost.image, alt: relatedPost.title, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" })),
                    React.createElement("div", { className: "p-6" },
                        React.createElement("span", { className: "text-xs font-medium text-primary uppercase tracking-wider" }, relatedPost.category),
                        React.createElement("h3", { className: "font-display text-lg font-semibold mt-2 group-hover:text-primary transition-colors line-clamp-2" }, relatedPost.title)))); })))),
        React.createElement(Footer_1["default"], null),
        React.createElement(ChatWidget_1["default"], null)));
};
exports["default"] = BlogPost;

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
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var lucide_react_1 = require("lucide-react");
var button_1 = require("@/components/ui/button");
var clipot_logo_png_1 = require("@/assets/clipot-logo.png");
var supabase_js_1 = require("@supabase/supabase-js");
var navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Nosotros", href: "/nosotros" },
    { name: "Servicios", href: "/servicios" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Kommo CRM", href: "/kommo" },
    { name: "Blog", href: "/blog" },
    { name: "Contacto", href: "/contacto" },
];
var navLinksAdmin = [
    { name: "Dashboard", href: "/admin/dashboard" },
    { name: "CMS", href: "/admin/cms" },
    { name: "Emails", href: "/admin/email" },
    { name: "Integraciones", href: "/admin/integraciones" },
    { name: "Reportes", href: "/admin/reportes" },
    { name: "Roles", href: "/admin/roles" },
    { name: "Chat", href: "/admin/chat" },
];
var Header = function () {
    var _a, _b;
    var _c = react_1.useState(false), isMenuOpen = _c[0], setIsMenuOpen = _c[1];
    var location = react_router_dom_1.useLocation();
    var _d = react_1.useState(""), role = _d[0], setRole = _d[1];
    var supabaseUrl = (_a = import.meta.env) === null || _a === void 0 ? void 0 : _a.VITE_SUPABASE_URL;
    var supabaseAnon = (_b = import.meta.env) === null || _b === void 0 ? void 0 : _b.VITE_SUPABASE_ANON_KEY;
    var supabase = (supabaseUrl && supabaseAnon) ? supabase_js_1.createClient(supabaseUrl, supabaseAnon) : null;
    var isAdmin = location.pathname.startsWith("/admin");
    react_1.useEffect(function () {
        (function () { return __awaiter(void 0, void 0, void 0, function () {
            var data, r;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(isAdmin && supabase)) return [3 /*break*/, 2];
                        return [4 /*yield*/, supabase.auth.getUser()];
                    case 1:
                        data = (_b.sent()).data;
                        r = (((_a = data === null || data === void 0 ? void 0 : data.user) === null || _a === void 0 ? void 0 : _a.app_metadata) && data.user.app_metadata.role) || "";
                        setRole(r);
                        return [3 /*break*/, 3];
                    case 2:
                        setRole("");
                        _b.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); })();
    }, [location.pathname]);
    return (React.createElement("header", { className: "fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border" },
        React.createElement("div", { className: "container mx-auto px-4" },
            React.createElement("div", { className: "flex items-center justify-between h-20" },
                React.createElement(react_router_dom_1.Link, { to: "/", className: "flex items-center" },
                    React.createElement("img", { src: clipot_logo_png_1["default"], alt: "Clipot, agencia de marketing digital", className: "h-10 w-auto" })),
                React.createElement("nav", { className: "hidden lg:flex items-center gap-8" }, (isAdmin ? navLinksAdmin : navLinks).map(function (link) { return (React.createElement(react_router_dom_1.Link, { key: link.name, to: link.href, className: "text-sm font-medium transition-colors hover:text-primary " + (location.pathname === link.href
                        ? "text-primary"
                        : "text-foreground/80") }, link.name)); })),
                React.createElement("div", { className: "hidden lg:block" }, isAdmin ? (React.createElement("div", { className: "flex items-center gap-3" },
                    React.createElement("span", { className: "px-3 py-1 text-xs rounded-full ring-1 ring-border bg-muted" }, role || "user"),
                    React.createElement(button_1.Button, { asChild: true, variant: "outline" },
                        React.createElement(react_router_dom_1.Link, { to: "/admin/dashboard" }, "Ir al dashboard")),
                    React.createElement(button_1.Button, { variant: "destructive", onClick: function () { return __awaiter(void 0, void 0, void 0, function () {
                            var _a;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        _b.trys.push([0, 3, , 4]);
                                        if (!supabase) return [3 /*break*/, 2];
                                        return [4 /*yield*/, supabase.auth.signOut()];
                                    case 1:
                                        _b.sent();
                                        _b.label = 2;
                                    case 2: return [3 /*break*/, 4];
                                    case 3:
                                        _a = _b.sent();
                                        return [3 /*break*/, 4];
                                    case 4:
                                        try {
                                            localStorage.removeItem("userToken");
                                            localStorage.removeItem("adminToken");
                                        }
                                        catch (_c) { }
                                        window.location.href = "/admin/login";
                                        return [2 /*return*/];
                                }
                            });
                        }); } }, "Salir"))) : (React.createElement(button_1.Button, { asChild: true },
                    React.createElement(react_router_dom_1.Link, { to: "/contacto" }, "Hablemos")))),
                React.createElement("button", { className: "lg:hidden p-2", onClick: function () { return setIsMenuOpen(!isMenuOpen); }, "aria-label": "Toggle menu" }, isMenuOpen ? React.createElement(lucide_react_1.X, { size: 24 }) : React.createElement(lucide_react_1.Menu, { size: 24 }))),
            isMenuOpen && (React.createElement("nav", { className: "lg:hidden py-4 border-t border-border" },
                React.createElement("div", { className: "flex flex-col gap-4" },
                    (isAdmin ? navLinksAdmin : navLinks).map(function (link) { return (React.createElement(react_router_dom_1.Link, { key: link.name, to: link.href, className: "text-base font-medium transition-colors hover:text-primary py-2 " + (location.pathname === link.href
                            ? "text-primary"
                            : "text-foreground/80"), onClick: function () { return setIsMenuOpen(false); } }, link.name)); }),
                    isAdmin ? (React.createElement("div", { className: "flex items-center gap-3 mt-2" },
                        React.createElement("span", { className: "px-3 py-1 text-xs rounded-full ring-1 ring-border bg-muted" }, role || "user"),
                        React.createElement(button_1.Button, { asChild: true, variant: "outline" },
                            React.createElement(react_router_dom_1.Link, { to: "/admin/dashboard", onClick: function () { return setIsMenuOpen(false); } }, "Ir al dashboard")))) : (React.createElement(button_1.Button, { asChild: true, className: "mt-2" },
                        React.createElement(react_router_dom_1.Link, { to: "/contacto", onClick: function () { return setIsMenuOpen(false); } }, "Hablemos")))))))));
};
exports["default"] = Header;

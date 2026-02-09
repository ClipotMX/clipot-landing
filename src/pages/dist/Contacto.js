"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var Header_1 = require("@/components/Header");
var Footer_1 = require("@/components/Footer");
var ChatWidget_1 = require("@/components/ChatWidget");
var framer_motion_1 = require("framer-motion");
var button_1 = require("@/components/ui/button");
var input_1 = require("@/components/ui/input");
var textarea_1 = require("@/components/ui/textarea");
var lucide_react_1 = require("lucide-react");
var use_toast_1 = require("@/hooks/use-toast");
var react_hook_form_1 = require("react-hook-form");
var zod_1 = require("@hookform/resolvers/zod");
var form_1 = require("@/components/ui/form");
var contact_schema_1 = require("@/lib/contact-schema");
var SEO_1 = require("@/components/SEO");
var Contacto = function () {
    var toast = use_toast_1.useToast().toast;
    var _a = react_1.useState(false), isSubmitting = _a[0], setIsSubmitting = _a[1];
    var _b = react_1.useState(false), isSubmitted = _b[0], setIsSubmitted = _b[1];
    var _c = react_1.useState(null), csrfToken = _c[0], setCsrfToken = _c[1];
    var form = react_hook_form_1.useForm({
        resolver: zod_1.zodResolver(contact_schema_1.contactSchema),
        defaultValues: {
            name: "",
            company: "",
            email: "",
            phone: "",
            service: "",
            message: ""
        }
    });
    react_1.useEffect(function () {
        (function () { return __awaiter(void 0, void 0, void 0, function () {
            var res, data, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, fetch("/api/csrf-token", { credentials: "include" })];
                    case 1:
                        res = _b.sent();
                        return [4 /*yield*/, res.json()];
                    case 2:
                        data = _b.sent();
                        if (data === null || data === void 0 ? void 0 : data.token)
                            setCsrfToken(data.token);
                        return [3 /*break*/, 4];
                    case 3:
                        _a = _b.sent();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); })();
    }, []);
    var onSubmit = function (values) { return __awaiter(void 0, void 0, void 0, function () {
        var res, data, msg, _a;
        var _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    setIsSubmitting(true);
                    _d.label = 1;
                case 1:
                    _d.trys.push([1, 4, 5, 6]);
                    return [4 /*yield*/, fetch("/api/contact", {
                            method: "POST",
                            headers: __assign({ "Content-Type": "application/json" }, (csrfToken ? { "X-CSRF-Token": csrfToken } : {})),
                            credentials: "include",
                            body: JSON.stringify(values)
                        })];
                case 2:
                    res = _d.sent();
                    return [4 /*yield*/, res.json()];
                case 3:
                    data = _d.sent();
                    if (!res.ok || !(data === null || data === void 0 ? void 0 : data.ok)) {
                        msg = ((_c = (_b = data === null || data === void 0 ? void 0 : data.errors) === null || _b === void 0 ? void 0 : _b.join) === null || _c === void 0 ? void 0 : _c.call(_b, ", ")) || (data === null || data === void 0 ? void 0 : data.error) ||
                            "No se pudo enviar el mensaje. Intenta nuevamente.";
                        toast({ title: "Error", description: msg });
                        return [2 /*return*/];
                    }
                    setIsSubmitted(true);
                    toast({
                        title: "¡Mensaje enviado!",
                        description: "Te contactaremos en menos de 24 horas."
                    });
                    return [3 /*break*/, 6];
                case 4:
                    _a = _d.sent();
                    toast({ title: "Error", description: "Error de red al enviar el formulario." });
                    return [3 /*break*/, 6];
                case 5:
                    setIsSubmitting(false);
                    return [7 /*endfinally*/];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement("div", { className: "min-h-screen" },
        React.createElement(SEO_1["default"], { title: "Contacto | Agencia de marketing digital \u2013 Clipot", description: "\u00BFBuscas una agencia de marketing digital? Cont\u00E1ctanos para dise\u00F1ar una estrategia de generaci\u00F3n y gesti\u00F3n de leads a medida.", keywords: ["contacto agencia marketing digital", "generación de leads", "gestión de leads"] }),
        React.createElement(Header_1["default"], null),
        React.createElement("section", { className: "pt-32 pb-20 bg-background" },
            React.createElement("div", { className: "container mx-auto px-4" },
                React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, className: "max-w-3xl mx-auto text-center" },
                    React.createElement("span", { className: "text-sm font-medium text-primary mb-4 block" }, "CONTACTO"),
                    React.createElement("h1", { className: "font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6" },
                        React.createElement("span", { className: "sr-only" }, "Agencia de marketing digital"),
                        "Hablemos de tu",
                        " ",
                        React.createElement("span", { className: "text-primary" }, "proyecto")),
                    React.createElement("p", { className: "text-xl text-muted-foreground leading-relaxed" }, "Cu\u00E9ntanos qu\u00E9 necesitas y te contactamos en menos de 24 horas con una propuesta a medida.")))),
        React.createElement("section", { className: "py-20 bg-muted" },
            React.createElement("div", { className: "container mx-auto px-4" },
                React.createElement("div", { className: "max-w-5xl mx-auto" },
                    React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-12" },
                        React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, x: -30 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, className: "lg:col-span-2" },
                            React.createElement("div", { className: "bg-background rounded-3xl p-8 md:p-12" }, isSubmitted ? (React.createElement("div", { className: "text-center py-12" },
                                React.createElement(lucide_react_1.CheckCircle, { className: "w-16 h-16 text-primary mx-auto mb-6" }),
                                React.createElement("h3", { className: "font-display text-2xl font-bold mb-4" }, "\u00A1Gracias por contactarnos!"),
                                React.createElement("p", { className: "text-muted-foreground" }, "Hemos recibido tu mensaje. Un especialista te contactar\u00E1 en menos de 24 horas."))) : (React.createElement(form_1.Form, __assign({}, form),
                                React.createElement("form", { onSubmit: form.handleSubmit(onSubmit), className: "space-y-6", noValidate: true },
                                    React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6" },
                                        React.createElement(form_1.FormField, { control: form.control, name: "name", render: function (_a) {
                                                var field = _a.field;
                                                return (React.createElement(form_1.FormItem, null,
                                                    React.createElement(form_1.FormLabel, null, "Nombre *"),
                                                    React.createElement(form_1.FormControl, null,
                                                        React.createElement(input_1.Input, __assign({ type: "text", placeholder: "Tu nombre", className: "h-12" }, field))),
                                                    React.createElement(form_1.FormMessage, null)));
                                            } }),
                                        React.createElement(form_1.FormField, { control: form.control, name: "company", render: function (_a) {
                                                var field = _a.field;
                                                return (React.createElement(form_1.FormItem, null,
                                                    React.createElement(form_1.FormLabel, null, "Empresa"),
                                                    React.createElement(form_1.FormControl, null,
                                                        React.createElement(input_1.Input, __assign({ type: "text", placeholder: "Nombre de tu empresa", className: "h-12" }, field))),
                                                    React.createElement(form_1.FormMessage, null)));
                                            } })),
                                    React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6" },
                                        React.createElement(form_1.FormField, { control: form.control, name: "email", render: function (_a) {
                                                var field = _a.field;
                                                return (React.createElement(form_1.FormItem, null,
                                                    React.createElement(form_1.FormLabel, null, "Email *"),
                                                    React.createElement(form_1.FormControl, null,
                                                        React.createElement(input_1.Input, __assign({ type: "email", placeholder: "tu@email.com", className: "h-12" }, field))),
                                                    React.createElement(form_1.FormMessage, null)));
                                            } }),
                                        React.createElement(form_1.FormField, { control: form.control, name: "phone", render: function (_a) {
                                                var field = _a.field;
                                                return (React.createElement(form_1.FormItem, null,
                                                    React.createElement(form_1.FormLabel, null, "Tel\u00E9fono"),
                                                    React.createElement(form_1.FormControl, null,
                                                        React.createElement(input_1.Input, __assign({ type: "tel", placeholder: "+52 55 1234 5678", className: "h-12" }, field))),
                                                    React.createElement(form_1.FormMessage, null)));
                                            } })),
                                    React.createElement(form_1.FormField, { control: form.control, name: "service", render: function (_a) {
                                            var field = _a.field;
                                            return (React.createElement(form_1.FormItem, null,
                                                React.createElement(form_1.FormLabel, null, "\u00BFQu\u00E9 servicio te interesa?"),
                                                React.createElement(form_1.FormControl, null,
                                                    React.createElement("select", __assign({ className: "w-full h-12 px-4 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring" }, field),
                                                        React.createElement("option", { value: "" }, "Selecciona una opci\u00F3n"),
                                                        React.createElement("option", { value: "leads" }, "Generaci\u00F3n de leads"),
                                                        React.createElement("option", { value: "gestion" }, "Gesti\u00F3n de leads"),
                                                        React.createElement("option", { value: "paid" }, "Paid Media"),
                                                        React.createElement("option", { value: "web" }, "Desarrollo web"),
                                                        React.createElement("option", { value: "ecommerce" }, "Ecommerce"),
                                                        React.createElement("option", { value: "crm" }, "Implementaci\u00F3n Kommo CRM"),
                                                        React.createElement("option", { value: "otro" }, "Otro"))),
                                                React.createElement(form_1.FormMessage, null)));
                                        } }),
                                    React.createElement(form_1.FormField, { control: form.control, name: "message", render: function (_a) {
                                            var field = _a.field;
                                            return (React.createElement(form_1.FormItem, null,
                                                React.createElement(form_1.FormLabel, null, "Cu\u00E9ntanos sobre tu proyecto *"),
                                                React.createElement(form_1.FormControl, null,
                                                    React.createElement(textarea_1.Textarea, __assign({ placeholder: "\u00BFQu\u00E9 problema quieres resolver? \u00BFCu\u00E1l es tu objetivo principal?", className: "min-h-[150px] resize-none" }, field))),
                                                React.createElement(form_1.FormMessage, null)));
                                        } }),
                                    React.createElement(button_1.Button, { type: "submit", size: "lg", className: "w-full md:w-auto", disabled: isSubmitting }, isSubmitting ? ("Enviando...") : (React.createElement(React.Fragment, null,
                                        "Enviar mensaje",
                                        React.createElement(lucide_react_1.Send, { className: "ml-2", size: 18 }))))))))),
                        React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, x: 30 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, className: "space-y-8" },
                            React.createElement("div", null,
                                React.createElement("h3", { className: "font-display text-xl font-semibold mb-6" }, "Informaci\u00F3n de contacto"),
                                React.createElement("div", { className: "space-y-6" },
                                    React.createElement("div", { className: "flex items-start gap-4" },
                                        React.createElement("div", { className: "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0" },
                                            React.createElement(lucide_react_1.Mail, { className: "w-5 h-5 text-primary" })),
                                        React.createElement("div", null,
                                            React.createElement("p", { className: "font-medium mb-1" }, "Email"),
                                            React.createElement("a", { href: "mailto:hola@clipot.com", className: "text-muted-foreground hover:text-primary transition-colors" }, "hola@clipot.com"))),
                                    React.createElement("div", { className: "flex items-start gap-4" },
                                        React.createElement("div", { className: "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0" },
                                            React.createElement(lucide_react_1.Phone, { className: "w-5 h-5 text-primary" })),
                                        React.createElement("div", null,
                                            React.createElement("p", { className: "font-medium mb-1" }, "Tel\u00E9fono"),
                                            React.createElement("a", { href: "tel:+525512345678", className: "text-muted-foreground hover:text-primary transition-colors" }, "+52 55 1234 5678"))),
                                    React.createElement("div", { className: "flex items-start gap-4" },
                                        React.createElement("div", { className: "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0" },
                                            React.createElement(lucide_react_1.MapPin, { className: "w-5 h-5 text-primary" })),
                                        React.createElement("div", null,
                                            React.createElement("p", { className: "font-medium mb-1" }, "Ubicaci\u00F3n"),
                                            React.createElement("p", { className: "text-muted-foreground" }, "Ciudad de M\u00E9xico, MX"))))),
                            React.createElement("div", { className: "bg-primary/10 rounded-2xl p-6" },
                                React.createElement("h4", { className: "font-display font-semibold mb-3" }, "\u00BFPrefieres una llamada?"),
                                React.createElement("p", { className: "text-sm text-muted-foreground mb-4" }, "Agenda una llamada de 15 minutos directamente en nuestro calendario."),
                                React.createElement(button_1.Button, { variant: "outline", className: "w-full" }, "Agendar llamada"))))))),
        React.createElement(Footer_1["default"], null),
        React.createElement(ChatWidget_1["default"], null)));
};
exports["default"] = Contacto;

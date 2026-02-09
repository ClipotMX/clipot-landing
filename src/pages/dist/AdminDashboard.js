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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var Header_1 = require("@/components/Header");
var Footer_1 = require("@/components/Footer");
var react_1 = require("react");
var input_1 = require("@/components/ui/input");
var button_1 = require("@/components/ui/button");
var supabase_js_1 = require("@supabase/supabase-js");
var AdminDashboard = function () {
    var _a, _b;
    var _c = react_1.useState([]), clients = _c[0], setClients = _c[1];
    var _d = react_1.useState(""), name = _d[0], setName = _d[1];
    var _e = react_1.useState(""), contact = _e[0], setContact = _e[1];
    var _f = react_1.useState(""), company = _f[0], setCompany = _f[1];
    var _g = react_1.useState(""), notes = _g[0], setNotes = _g[1];
    var _h = react_1.useState(""), error = _h[0], setError = _h[1];
    var _j = react_1.useState(""), role = _j[0], setRole = _j[1];
    var token = localStorage.getItem("userToken") || "";
    var supabaseUrl = (_a = import.meta.env) === null || _a === void 0 ? void 0 : _a.VITE_SUPABASE_URL;
    var supabaseAnon = (_b = import.meta.env) === null || _b === void 0 ? void 0 : _b.VITE_SUPABASE_ANON_KEY;
    var supabase = (supabaseUrl && supabaseAnon) ? supabase_js_1.createClient(supabaseUrl, supabaseAnon) : null;
    function load() {
        return __awaiter(this, void 0, void 0, function () {
            var res, data, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        setError("");
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, fetch("http://localhost:3001/api/crm/clients", {
                                headers: { Authorization: "Bearer " + token }
                            })];
                    case 2:
                        res = _b.sent();
                        return [4 /*yield*/, res.json()];
                    case 3:
                        data = _b.sent();
                        if (data === null || data === void 0 ? void 0 : data.ok)
                            setClients(data.items || []);
                        return [3 /*break*/, 5];
                    case 4:
                        _a = _b.sent();
                        setError("Error al cargar clientes");
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    }
    function add() {
        return __awaiter(this, void 0, void 0, function () {
            var res, data, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!name.trim())
                            return [2 /*return*/];
                        setError("");
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, fetch("http://localhost:3001/api/crm/clients", {
                                method: "POST",
                                headers: { "Content-Type": "application/json", Authorization: "Bearer " + token },
                                body: JSON.stringify({ name: name, contact: contact, company: company, notes: notes })
                            })];
                    case 2:
                        res = _b.sent();
                        return [4 /*yield*/, res.json()];
                    case 3:
                        data = _b.sent();
                        if (data === null || data === void 0 ? void 0 : data.ok) {
                            setClients(__spreadArrays([data.item], clients));
                            setName("");
                            setContact("");
                            setCompany("");
                            setNotes("");
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        _a = _b.sent();
                        setError("Error al agregar cliente");
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    }
    react_1.useEffect(function () {
        if (!token)
            return;
        load();
        (function () { return __awaiter(void 0, void 0, void 0, function () {
            var data, r;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!supabase) return [3 /*break*/, 2];
                        return [4 /*yield*/, supabase.auth.getUser()];
                    case 1:
                        data = (_b.sent()).data;
                        r = (((_a = data === null || data === void 0 ? void 0 : data.user) === null || _a === void 0 ? void 0 : _a.app_metadata) && data.user.app_metadata.role) || "";
                        setRole(r);
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); })();
    }, []);
    return (React.createElement("div", { className: "min-h-screen" },
        React.createElement(Header_1["default"], null),
        React.createElement("section", { className: "pt-28 pb-8 bg-background" },
            React.createElement("div", { className: "container mx-auto px-4" },
                React.createElement("div", { className: "flex items-center justify-between mb-4" },
                    React.createElement("h1", { className: "font-display text-3xl md:text-4xl font-bold" }, "Dashboard"),
                    React.createElement("span", { className: "px-3 py-1 text-xs rounded-full ring-1 ring-border bg-muted" }, role || "user")),
                React.createElement("p", { className: "text-muted-foreground mb-6" }, "KPIs est\u00E1ticos y gesti\u00F3n b\u00E1sica de clientes."),
                React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6" },
                    React.createElement("div", { className: "bg-background rounded-2xl shadow-sm ring-1 ring-border p-4" },
                        React.createElement("h2", { className: "font-semibold mb-3" }, "Nuevo Cliente"),
                        React.createElement("div", { className: "space-y-2" },
                            React.createElement(input_1.Input, { value: name, onChange: function (e) { return setName(e.target.value); }, placeholder: "Nombre" }),
                            React.createElement(input_1.Input, { value: contact, onChange: function (e) { return setContact(e.target.value); }, placeholder: "Contacto" }),
                            React.createElement(input_1.Input, { value: company, onChange: function (e) { return setCompany(e.target.value); }, placeholder: "Empresa" }),
                            React.createElement(input_1.Input, { value: notes, onChange: function (e) { return setNotes(e.target.value); }, placeholder: "Notas" }),
                            React.createElement(button_1.Button, { onClick: add }, "Agregar"),
                            error && React.createElement("p", { className: "text-red-500 text-sm" }, error))),
                    React.createElement("div", { className: "lg:col-span-2 bg-background rounded-2xl shadow-sm ring-1 ring-border p-4" },
                        React.createElement("h2", { className: "font-semibold mb-3" }, "Clientes"),
                        React.createElement("div", { className: "space-y-2" },
                            clients.map(function (c) { return (React.createElement("div", { key: c.id, className: "p-3 rounded-xl border border-border" },
                                React.createElement("div", { className: "font-medium" }, c.name),
                                React.createElement("div", { className: "text-sm text-muted-foreground" },
                                    c.company,
                                    " \u2014 ",
                                    c.contact),
                                React.createElement("div", { className: "text-sm" }, c.notes))); }),
                            clients.length === 0 && React.createElement("p", { className: "text-sm text-muted-foreground" }, "Sin clientes a\u00FAn.")))))),
        React.createElement(Footer_1["default"], null)));
};
exports["default"] = AdminDashboard;

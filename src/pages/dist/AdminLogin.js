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
var Header_1 = require("@/components/Header");
var Footer_1 = require("@/components/Footer");
var react_1 = require("react");
var input_1 = require("@/components/ui/input");
var button_1 = require("@/components/ui/button");
var react_router_dom_1 = require("react-router-dom");
var supabase_js_1 = require("@supabase/supabase-js");
var AdminLogin = function () {
    var _a, _b;
    var _c = react_1.useState(""), email = _c[0], setEmail = _c[1];
    var _d = react_1.useState(""), password = _d[0], setPassword = _d[1];
    var _e = react_1.useState(false), loading = _e[0], setLoading = _e[1];
    var _f = react_1.useState(""), error = _f[0], setError = _f[1];
    var navigate = react_router_dom_1.useNavigate();
    var supabaseUrl = (_a = import.meta.env) === null || _a === void 0 ? void 0 : _a.VITE_SUPABASE_URL;
    var supabaseAnon = (_b = import.meta.env) === null || _b === void 0 ? void 0 : _b.VITE_SUPABASE_ANON_KEY;
    var supabase = (supabaseUrl && supabaseAnon) ? supabase_js_1.createClient(supabaseUrl, supabaseAnon) : null;
    function login() {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var _b, data, e, res, data, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        setLoading(true);
                        setError("");
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 7, 8, 9]);
                        if (!supabase) return [3 /*break*/, 3];
                        return [4 /*yield*/, supabase.auth.signInWithPassword({ email: email, password: password })];
                    case 2:
                        _b = _d.sent(), data = _b.data, e = _b.error;
                        if (e || !((_a = data.session) === null || _a === void 0 ? void 0 : _a.access_token)) {
                            setError("Credenciales inválidas");
                            return [2 /*return*/];
                        }
                        localStorage.setItem("userToken", data.session.access_token);
                        return [3 /*break*/, 6];
                    case 3: return [4 /*yield*/, fetch("http://localhost:3001/api/dashboard/login", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ email: email, password: password })
                        })];
                    case 4:
                        res = _d.sent();
                        return [4 /*yield*/, res.json()];
                    case 5:
                        data = _d.sent();
                        if (!(data === null || data === void 0 ? void 0 : data.ok)) {
                            setError("Credenciales inválidas");
                            return [2 /*return*/];
                        }
                        localStorage.setItem("userToken", data.token);
                        _d.label = 6;
                    case 6:
                        navigate("/admin/dashboard");
                        return [3 /*break*/, 9];
                    case 7:
                        _c = _d.sent();
                        setError("Error de red");
                        return [3 /*break*/, 9];
                    case 8:
                        setLoading(false);
                        return [7 /*endfinally*/];
                    case 9: return [2 /*return*/];
                }
            });
        });
    }
    return (React.createElement("div", { className: "min-h-screen" },
        React.createElement(Header_1["default"], null),
        React.createElement("section", { className: "pt-28 pb-8 bg-background" },
            React.createElement("div", { className: "container mx-auto px-4" },
                React.createElement("div", { className: "max-w-md mx-auto bg-background rounded-2xl shadow-sm ring-1 ring-border p-6" },
                    React.createElement("h1", { className: "font-display text-2xl font-bold mb-4" }, "Login de Administrador"),
                    React.createElement("div", { className: "space-y-3" },
                        React.createElement(input_1.Input, { type: "email", value: email, onChange: function (e) { return setEmail(e.target.value); }, placeholder: "Email" }),
                        React.createElement(input_1.Input, { type: "password", value: password, onChange: function (e) { return setPassword(e.target.value); }, placeholder: "Contrase\u00F1a" }),
                        error && React.createElement("p", { className: "text-red-500 text-sm" }, error),
                        React.createElement(button_1.Button, { onClick: login, disabled: loading }, "Acceder"))))),
        React.createElement(Footer_1["default"], null)));
};
exports["default"] = AdminLogin;

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
var AdminLayout_1 = require("@/components/admin/AdminLayout");
var react_1 = require("react");
var socket_io_client_1 = require("socket.io-client");
var button_1 = require("@/components/ui/button");
var input_1 = require("@/components/ui/input");
var lucide_react_1 = require("lucide-react");
var OperatorChat = function () {
    var _a = react_1.useState([]), sessions = _a[0], setSessions = _a[1];
    var _b = react_1.useState(""), active = _b[0], setActive = _b[1];
    var _c = react_1.useState([]), messages = _c[0], setMessages = _c[1];
    var _d = react_1.useState(""), text = _d[0], setText = _d[1];
    var socketRef = react_1.useRef(null);
    var _e = react_1.useState(function () { return localStorage.getItem("userToken") || localStorage.getItem("adminToken") || ""; }), token = _e[0], setToken = _e[1];
    var _f = react_1.useState(""), password = _f[0], setPassword = _f[1];
    var _g = react_1.useState(false), loading = _g[0], setLoading = _g[1];
    var baseUrl = react_1.useMemo(function () { return "http://localhost:3001"; }, []);
    react_1.useEffect(function () {
        if (!token)
            return;
        var socket = socket_io_client_1.io(baseUrl, { withCredentials: true, transports: ["websocket"], auth: { token: token } });
        socket.on("message", function (entry) {
            if (!active || entry.sessionId !== active)
                return;
            setMessages(function (prev) { return __spreadArrays(prev, [{ text: entry.text, isUser: entry.isUser, ts: entry.ts }]); });
        });
        socket.on("session:update", function (s) {
            setSessions(function (prev) {
                var idx = prev.findIndex(function (p) { return p.sessionId === s.sessionId; });
                if (idx >= 0) {
                    var next = __spreadArrays(prev);
                    next[idx] = s;
                    return next;
                }
                return __spreadArrays([s], prev);
            });
        });
        socketRef.current = socket;
        if (active) {
            socket.emit("join", { sessionId: active });
        }
        return function () {
            socket.disconnect();
            socketRef.current = null;
        };
    }, [baseUrl, active, token]);
    function loadSessions() {
        return __awaiter(this, void 0, void 0, function () {
            var res, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!token)
                            return [2 /*return*/];
                        return [4 /*yield*/, fetch(baseUrl + "/api/chat/sessions?minutes=120", {
                                headers: { Authorization: "Bearer " + token }
                            })];
                    case 1:
                        res = _a.sent();
                        return [4 /*yield*/, res.json()];
                    case 2:
                        data = _a.sent();
                        if (data === null || data === void 0 ? void 0 : data.ok)
                            setSessions(Array.isArray(data.sessions) ? data.sessions : []);
                        else
                            setSessions([]);
                        return [2 /*return*/];
                }
            });
        });
    }
    function joinSession(id) {
        return __awaiter(this, void 0, void 0, function () {
            var res, data, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        setActive(id);
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, fetch(baseUrl + "/api/chat/" + id, {
                                headers: token ? { Authorization: "Bearer " + token } : undefined
                            })];
                    case 2:
                        res = _b.sent();
                        return [4 /*yield*/, res.json()];
                    case 3:
                        data = _b.sent();
                        if (data === null || data === void 0 ? void 0 : data.ok)
                            setMessages(Array.isArray(data.messages) ? data.messages : []);
                        else
                            setMessages([]);
                        return [3 /*break*/, 5];
                    case 4:
                        _a = _b.sent();
                        setMessages([]);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    }
    function send() {
        var _a;
        var v = text.trim();
        if (!v || !active)
            return;
        setText("");
        setMessages(__spreadArrays(messages, [{ text: v, isUser: false }]));
        (_a = socketRef.current) === null || _a === void 0 ? void 0 : _a.emit("message", { sessionId: active, text: v, meta: { isUser: false } });
    }
    react_1.useEffect(function () {
        loadSessions();
        var t = setInterval(loadSessions, 5000);
        return function () { return clearInterval(t); };
    }, []);
    function doLogin() {
        return __awaiter(this, void 0, void 0, function () {
            var res, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        setLoading(true);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, , 4, 5]);
                        return [4 /*yield*/, fetch(baseUrl + "/api/admin/login", {
                                method: "POST",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify({ password: password })
                            })];
                    case 2:
                        res = _a.sent();
                        return [4 /*yield*/, res.json()];
                    case 3:
                        data = _a.sent();
                        if ((data === null || data === void 0 ? void 0 : data.ok) && data.token) {
                            localStorage.setItem("adminToken", data.token);
                            setToken(data.token);
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        setLoading(false);
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    }
    return (React.createElement(AdminLayout_1["default"], null,
        React.createElement("h1", { className: "font-display text-2xl font-bold mb-4" }, "Panel de Chat"),
        React.createElement("p", { className: "text-muted-foreground mb-6" }, "Chatea en tiempo real con visitantes."),
        !token ? (React.createElement("div", { className: "max-w-md bg-background rounded-2xl shadow-sm ring-1 ring-border p-6" },
            React.createElement("p", { className: "text-sm mb-3" }, "Ingresa la clave de administrador."),
            React.createElement("div", { className: "flex gap-2" },
                React.createElement(input_1.Input, { type: "password", value: password, onChange: function (e) { return setPassword(e.target.value); }, placeholder: "Password" }),
                React.createElement(button_1.Button, { onClick: doLogin, disabled: loading }, "Acceder")))) : (React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6" },
            React.createElement("div", { className: "bg-background rounded-2xl shadow-sm ring-1 ring-border p-4" },
                React.createElement("div", { className: "flex items-center justify-between mb-2" },
                    React.createElement("h2", { className: "font-semibold flex items-center gap-2" },
                        React.createElement(lucide_react_1.MessageSquare, { size: 18 }),
                        " Sesiones"),
                    React.createElement(button_1.Button, { variant: "outline", size: "sm", onClick: loadSessions }, "Actualizar")),
                React.createElement("div", { className: "space-y-2 mt-2" },
                    sessions.map(function (s) { return (React.createElement("button", { key: s.sessionId, onClick: function () { return joinSession(s.sessionId); }, className: "w-full text-left p-3 rounded-xl border " + (active === s.sessionId ? "border-primary" : "border-border") + " hover:bg-muted transition" },
                        React.createElement("div", { className: "flex items-center justify-between" },
                            React.createElement("span", { className: "font-mono text-xs" }, s.sessionId),
                            React.createElement("span", { className: "flex items-center gap-1 text-xs text-muted-foreground" },
                                React.createElement(lucide_react_1.Clock, { size: 14 }),
                                " ",
                                new Date(s.lastTs).toLocaleTimeString())),
                        React.createElement("p", { className: "text-sm line-clamp-1 text-muted-foreground" }, s.lastText),
                        React.createElement("p", { className: "text-[11px] text-muted-foreground mt-1" },
                            "Mensajes: ",
                            s.count))); }),
                    sessions.length === 0 && (React.createElement("p", { className: "text-sm text-muted-foreground" }, "Sin sesiones por ahora.")))),
            React.createElement("div", { className: "lg:col-span-2 bg-background rounded-2xl shadow-sm ring-1 ring-border p-4" }, active ? (React.createElement(React.Fragment, null,
                React.createElement("div", { className: "h-[420px] overflow-y-auto space-y-3 mb-4" },
                    messages.map(function (m, i) { return (React.createElement("div", { key: i, className: "flex " + (m.isUser ? "justify-start" : "justify-end") },
                        React.createElement("div", { className: "max-w-[80%] p-3 rounded-2xl text-sm " + (m.isUser ? "bg-muted text-foreground rounded-bl-md" : "bg-primary text-primary-foreground rounded-br-md") }, m.text))); }),
                    messages.length === 0 && (React.createElement("p", { className: "text-sm text-muted-foreground" }, "Sin mensajes a\u00FAn."))),
                React.createElement("div", { className: "flex gap-2" },
                    React.createElement(input_1.Input, { value: text, onChange: function (e) { return setText(e.target.value); }, placeholder: "Escribe tu respuesta..." }),
                    React.createElement(button_1.Button, { onClick: send },
                        "Enviar",
                        React.createElement(lucide_react_1.ArrowRight, { size: 16, className: "ml-2" }))))) : (React.createElement("p", { className: "text-sm text-muted-foreground" }, "Selecciona una sesi\u00F3n para empezar a chatear.")))))));
};
exports["default"] = OperatorChat;

"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var lucide_react_1 = require("lucide-react");
var framer_motion_1 = require("framer-motion");
var button_1 = require("@/components/ui/button");
var input_1 = require("@/components/ui/input");
var socket_io_client_1 = require("socket.io-client");
var ChatWidget = function () {
    var _a = react_1.useState(false), isOpen = _a[0], setIsOpen = _a[1];
    var _b = react_1.useState(""), message = _b[0], setMessage = _b[1];
    var _c = react_1.useState([
        { text: "¡Hola! 👋 ¿Buscas mejorar ROI y acelerar ventas? Cuéntanos tu objetivo.", isUser: false },
    ]), messages = _c[0], setMessages = _c[1];
    var socketRef = react_1.useRef(null);
    var sessionIdRef = react_1.useRef("");
    var _d = react_1.useState(false), showActions = _d[0], setShowActions = _d[1];
    var _e = react_1.useState(""), sessionId = _e[0], setSessionId = _e[1];
    react_1.useEffect(function () {
        var _a;
        var sid = (typeof window !== "undefined" && ((_a = window.crypto) === null || _a === void 0 ? void 0 : _a.randomUUID))
            ? window.crypto.randomUUID()
            : Date.now() + "-" + Math.random().toString(36).slice(2, 8);
        sessionIdRef.current = sid;
        setSessionId(sid);
        var socket = socket_io_client_1.io("http://localhost:3001", { withCredentials: true, transports: ["websocket"] });
        socket.on("connect", function () {
            socket.emit("join", { sessionId: sid });
        });
        socket.on("message", function (entry) {
            setMessages(function (prev) { return __spreadArrays(prev, [{ text: entry.text, isUser: entry.isUser, ts: entry.ts }]); });
        });
        socketRef.current = socket;
        return function () {
            socket.disconnect();
            socketRef.current = null;
        };
    }, []);
    var handleSend = function () {
        var _a;
        if (!message.trim())
            return;
        var text = message;
        setMessages(__spreadArrays(messages, [{ text: text, isUser: true }]));
        setMessage("");
        (_a = socketRef.current) === null || _a === void 0 ? void 0 : _a.emit("message", {
            sessionId: sessionIdRef.current,
            text: text,
            meta: { isUser: true }
        });
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "fixed bottom-6 right-6 z-50" },
            React.createElement(framer_motion_1.motion.button, { className: "w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:scale-105 transition-transform", onClick: function () {
                    if (isOpen) {
                        setIsOpen(false);
                        setShowActions(false);
                    }
                    else {
                        setShowActions(function (v) { return !v; });
                    }
                }, whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 } }, showActions || isOpen ? React.createElement(lucide_react_1.X, { size: 24 }) : React.createElement(lucide_react_1.MessageCircle, { size: 24 })),
            React.createElement(framer_motion_1.AnimatePresence, null, showActions && !isOpen && (React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: 10 }, className: "absolute bottom-16 right-0 flex flex-col items-end gap-3" },
                React.createElement("button", { className: "w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-md ring-1 ring-border flex items-center justify-center", onClick: function () {
                        setIsOpen(true);
                        setShowActions(false);
                    } },
                    React.createElement(lucide_react_1.MessageCircle, { size: 20 })),
                React.createElement("a", { href: "https://wa.me/525512345678?text=Hola%20Clipot%2C%20quiero%20mejorar%20mi%20ROI%20y%20ventas", target: "_blank", rel: "noopener noreferrer", className: "w-12 h-12 rounded-full bg-green-500 text-white shadow-md ring-1 ring-green-600 flex items-center justify-center", onClick: function () { return setShowActions(false); } },
                    React.createElement(lucide_react_1.Phone, { size: 20 })))))),
        React.createElement(framer_motion_1.AnimatePresence, null, isOpen && (React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, y: 20, scale: 0.95 }, animate: { opacity: 1, y: 0, scale: 1 }, exit: { opacity: 0, y: 20, scale: 0.95 }, className: "fixed bottom-24 right-6 z-50 w-80 md:w-96 bg-background rounded-2xl shadow-2xl ring-1 ring-border overflow-hidden" },
            React.createElement("div", { className: "bg-primary text-primary-foreground p-4" },
                React.createElement("h3", { className: "font-display font-semibold" }, "Chat con Clipot"),
                React.createElement("p", { className: "text-sm opacity-90" }, "Respondemos en menos de 5 min")),
            React.createElement("div", { className: "flex items-center justify-between px-4 py-2 text-xs text-muted-foreground bg-muted" },
                React.createElement("span", { className: "truncate" },
                    "ID: ",
                    sessionId),
                React.createElement("button", { className: "inline-flex items-center gap-1 px-2 py-1 rounded-md bg-background hover:bg-muted transition-colors", onClick: function () { var _a; return (_a = navigator.clipboard) === null || _a === void 0 ? void 0 : _a.writeText(sessionId); } },
                    React.createElement(lucide_react_1.Copy, { size: 14 }),
                    "Copiar")),
            React.createElement("div", { className: "h-72 overflow-y-auto p-4 space-y-3" }, messages.map(function (msg, index) { return (React.createElement("div", { key: index, className: "flex " + (msg.isUser ? "justify-end" : "justify-start") },
                React.createElement("div", { className: "max-w-[80%] p-3 rounded-2xl text-sm " + (msg.isUser
                        ? "bg-primary text-primary-foreground rounded-br-md"
                        : "bg-muted text-foreground rounded-bl-md") }, msg.text))); })),
            React.createElement("div", { className: "p-4 border-t border-border" },
                React.createElement("form", { onSubmit: function (e) {
                        e.preventDefault();
                        handleSend();
                    }, className: "flex gap-2" },
                    React.createElement(input_1.Input, { value: message, onChange: function (e) { return setMessage(e.target.value); }, placeholder: "Escribe tu mensaje...", className: "flex-1" }),
                    React.createElement(button_1.Button, { type: "submit", size: "icon" },
                        React.createElement(lucide_react_1.Send, { size: 18 })))))))));
};
exports["default"] = ChatWidget;

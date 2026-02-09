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
var AdminLayout_1 = require("@/components/admin/AdminLayout");
var react_1 = require("react");
var input_1 = require("@/components/ui/input");
var button_1 = require("@/components/ui/button");
var AdminIntegrations = function () {
    var token = localStorage.getItem("userToken") || "";
    var _a = react_1.useState({}), credentials = _a[0], setCredentials = _a[1];
    function load() {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("http://localhost:3001/api/integrations/credentials", {
                            headers: { Authorization: "Bearer " + token }
                        }).then(function (r) { return r.json(); })];
                    case 1:
                        res = _a.sent();
                        if (res === null || res === void 0 ? void 0 : res.ok)
                            setCredentials(res.credentials || {});
                        return [2 /*return*/];
                }
            });
        });
    }
    function save() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("http://localhost:3001/api/integrations/credentials", {
                            method: "POST",
                            headers: { "Content-Type": "application/json", Authorization: "Bearer " + token },
                            body: JSON.stringify(credentials)
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
    react_1.useEffect(function () { if (token)
        load(); }, []);
    return (React.createElement(AdminLayout_1["default"], null,
        React.createElement("h1", { className: "font-display text-2xl font-bold mb-4" }, "Integraciones"),
        React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6" },
            React.createElement("div", { className: "bg-background rounded-2xl shadow-sm ring-1 ring-border p-4" },
                React.createElement("h2", { className: "font-semibold mb-2" }, "Google Analytics"),
                React.createElement(input_1.Input, { value: credentials.gaToken || "", onChange: function (e) { return setCredentials(__assign(__assign({}, credentials), { gaToken: e.target.value })); }, placeholder: "Token" })),
            React.createElement("div", { className: "bg-background rounded-2xl shadow-sm ring-1 ring-border p-4" },
                React.createElement("h2", { className: "font-semibold mb-2" }, "Meta"),
                React.createElement(input_1.Input, { value: credentials.metaToken || "", onChange: function (e) { return setCredentials(__assign(__assign({}, credentials), { metaToken: e.target.value })); }, placeholder: "Token" })),
            React.createElement("div", { className: "bg-background rounded-2xl shadow-sm ring-1 ring-border p-4" },
                React.createElement("h2", { className: "font-semibold mb-2" }, "WordPress"),
                React.createElement(input_1.Input, { value: credentials.wpUrl || "", onChange: function (e) { return setCredentials(__assign(__assign({}, credentials), { wpUrl: e.target.value })); }, placeholder: "URL" }),
                React.createElement(input_1.Input, { value: credentials.wpUser || "", onChange: function (e) { return setCredentials(__assign(__assign({}, credentials), { wpUser: e.target.value })); }, placeholder: "Usuario", className: "mt-2" }),
                React.createElement(input_1.Input, { value: credentials.wpPass || "", onChange: function (e) { return setCredentials(__assign(__assign({}, credentials), { wpPass: e.target.value })); }, placeholder: "Contrase\u00F1a", className: "mt-2" })),
            React.createElement("div", { className: "bg-background rounded-2xl shadow-sm ring-1 ring-border p-4" },
                React.createElement("h2", { className: "font-semibold mb-2" }, "Shopify"),
                React.createElement(input_1.Input, { value: credentials.shopUrl || "", onChange: function (e) { return setCredentials(__assign(__assign({}, credentials), { shopUrl: e.target.value })); }, placeholder: "Store URL" }),
                React.createElement(input_1.Input, { value: credentials.shopToken || "", onChange: function (e) { return setCredentials(__assign(__assign({}, credentials), { shopToken: e.target.value })); }, placeholder: "Token", className: "mt-2" }))),
        React.createElement(button_1.Button, { onClick: save, className: "mt-4" }, "Guardar")));
};
exports["default"] = AdminIntegrations;

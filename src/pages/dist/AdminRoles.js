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
var button_1 = require("@/components/ui/button");
var AdminRoles = function () {
    var token = localStorage.getItem("userToken") || localStorage.getItem("adminToken") || "";
    var _a = react_1.useState([]), users = _a[0], setUsers = _a[1];
    var _b = react_1.useState(false), loading = _b[0], setLoading = _b[1];
    function load() {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        setLoading(true);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, , 3, 4]);
                        return [4 /*yield*/, fetch("http://localhost:3001/api/admin/users", {
                                headers: { Authorization: "Bearer " + token }
                            }).then(function (r) { return r.json(); })];
                    case 2:
                        res = _a.sent();
                        if (res === null || res === void 0 ? void 0 : res.ok)
                            setUsers(res.users || []);
                        return [3 /*break*/, 4];
                    case 3:
                        setLoading(false);
                        return [7 /*endfinally*/];
                    case 4: return [2 /*return*/];
                }
            });
        });
    }
    function changeRole(u, role) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("http://localhost:3001/api/admin/users/role", {
                            method: "POST",
                            headers: { "Content-Type": "application/json", Authorization: "Bearer " + token },
                            body: JSON.stringify({ userId: u.id, role: role })
                        })];
                    case 1:
                        _a.sent();
                        setUsers(users.map(function (x) { return x.id === u.id ? __assign(__assign({}, x), { role: role }) : x; }));
                        return [2 /*return*/];
                }
            });
        });
    }
    react_1.useEffect(function () { load(); }, []);
    return (React.createElement(AdminLayout_1["default"], null,
        React.createElement("h1", { className: "font-display text-2xl font-bold mb-4" }, "Roles de Usuarios"),
        React.createElement(button_1.Button, { variant: "outline", size: "sm", onClick: load, disabled: loading }, "Actualizar"),
        React.createElement("div", { className: "mt-4 space-y-3" },
            users.map(function (u) { return (React.createElement("div", { key: u.id, className: "p-3 rounded-xl border border-border flex items-center justify-between" },
                React.createElement("div", null,
                    React.createElement("div", { className: "font-medium" }, u.email),
                    React.createElement("div", { className: "text-xs text-muted-foreground" }, new Date(u.created_at).toLocaleString())),
                React.createElement("div", { className: "flex items-center gap-2" },
                    React.createElement("span", { className: "text-sm" }, "Rol"),
                    React.createElement("select", { className: "border rounded-md px-2 py-1 text-sm", value: u.role || "", onChange: function (e) { return changeRole(u, e.target.value); } },
                        React.createElement("option", { value: "" }, "user"),
                        React.createElement("option", { value: "operator" }, "operator"),
                        React.createElement("option", { value: "admin" }, "admin"))))); }),
            users.length === 0 && (React.createElement("p", { className: "text-sm text-muted-foreground" }, "Sin usuarios a\u00FAn.")))));
};
exports["default"] = AdminRoles;

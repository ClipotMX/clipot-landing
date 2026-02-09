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
var button_1 = require("@/components/ui/button");
var recharts_1 = require("recharts");
var AdminReports = function () {
    var token = localStorage.getItem("userToken") || "";
    var _a = react_1.useState({ metrics: [] }), ga = _a[0], setGa = _a[1];
    var _b = react_1.useState({ metrics: [] }), meta = _b[0], setMeta = _b[1];
    function load() {
        return __awaiter(this, void 0, void 0, function () {
            var a, m;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("http://localhost:3001/api/integrations/google-analytics", { headers: { Authorization: "Bearer " + token } }).then(function (r) { return r.json(); })];
                    case 1:
                        a = _a.sent();
                        return [4 /*yield*/, fetch("http://localhost:3001/api/integrations/meta", { headers: { Authorization: "Bearer " + token } }).then(function (r) { return r.json(); })];
                    case 2:
                        m = _a.sent();
                        setGa(a);
                        setMeta(m);
                        return [2 /*return*/];
                }
            });
        });
    }
    function exportCSV() {
        var rows = __spreadArrays([["metric", "value"]], __spreadArrays(ga.metrics, meta.metrics).map(function (x) { return [x.name, x.value]; }));
        var csv = rows.map(function (r) { return r.join(","); }).join("\n");
        var blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
        var url = URL.createObjectURL(blob);
        var a = document.createElement("a");
        a.href = url;
        a.download = "report.csv";
        a.click();
        URL.revokeObjectURL(url);
    }
    react_1.useEffect(function () { if (token)
        load(); }, []);
    var data = ga.metrics.map(function (m, i) { return ({ name: m.name, value: m.value }); }) || [];
    return (React.createElement(AdminLayout_1["default"], null,
        React.createElement("h1", { className: "font-display text-2xl font-bold mb-4" }, "Reportes"),
        React.createElement("div", { className: "bg-background rounded-2xl shadow-sm ring-1 ring-border p-4 mb-4" },
            React.createElement(recharts_1.ResponsiveContainer, { width: "100%", height: 300 },
                React.createElement(recharts_1.LineChart, { data: data },
                    React.createElement(recharts_1.CartesianGrid, { strokeDasharray: "3 3" }),
                    React.createElement(recharts_1.XAxis, { dataKey: "name" }),
                    React.createElement(recharts_1.YAxis, null),
                    React.createElement(recharts_1.Tooltip, null),
                    React.createElement(recharts_1.Line, { type: "monotone", dataKey: "value", stroke: "#7c3aed" })))),
        React.createElement(button_1.Button, { onClick: exportCSV }, "Exportar CSV")));
};
exports["default"] = AdminReports;

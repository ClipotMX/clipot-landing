"use strict";
exports.__esModule = true;
exports.ProtectedAdminRoute = exports.ProtectedUserRoute = void 0;
var react_router_dom_1 = require("react-router-dom");
var supabase_js_1 = require("@supabase/supabase-js");
exports.ProtectedUserRoute = function (_a) {
    var element = _a.element;
    var token = typeof window !== "undefined" ? localStorage.getItem("userToken") : null;
    if (!token)
        return React.createElement(react_router_dom_1.Navigate, { to: "/admin/login", replace: true });
    return element;
};
exports.ProtectedAdminRoute = function (_a) {
    var _b, _c, _d;
    var element = _a.element;
    var adminToken = typeof window !== "undefined" ? localStorage.getItem("adminToken") : null;
    if (adminToken)
        return element;
    var supabaseUrl = (_b = import.meta.env) === null || _b === void 0 ? void 0 : _b.VITE_SUPABASE_URL;
    var supabaseAnon = (_c = import.meta.env) === null || _c === void 0 ? void 0 : _c.VITE_SUPABASE_ANON_KEY;
    if (!supabaseUrl || !supabaseAnon)
        return React.createElement(react_router_dom_1.Navigate, { to: "/admin/login", replace: true });
    var supabase = supabase_js_1.createClient(supabaseUrl, supabaseAnon);
    var user = (typeof window !== "undefined" && window.__supabase_user_cache) || null;
    if (user && ["admin", "operator"].includes(((_d = user === null || user === void 0 ? void 0 : user.app_metadata) === null || _d === void 0 ? void 0 : _d.role) || ""))
        return element;
    return React.createElement(react_router_dom_1.Navigate, { to: "/admin/login", replace: true });
};

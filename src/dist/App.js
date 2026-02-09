"use strict";
exports.__esModule = true;
var toaster_1 = require("@/components/ui/toaster");
var sonner_1 = require("@/components/ui/sonner");
var tooltip_1 = require("@/components/ui/tooltip");
var react_query_1 = require("@tanstack/react-query");
var react_router_dom_1 = require("react-router-dom");
var Index_1 = require("./pages/Index");
var Nosotros_1 = require("./pages/Nosotros");
var Servicios_1 = require("./pages/Servicios");
var ServicioDetalle_1 = require("./pages/ServicioDetalle");
var Portfolio_1 = require("./pages/Portfolio");
var Kommo_1 = require("./pages/Kommo");
var Blog_1 = require("./pages/Blog");
var BlogPost_1 = require("./pages/BlogPost");
var Contacto_1 = require("./pages/Contacto");
var Privacidad_1 = require("./pages/Privacidad");
var Terminos_1 = require("./pages/Terminos");
var NotFound_1 = require("./pages/NotFound");
var OperatorChat_1 = require("./pages/OperatorChat");
var AdminLogin_1 = require("./pages/AdminLogin");
var AdminDashboard_1 = require("./pages/AdminDashboard");
var AdminCMS_1 = require("./pages/AdminCMS");
var AdminEmailEditor_1 = require("./pages/AdminEmailEditor");
var AdminIntegrations_1 = require("./pages/AdminIntegrations");
var AdminReports_1 = require("./pages/AdminReports");
var ProtectedRoute_1 = require("./components/ProtectedRoute");
var AdminRoles_1 = require("./pages/AdminRoles");
var AdminPostEditor_1 = require("./pages/AdminPostEditor");
var AdminTaxonomies_1 = require("./pages/AdminTaxonomies");
var queryClient = new react_query_1.QueryClient();
var App = function () { return (React.createElement(react_query_1.QueryClientProvider, { client: queryClient },
    React.createElement(tooltip_1.TooltipProvider, null,
        React.createElement(toaster_1.Toaster, null),
        React.createElement(sonner_1.Toaster, null),
        React.createElement(react_router_dom_1.BrowserRouter, null,
            React.createElement(react_router_dom_1.Routes, null,
                React.createElement(react_router_dom_1.Route, { path: "/", element: React.createElement(Index_1["default"], null) }),
                React.createElement(react_router_dom_1.Route, { path: "/nosotros", element: React.createElement(Nosotros_1["default"], null) }),
                React.createElement(react_router_dom_1.Route, { path: "/servicios", element: React.createElement(Servicios_1["default"], null) }),
                React.createElement(react_router_dom_1.Route, { path: "/servicios/:slug", element: React.createElement(ServicioDetalle_1["default"], null) }),
                React.createElement(react_router_dom_1.Route, { path: "/portfolio", element: React.createElement(Portfolio_1["default"], null) }),
                React.createElement(react_router_dom_1.Route, { path: "/kommo", element: React.createElement(Kommo_1["default"], null) }),
                React.createElement(react_router_dom_1.Route, { path: "/blog", element: React.createElement(Blog_1["default"], null) }),
                React.createElement(react_router_dom_1.Route, { path: "/blog/:slug", element: React.createElement(BlogPost_1["default"], null) }),
                React.createElement(react_router_dom_1.Route, { path: "/contacto", element: React.createElement(Contacto_1["default"], null) }),
                React.createElement(react_router_dom_1.Route, { path: "/privacidad", element: React.createElement(Privacidad_1["default"], null) }),
                React.createElement(react_router_dom_1.Route, { path: "/terminos", element: React.createElement(Terminos_1["default"], null) }),
                React.createElement(react_router_dom_1.Route, { path: "/admin/chat", element: React.createElement(ProtectedRoute_1.ProtectedAdminRoute, { element: React.createElement(OperatorChat_1["default"], null) }) }),
                React.createElement(react_router_dom_1.Route, { path: "/admin/login", element: React.createElement(AdminLogin_1["default"], null) }),
                React.createElement(react_router_dom_1.Route, { path: "/admin/dashboard", element: React.createElement(ProtectedRoute_1.ProtectedUserRoute, { element: React.createElement(AdminDashboard_1["default"], null) }) }),
                React.createElement(react_router_dom_1.Route, { path: "/admin/cms", element: React.createElement(ProtectedRoute_1.ProtectedUserRoute, { element: React.createElement(AdminCMS_1["default"], null) }) }),
                React.createElement(react_router_dom_1.Route, { path: "/admin/email", element: React.createElement(ProtectedRoute_1.ProtectedUserRoute, { element: React.createElement(AdminEmailEditor_1["default"], null) }) }),
                React.createElement(react_router_dom_1.Route, { path: "/admin/integraciones", element: React.createElement(ProtectedRoute_1.ProtectedUserRoute, { element: React.createElement(AdminIntegrations_1["default"], null) }) }),
                React.createElement(react_router_dom_1.Route, { path: "/admin/reportes", element: React.createElement(ProtectedRoute_1.ProtectedUserRoute, { element: React.createElement(AdminReports_1["default"], null) }) }),
                React.createElement(react_router_dom_1.Route, { path: "/admin/roles", element: React.createElement(ProtectedRoute_1.ProtectedAdminRoute, { element: React.createElement(AdminRoles_1["default"], null) }) }),
                React.createElement(react_router_dom_1.Route, { path: "/admin/cms/post/new", element: React.createElement(ProtectedRoute_1.ProtectedUserRoute, { element: React.createElement(AdminPostEditor_1["default"], null) }) }),
                React.createElement(react_router_dom_1.Route, { path: "/admin/cms/post/:id", element: React.createElement(ProtectedRoute_1.ProtectedUserRoute, { element: React.createElement(AdminPostEditor_1["default"], null) }) }),
                React.createElement(react_router_dom_1.Route, { path: "/admin/cms/taxonomias", element: React.createElement(ProtectedRoute_1.ProtectedAdminRoute, { element: React.createElement(AdminTaxonomies_1["default"], null) }) }),
                React.createElement(react_router_dom_1.Route, { path: "*", element: React.createElement(NotFound_1["default"], null) })))))); };
exports["default"] = App;

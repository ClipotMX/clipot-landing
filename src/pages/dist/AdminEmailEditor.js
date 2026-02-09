"use strict";
exports.__esModule = true;
var AdminLayout_1 = require("@/components/admin/AdminLayout");
var react_1 = require("react");
var grapesjs_1 = require("grapesjs");
var button_1 = require("@/components/ui/button");
var AdminEmailEditor = function () {
    var editorRef = react_1.useRef(null);
    var _a = react_1.useState(""), html = _a[0], setHtml = _a[1];
    var _b = react_1.useState(""), css = _b[0], setCss = _b[1];
    react_1.useEffect(function () {
        var editor = grapesjs_1["default"].init({
            container: "#gjs",
            height: "500px",
            fromElement: false,
            storageManager: { type: null },
            plugins: []
        });
        editorRef.current = editor;
        return function () {
            editor.destroy();
            editorRef.current = null;
        };
    }, []);
    function exportCode() {
        if (!editorRef.current)
            return;
        setHtml(editorRef.current.getHtml());
        setCss(editorRef.current.getCss());
    }
    return (React.createElement(AdminLayout_1["default"], null,
        React.createElement("h1", { className: "font-display text-2xl font-bold mb-4" }, "Editor de Emails"),
        React.createElement("div", { id: "gjs", className: "bg-background rounded-2xl shadow-sm ring-1 ring-border mb-4" }),
        React.createElement(button_1.Button, { onClick: exportCode }, "Exportar"),
        html && (React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 mt-4" },
            React.createElement("div", { className: "p-4 rounded-2xl ring-1 ring-border" },
                React.createElement("h2", { className: "font-semibold mb-2" }, "HTML"),
                React.createElement("pre", { className: "text-xs whitespace-pre-wrap" }, html)),
            React.createElement("div", { className: "p-4 rounded-2xl ring-1 ring-border" },
                React.createElement("h2", { className: "font-semibold mb-2" }, "CSS"),
                React.createElement("pre", { className: "text-xs whitespace-pre-wrap" }, css))))));
};
exports["default"] = AdminEmailEditor;

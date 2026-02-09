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
var input_1 = require("@/components/ui/input");
var button_1 = require("@/components/ui/button");
var react_quill_1 = require("react-quill");
require("react-quill/dist/quill.snow.css");
var supabase_js_1 = require("@supabase/supabase-js");
var AdminCMS = function () {
    var _a, _b;
    var token = localStorage.getItem("userToken") || "";
    var _c = react_1.useState([]), posts = _c[0], setPosts = _c[1];
    var _d = react_1.useState([]), media = _d[0], setMedia = _d[1];
    var _e = react_1.useState(""), title = _e[0], setTitle = _e[1];
    var _f = react_1.useState(""), content = _f[0], setContent = _f[1];
    var _g = react_1.useState("draft"), status = _g[0], setStatus = _g[1];
    var _h = react_1.useState(""), category = _h[0], setCategory = _h[1];
    var _j = react_1.useState(""), image = _j[0], setImage = _j[1];
    var _k = react_1.useState(""), readTime = _k[0], setReadTime = _k[1];
    var _l = react_1.useState(""), publishAt = _l[0], setPublishAt = _l[1];
    var _m = react_1.useState(""), url = _m[0], setUrl = _m[1];
    var _o = react_1.useState(""), alt = _o[0], setAlt = _o[1];
    var _p = react_1.useState(null), postImageFile = _p[0], setPostImageFile = _p[1];
    var _q = react_1.useState(""), postImagePreview = _q[0], setPostImagePreview = _q[1];
    var _r = react_1.useState(0), postImageProgress = _r[0], setPostImageProgress = _r[1];
    var _s = react_1.useState(null), file = _s[0], setFile = _s[1];
    var _t = react_1.useState(""), preview = _t[0], setPreview = _t[1];
    var _u = react_1.useState(0), progress = _u[0], setProgress = _u[1];
    var supabaseUrl = (_a = import.meta.env) === null || _a === void 0 ? void 0 : _a.VITE_SUPABASE_URL;
    var supabaseAnon = (_b = import.meta.env) === null || _b === void 0 ? void 0 : _b.VITE_SUPABASE_ANON_KEY;
    var supabase = (supabaseUrl && supabaseAnon) ? supabase_js_1.createClient(supabaseUrl, supabaseAnon) : null;
    function load() {
        return __awaiter(this, void 0, void 0, function () {
            var p, m;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("http://localhost:3001/api/cms/posts", { headers: { Authorization: "Bearer " + token } }).then(function (r) { return r.json(); })];
                    case 1:
                        p = _a.sent();
                        return [4 /*yield*/, fetch("http://localhost:3001/api/cms/media", { headers: { Authorization: "Bearer " + token } }).then(function (r) { return r.json(); })];
                    case 2:
                        m = _a.sent();
                        setPosts(p.items || []);
                        setMedia(m.items || []);
                        return [2 /*return*/];
                }
            });
        });
    }
    function addPost() {
        return __awaiter(this, void 0, void 0, function () {
            var rt, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!title.trim())
                            return [2 /*return*/];
                        rt = readTime || Math.max(1, Math.round(String(content).split(/\s+/).length / 200)) + " min";
                        return [4 /*yield*/, fetch("http://localhost:3001/api/cms/posts", {
                                method: "POST",
                                headers: { "Content-Type": "application/json", Authorization: "Bearer " + token },
                                body: JSON.stringify({ title: title, content: content, status: status, image: image, category: category, readTime: rt, publishAt: publishAt })
                            }).then(function (r) { return r.json(); })];
                    case 1:
                        res = _a.sent();
                        if (res === null || res === void 0 ? void 0 : res.ok) {
                            setPosts(__spreadArrays([res.item], posts));
                            setTitle("");
                            setContent("");
                            setStatus("draft");
                            setCategory("");
                            setImage("");
                            setReadTime("");
                            setPublishAt("");
                        }
                        return [2 /*return*/];
                }
            });
        });
    }
    function addMedia() {
        return __awaiter(this, void 0, void 0, function () {
            var path, up, pu, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(supabase && file)) return [3 /*break*/, 2];
                        path = Date.now() + "_" + file.name;
                        setProgress(10);
                        return [4 /*yield*/, supabase.storage.from("media").upload(path, file, { upsert: true })];
                    case 1:
                        up = _a.sent();
                        if (!up.error) {
                            pu = supabase.storage.from("media").getPublicUrl(path);
                            setUrl(pu.data.publicUrl);
                            setProgress(100);
                        }
                        _a.label = 2;
                    case 2:
                        if (!url.trim())
                            return [2 /*return*/];
                        return [4 /*yield*/, fetch("http://localhost:3001/api/cms/media", {
                                method: "POST",
                                headers: { "Content-Type": "application/json", Authorization: "Bearer " + token },
                                body: JSON.stringify({ url: url, alt: alt })
                            }).then(function (r) { return r.json(); })];
                    case 3:
                        res = _a.sent();
                        if (res === null || res === void 0 ? void 0 : res.ok) {
                            setMedia(__spreadArrays([res.item], media));
                            setUrl("");
                            setAlt("");
                            setFile(null);
                            setPreview("");
                            setProgress(0);
                        }
                        return [2 /*return*/];
                }
            });
        });
    }
    react_1.useEffect(function () { if (token)
        load(); }, []);
    return (React.createElement(AdminLayout_1["default"], null,
        React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6" },
            React.createElement("div", { className: "bg-background rounded-2xl shadow-sm ring-1 ring-border p-4" },
                React.createElement("h2", { className: "font-semibold mb-3" }, "Nuevo Post"),
                React.createElement("div", { className: "space-y-3" },
                    React.createElement(input_1.Input, { value: title, onChange: function (e) { return setTitle(e.target.value); }, placeholder: "T\u00EDtulo" }),
                    React.createElement(react_quill_1["default"], { theme: "snow", value: content, onChange: setContent }),
                    React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-2" },
                        React.createElement("select", { className: "border rounded-md px-2 py-2 text-sm w-full", value: status, onChange: function (e) { return setStatus(e.target.value); } },
                            React.createElement("option", { value: "draft" }, "Borrador"),
                            React.createElement("option", { value: "published" }, "Publicado")),
                        React.createElement(input_1.Input, { type: "datetime-local", value: publishAt, onChange: function (e) { return setPublishAt(e.target.value); }, placeholder: "Programaci\u00F3n" })),
                    React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-2" },
                        React.createElement("select", { className: "border rounded-md px-2 py-2 text-sm w-full", value: category, onChange: function (e) { return setCategory(e.target.value); } },
                            React.createElement("option", { value: "" }, "Selecciona categor\u00EDa"),
                            React.createElement("option", { value: "Gesti\u00F3n de Leads" }, "Gesti\u00F3n de Leads"),
                            React.createElement("option", { value: "Paid Media" }, "Paid Media"),
                            React.createElement("option", { value: "Estrategia" }, "Estrategia"),
                            React.createElement("option", { value: "Automatizaci\u00F3n" }, "Automatizaci\u00F3n"),
                            React.createElement("option", { value: "Content" }, "Content"),
                            React.createElement("option", { value: "Herramientas" }, "Herramientas")),
                        React.createElement(input_1.Input, { value: readTime, onChange: function (e) { return setReadTime(e.target.value); }, placeholder: "Tiempo de lectura (ej. 5 min)" })),
                    React.createElement("div", { className: "space-y-2" },
                        React.createElement("div", { className: "border-2 border-dashed rounded-xl p-4 text-center cursor-pointer", onDragOver: function (e) { e.preventDefault(); }, onDrop: function (e) { return __awaiter(void 0, void 0, void 0, function () {
                                var f, path, up, pu;
                                var _a;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            e.preventDefault();
                                            f = (_a = e.dataTransfer.files) === null || _a === void 0 ? void 0 : _a[0];
                                            if (!(f && supabase)) return [3 /*break*/, 2];
                                            setPostImageFile(f);
                                            setPostImagePreview(URL.createObjectURL(f));
                                            setPostImageProgress(10);
                                            path = "posts/" + Date.now() + "_" + f.name;
                                            return [4 /*yield*/, supabase.storage.from("media").upload(path, f, { upsert: true })];
                                        case 1:
                                            up = _b.sent();
                                            if (!up.error) {
                                                pu = supabase.storage.from("media").getPublicUrl(path);
                                                setImage(pu.data.publicUrl);
                                                setPostImageProgress(100);
                                            }
                                            else {
                                                setPostImageProgress(0);
                                            }
                                            _b.label = 2;
                                        case 2: return [2 /*return*/];
                                    }
                                });
                            }); }, onClick: function () {
                                var input = document.getElementById("post-image-input");
                                input === null || input === void 0 ? void 0 : input.click();
                            } },
                            React.createElement("p", { className: "text-sm text-muted-foreground" }, "Imagen destacada: arrastra o haz clic para subir"),
                            postImagePreview && React.createElement("img", { src: postImagePreview, alt: "preview", className: "mt-3 mx-auto h-24 object-cover rounded-md" }),
                            postImageProgress > 0 && (React.createElement("div", { className: "mt-3 w-full h-2 bg-muted rounded" },
                                React.createElement("div", { className: "h-2 bg-primary rounded", style: { width: postImageProgress + "%" } })))),
                        React.createElement(input_1.Input, { id: "post-image-input", type: "file", className: "hidden", onChange: function (e) { return __awaiter(void 0, void 0, void 0, function () {
                                var f, path, up, pu;
                                var _a;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            f = ((_a = e.target.files) === null || _a === void 0 ? void 0 : _a[0]) || null;
                                            if (!(f && supabase)) return [3 /*break*/, 2];
                                            setPostImageFile(f);
                                            setPostImagePreview(URL.createObjectURL(f));
                                            setPostImageProgress(10);
                                            path = "posts/" + Date.now() + "_" + f.name;
                                            return [4 /*yield*/, supabase.storage.from("media").upload(path, f, { upsert: true })];
                                        case 1:
                                            up = _b.sent();
                                            if (!up.error) {
                                                pu = supabase.storage.from("media").getPublicUrl(path);
                                                setImage(pu.data.publicUrl);
                                                setPostImageProgress(100);
                                            }
                                            else {
                                                setPostImageProgress(0);
                                            }
                                            _b.label = 2;
                                        case 2: return [2 /*return*/];
                                    }
                                });
                            }); } }),
                        React.createElement(input_1.Input, { value: image, onChange: function (e) { return setImage(e.target.value); }, placeholder: "o pega una URL" })),
                    React.createElement(button_1.Button, { onClick: addPost, className: "w-full" }, "Publicar"))),
            React.createElement("div", { className: "lg:col-span-2 bg-background rounded-2xl shadow-sm ring-1 ring-border p-4" },
                React.createElement("h2", { className: "font-semibold mb-3" }, "Posts"),
                React.createElement("div", { className: "space-y-2" },
                    React.createElement("div", { className: "flex justify-end mb-2" },
                        React.createElement(button_1.Button, { variant: "outline", onClick: function () { return window.location.href = "/admin/cms/post/new"; } }, "Nuevo Post")),
                    posts.map(function (p) { return (React.createElement("div", { key: p.id, className: "p-3 rounded-xl border border-border" },
                        React.createElement("div", { className: "flex items-start gap-3" },
                            p.image && React.createElement("img", { src: p.image, alt: p.title, className: "w-20 h-20 object-cover rounded-md" }),
                            React.createElement("div", { className: "flex-1" },
                                React.createElement("div", { className: "font-medium" }, p.title),
                                React.createElement("div", { className: "text-xs text-muted-foreground flex items-center gap-2 mt-1" },
                                    p.category && React.createElement("span", { className: "px-2 py-0.5 rounded-full ring-1 ring-border" }, p.category),
                                    React.createElement("span", { className: "px-2 py-0.5 rounded-full ring-1 ring-border" }, p.readTime || "5 min"),
                                    React.createElement("select", { className: "border rounded-md px-2 py-1 text-xs", value: p.status, onChange: function (e) { return __awaiter(void 0, void 0, void 0, function () {
                                            var newStatus;
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        newStatus = e.target.value;
                                                        return [4 /*yield*/, fetch("http://localhost:3001/api/cms/posts/" + p.id, {
                                                                method: "PUT",
                                                                headers: { "Content-Type": "application/json", Authorization: "Bearer " + token },
                                                                body: JSON.stringify({ status: newStatus })
                                                            }).then(function (r) { return r.json(); })];
                                                    case 1:
                                                        _a.sent();
                                                        setPosts(posts.map(function (x) { return x.id === p.id ? __assign(__assign({}, x), { status: newStatus }) : x; }));
                                                        return [2 /*return*/];
                                                }
                                            });
                                        }); } },
                                        React.createElement("option", { value: "draft" }, "Borrador"),
                                        React.createElement("option", { value: "published" }, "Publicado"))),
                                React.createElement("div", { className: "text-sm mt-2 line-clamp-2" }, String(p.content || "").replace(/<[^>]+>/g, "")),
                                React.createElement("div", { className: "mt-2" },
                                    React.createElement(button_1.Button, { variant: "outline", size: "sm", onClick: function () { return window.location.href = "/admin/cms/post/" + p.id; } }, "Editar")))))); }),
                    posts.length === 0 && React.createElement("p", { className: "text-sm text-muted-foreground" }, "Sin posts a\u00FAn.")))),
        React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8" },
            React.createElement("div", { className: "bg-background rounded-2xl shadow-sm ring-1 ring-border p-4" },
                React.createElement("h2", { className: "font-semibold mb-3" }, "Nueva Media"),
                React.createElement("div", { className: "space-y-2" },
                    React.createElement("div", { className: "border-2 border-dashed rounded-xl p-6 text-center cursor-pointer", onDragOver: function (e) { e.preventDefault(); }, onDrop: function (e) {
                            var _a;
                            e.preventDefault();
                            var f = (_a = e.dataTransfer.files) === null || _a === void 0 ? void 0 : _a[0];
                            if (f) {
                                setFile(f);
                                setPreview(URL.createObjectURL(f));
                            }
                        }, onClick: function () {
                            var input = document.getElementById("file-input");
                            input === null || input === void 0 ? void 0 : input.click();
                        } },
                        React.createElement("p", { className: "text-sm text-muted-foreground" }, "Arrastra aqu\u00ED tu imagen o haz clic para seleccionar"),
                        preview && React.createElement("img", { src: preview, alt: "preview", className: "mt-3 mx-auto h-24 object-cover rounded-md" }),
                        progress > 0 && (React.createElement("div", { className: "mt-3 w-full h-2 bg-muted rounded" },
                            React.createElement("div", { className: "h-2 bg-primary rounded", style: { width: progress + "%" } })))),
                    React.createElement(input_1.Input, { id: "file-input", type: "file", className: "hidden", onChange: function (e) {
                            var _a;
                            var f = ((_a = e.target.files) === null || _a === void 0 ? void 0 : _a[0]) || null;
                            setFile(f);
                            setPreview(f ? URL.createObjectURL(f) : "");
                        } }),
                    React.createElement(input_1.Input, { value: url, onChange: function (e) { return setUrl(e.target.value); }, placeholder: "URL de imagen" }),
                    React.createElement(input_1.Input, { value: alt, onChange: function (e) { return setAlt(e.target.value); }, placeholder: "Alt" }),
                    React.createElement(button_1.Button, { onClick: addMedia }, "Agregar"))),
            React.createElement("div", { className: "lg:col-span-2 bg-background rounded-2xl shadow-sm ring-1 ring-border p-4" },
                React.createElement("h2", { className: "font-semibold mb-3" }, "Media"),
                React.createElement("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-3" },
                    media.map(function (m) { return (React.createElement("div", { key: m.id, className: "p-3 rounded-xl border border-border" },
                        React.createElement("img", { src: m.url, alt: m.alt, className: "w-full h-24 object-cover rounded-md" }),
                        React.createElement("div", { className: "text-xs mt-1" }, m.alt))); }),
                    media.length === 0 && React.createElement("p", { className: "text-sm text-muted-foreground" }, "Sin media a\u00FAn."))))));
};
exports["default"] = AdminCMS;

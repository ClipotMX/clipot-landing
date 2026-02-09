"use strict";
exports.__esModule = true;
var vite_1 = require("vite");
var plugin_react_swc_1 = require("@vitejs/plugin-react-swc");
var path_1 = require("path");
var lovable_tagger_1 = require("lovable-tagger");
// https://vitejs.dev/config/
exports["default"] = vite_1.defineConfig(function (_a) {
    var mode = _a.mode;
    return ({
        server: {
            host: "::",
            port: 8080,
            hmr: {
                overlay: false
            },
            proxy: {
                "/api": {
                    target: "http://localhost:3001",
                    changeOrigin: true,
                    secure: false
                }
            }
        },
        plugins: [plugin_react_swc_1["default"](), mode === "development" && lovable_tagger_1.componentTagger()].filter(Boolean),
        resolve: {
            alias: {
                "@": path_1["default"].resolve(__dirname, "./src")
            }
        }
    });
});

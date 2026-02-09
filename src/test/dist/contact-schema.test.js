"use strict";
exports.__esModule = true;
var vitest_1 = require("vitest");
var contact_schema_1 = require("@/lib/contact-schema");
vitest_1.describe("contactSchema", function () {
    vitest_1.it("valida un payload correcto", function () {
        var data = {
            name: "Juan Pérez",
            email: "juan@example.com",
            message: "Necesito ayuda con marketing digital."
        };
        var parsed = contact_schema_1.contactSchema.safeParse(data);
        vitest_1.expect(parsed.success).toBe(true);
    });
    vitest_1.it("rechaza email inválido y mensaje corto", function () {
        var data = {
            name: "J",
            email: "invalido",
            message: "corto"
        };
        var parsed = contact_schema_1.contactSchema.safeParse(data);
        vitest_1.expect(parsed.success).toBe(false);
        var errs = parsed.success ? [] : parsed.error.errors.map(function (e) { return e.path.join("."); });
        vitest_1.expect(errs).toContain("name");
        vitest_1.expect(errs).toContain("email");
        vitest_1.expect(errs).toContain("message");
    });
});

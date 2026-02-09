import { describe, expect, it } from "vitest";
import { contactSchema } from "@/lib/contact-schema";

describe("contactSchema", () => {
  it("valida un payload correcto", () => {
    const data = {
      name: "Juan Pérez",
      email: "juan@example.com",
      message: "Necesito ayuda con marketing digital.",
    };
    const parsed = contactSchema.safeParse(data);
    expect(parsed.success).toBe(true);
  });

  it("rechaza email inválido y mensaje corto", () => {
    const data = {
      name: "J",
      email: "invalido",
      message: "corto",
    };
    const parsed = contactSchema.safeParse(data);
    expect(parsed.success).toBe(false);
    const errs = parsed.success ? [] : parsed.error.errors.map((e) => e.path.join("."));
    expect(errs).toContain("name");
    expect(errs).toContain("email");
    expect(errs).toContain("message");
  });
});

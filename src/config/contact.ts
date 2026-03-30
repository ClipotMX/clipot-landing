export const CLIPOT_PHONE_E164 = "+525512345678";
export const CLIPOT_PHONE_DISPLAY = "+52 55 1234 5678";
export const CLIPOT_WHATSAPP_NUMBER = "525512345678";

export function buildWhatsAppUrl(message: string) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${CLIPOT_WHATSAPP_NUMBER}?text=${text}`;
}


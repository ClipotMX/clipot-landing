export const CLIPOT_PHONE_E164 = "+523341845712";
export const CLIPOT_PHONE_DISPLAY = "+52 33 4184 5712";
export const CLIPOT_WHATSAPP_NUMBER = "523341845712";

export function buildWhatsAppUrl(message: string) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${CLIPOT_WHATSAPP_NUMBER}?text=${text}`;
}


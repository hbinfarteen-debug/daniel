export const PHONE = '+263771539643';
export const PHONE_DISPLAY = '+263 771 539 643';
export const PHONE_TEL = `tel:${PHONE}`;

export const WA_BASE = 'https://wa.me/263771539643';

export function waUrl(message: string) {
  return `${WA_BASE}?text=${encodeURIComponent(message)}`;
}

export const WA_DEFAULT_MESSAGE = "Hi Daniel's Arctic Touch, I would like assistance.";

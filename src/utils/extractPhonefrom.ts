export const extractPhoneFrom = (phone: string | null | undefined): string =>
  phone?.replaceAll(/\D/g, '') || '';

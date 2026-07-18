import { randomBytes } from 'crypto';
import { SHORT_CODE_REGEX } from './academy-url.util';

export function generateShortCode(length = 8): string {
  return randomBytes(Math.ceil(length / 2))
    .toString('hex')
    .slice(0, length);
}

export function normalizeShortCode(code: string): string {
  return code.trim();
}

export function assertValidCustomShortCode(code: string): void {
  const normalized = normalizeShortCode(code);
  if (!SHORT_CODE_REGEX.test(normalized)) {
    throw new Error(
      'Short code must be 4-32 characters and contain only letters, numbers, underscore, or hyphen',
    );
  }
}

export function generateReferralCode(length = 12): string {
  return randomBytes(Math.ceil(length / 2))
    .toString('hex')
    .slice(0, length);
}

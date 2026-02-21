import { randomBytes } from 'crypto';

const TOKEN_BYTES = 24;
const MAX_RETRIES = 5;

/**
 * Generate a URL-safe unique token for share links.
 * Uses base64url encoding (no +, /, =).
 */
export function generateShareToken(): string {
  const buf = randomBytes(TOKEN_BYTES);
  return buf
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

/**
 * Validate token format (basic sanity check).
 * Returns true if token looks valid (non-empty, reasonable length).
 */
export function isValidTokenFormat(token: string): boolean {
  if (!token || typeof token !== 'string') return false;
  const trimmed = token.trim();
  if (trimmed.length < 16 || trimmed.length > 64) return false;
  return /^[A-Za-z0-9_-]+$/.test(trimmed);
}

/**
 * Generate a unique token, retrying on collision.
 */
export async function generateUniqueToken(
  exists: (token: string) => Promise<boolean>
): Promise<string> {
  for (let i = 0; i < MAX_RETRIES; i++) {
    const token = generateShareToken();
    const found = await exists(token);
    if (!found) return token;
  }
  throw new Error('Failed to generate unique share token');
}

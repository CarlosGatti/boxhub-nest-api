const SAFE_URL_PROTOCOLS = ['http:', 'https:'];

export function normalizeSlug(slug: string | undefined | null): string {
  return slug?.trim().toLowerCase() ?? '';
}

export function assertSafeExternalUrl(url: string, fieldName = 'url'): void {
  const trimmed = url?.trim();
  if (!trimmed) {
    throw new Error(`${fieldName} is required`);
  }
  let parsed: URL;
  try {
    parsed = new URL(trimmed);
  } catch {
    throw new Error(`${fieldName} must be a valid URL`);
  }
  if (!SAFE_URL_PROTOCOLS.includes(parsed.protocol)) {
    throw new Error(`${fieldName} must use http or https`);
  }
}

export function isSafeExternalUrl(url: string | null | undefined): boolean {
  if (!url?.trim()) return false;
  try {
    const parsed = new URL(url.trim());
    return SAFE_URL_PROTOCOLS.includes(parsed.protocol);
  } catch {
    return false;
  }
}

export const SLUG_REGEX = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export const SHORT_CODE_REGEX = /^[a-zA-Z0-9_-]{4,32}$/;

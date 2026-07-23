const DEFAULT_FRONTEND_URL = 'https://carlosgatti.com';

const APP_FRONTEND_ENV_KEYS: Record<string, string> = {
  ACADEMY: 'ACADEMY_FRONTEND_URL',
  DEFINED: 'DEFINED_FRONTEND_URL',
  QRACK: 'QRACK_FRONTEND_URL',
  BUCKET: 'BUCKET_FRONTEND_URL',
  RH: 'RH_FRONTEND_URL',
};

const APP_BRAND_NAMES: Record<string, string> = {
  ACADEMY: 'RE-Quest Academy',
  DEFINED: 'Defined',
  QRACK: 'QRACK',
  BUCKET: 'Bucket List',
  RH: 'RH Solution Center',
};

function stripTrailingSlash(url: string): string {
  return url.replace(/\/$/, '');
}

export function normalizeAppCode(appCode?: string | null): string | undefined {
  const normalized = appCode?.trim().toUpperCase();
  return normalized || undefined;
}

/** Frontend base URL for post-verify redirect and app-specific auth links. */
export function resolveFrontendUrl(appCode?: string | null): string {
  const normalized = normalizeAppCode(appCode);

  if (normalized) {
    const envKey = APP_FRONTEND_ENV_KEYS[normalized];
    const specific = envKey ? process.env[envKey]?.trim() : undefined;
    if (specific) {
      return stripTrailingSlash(specific);
    }
  }

  const fallback =
    process.env.FRONTEND_URL?.trim() ||
    process.env.FRONTEND_URL_PROD?.trim() ||
    DEFAULT_FRONTEND_URL;

  return stripTrailingSlash(fallback);
}

export function resolveAppBrandName(appCode?: string | null): string {
  const normalized = normalizeAppCode(appCode);
  if (normalized && APP_BRAND_NAMES[normalized]) {
    return APP_BRAND_NAMES[normalized];
  }
  return 'carlosgatti.com';
}

export function resolvePublicApiUrl(): string {
  const base =
    process.env.PUBLIC_API_URL?.trim() ||
    process.env.API_URL?.trim() ||
    `http://localhost:${process.env.PORT || 3000}`;
  return stripTrailingSlash(base);
}

export function buildVerifyEmailLink(
  token: string,
  appCode?: string | null,
): string {
  const params = new URLSearchParams({ token });
  const normalized = normalizeAppCode(appCode);
  if (normalized) {
    params.set('app', normalized);
  }
  return `${resolvePublicApiUrl()}/auth/verify-email?${params.toString()}`;
}

export function buildVerifyEmailRedirectUrl(
  appCode: string | null | undefined,
  query: Record<string, string>,
): string {
  const frontendUrl = resolveFrontendUrl(appCode);
  const params = new URLSearchParams(query);
  return `${frontendUrl}/verify-email?${params.toString()}`;
}

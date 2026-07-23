import {
  buildVerifyEmailLink,
  buildVerifyEmailRedirectUrl,
  resolveAppBrandName,
  resolveFrontendUrl,
} from './resolve-frontend-url.util';

describe('resolve-frontend-url.util', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    process.env = { ...originalEnv };
  });

  afterAll(() => {
    process.env = originalEnv;
  });

  it('uses ACADEMY_FRONTEND_URL for ACADEMY app code', () => {
    process.env.ACADEMY_FRONTEND_URL = 'https://request-academy.vercel.app';
    process.env.FRONTEND_URL = 'https://carlosgatti.com';
    expect(resolveFrontendUrl('ACADEMY')).toBe(
      'https://request-academy.vercel.app',
    );
  });

  it('falls back to FRONTEND_URL when app env is missing', () => {
    delete process.env.ACADEMY_FRONTEND_URL;
    process.env.FRONTEND_URL = 'https://carlosgatti.com';
    expect(resolveFrontendUrl('ACADEMY')).toBe('https://carlosgatti.com');
  });

  it('builds verify link with app query param', () => {
    process.env.PUBLIC_API_URL = 'https://www.discart.me';
    expect(buildVerifyEmailLink('abc123', 'ACADEMY')).toBe(
      'https://www.discart.me/auth/verify-email?token=abc123&app=ACADEMY',
    );
  });

  it('redirects verify success to app frontend', () => {
    process.env.ACADEMY_FRONTEND_URL = 'https://request-academy.vercel.app';
    expect(
      buildVerifyEmailRedirectUrl('ACADEMY', {
        success: 'true',
        message: 'ok',
      }),
    ).toBe(
      'https://request-academy.vercel.app/verify-email?success=true&message=ok',
    );
  });

  it('resolves academy brand name', () => {
    expect(resolveAppBrandName('ACADEMY')).toBe('RE-Quest Academy');
  });
});

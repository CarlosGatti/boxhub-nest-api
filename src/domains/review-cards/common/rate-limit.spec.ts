import { createInMemoryRateLimiter } from './rate-limit';

describe('rate limiter', () => {
  it('blocks after max within window', () => {
    const limiter = createInMemoryRateLimiter(1000, 2);
    expect(limiter('key').allowed).toBe(true);
    expect(limiter('key').allowed).toBe(true);
    const result = limiter('key');
    expect(result.allowed).toBe(false);
  });
});

export type RateLimitResult = {
  allowed: boolean;
  retryAfterMs?: number;
};

type RateLimitState = {
  count: number;
  resetAt: number;
};

export function createInMemoryRateLimiter(windowMs: number, max: number) {
  const store = new Map<string, RateLimitState>();

  return (key: string): RateLimitResult => {
    const now = Date.now();
    const current = store.get(key);

    if (!current || current.resetAt <= now) {
      store.set(key, { count: 1, resetAt: now + windowMs });
      return { allowed: true };
    }

    if (current.count >= max) {
      return { allowed: false, retryAfterMs: current.resetAt - now };
    }

    current.count += 1;
    return { allowed: true };
  };
}

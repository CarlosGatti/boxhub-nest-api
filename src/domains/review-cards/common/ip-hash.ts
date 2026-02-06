import { createHash } from 'crypto';

export function hashIp(ip: string | undefined | null, salt: string) {
  if (!ip) {
    return undefined;
  }
  return createHash('sha256').update(`${salt}:${ip}`).digest('hex');
}

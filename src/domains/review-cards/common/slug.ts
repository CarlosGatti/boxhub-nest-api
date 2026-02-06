import { nanoid } from 'nanoid';

export function slugify(value: string) {
  const base = value
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/--+/g, '-')
    .slice(0, 40);

  return base.length > 0 ? base : 'review';
}

export async function generateUniqueSlug(
  base: string,
  exists: (slug: string) => Promise<boolean>,
  maxRetries = 5,
) {
  const normalizedBase = slugify(base);

  for (let attempt = 0; attempt < maxRetries; attempt += 1) {
    const suffix = nanoid(4).toLowerCase();
    const slug = `${normalizedBase}-${suffix}`;
    if (!(await exists(slug))) {
      return slug;
    }
  }

  throw new Error('Unable to generate unique slug');
}

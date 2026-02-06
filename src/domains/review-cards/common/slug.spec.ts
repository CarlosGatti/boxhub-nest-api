import { generateUniqueSlug, slugify } from './slug';

jest.mock('nanoid', () => ({
  nanoid: () => 'abcd',
}));

describe('slug utilities', () => {
  it('slugify normalizes strings', () => {
    expect(slugify('Acme Plumbing & Co.')).toBe('acme-plumbing-co');
  });

  it('generateUniqueSlug returns a unique slug', async () => {
    const exists = jest.fn().mockResolvedValue(false);
    const slug = await generateUniqueSlug('Acme Plumbing', exists, 1);
    expect(slug).toBe('acme-plumbing-abcd');
  });
});

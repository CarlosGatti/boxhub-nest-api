import { validateDetails } from './details.schemas';

describe('Bucket details validation', () => {
  describe('TRAVEL', () => {
    it('accepts valid travel details', () => {
      const result = validateDetails('TRAVEL', {
        where: 'Japan',
        startDate: '2025-04-01',
        endDate: '2025-04-15',
        withWho: ['Spouse'],
        budget: 5000,
        checklist: [{ label: 'Book flights', done: true }],
      });
      expect(result).toEqual({
        where: 'Japan',
        startDate: '2025-04-01',
        endDate: '2025-04-15',
        withWho: ['Spouse'],
        budget: 5000,
        checklist: [{ label: 'Book flights', done: true }],
      });
    });

    it('requires where', () => {
      expect(() => validateDetails('TRAVEL', {})).toThrow(/where/);
      expect(() => validateDetails('TRAVEL', { where: '' })).toThrow(/where/);
    });

    it('rejects invalid date strings', () => {
      expect(() =>
        validateDetails('TRAVEL', { where: 'Japan', startDate: 'not-a-date' }),
      ).toThrow(/Invalid ISO date string/);
    });
  });

  describe('EVENT', () => {
    it('accepts valid event details', () => {
      const result = validateDetails('EVENT', {
        artist: 'Taylor Swift',
        venue: 'MSG',
        city: 'New York',
        date: '2025-06-15',
        ticketUrl: 'https://ticketmaster.com/x',
        companions: ['Sarah'],
      });
      expect(result).toMatchObject({
        artist: 'Taylor Swift',
        venue: 'MSG',
        city: 'New York',
      });
    });

    it('accepts empty optional fields', () => {
      const result = validateDetails('EVENT', {});
      expect(result).toEqual({});
    });
  });

  describe('PLACE_COLLECTION', () => {
    it('accepts valid place collection details', () => {
      const result = validateDetails('PLACE_COLLECTION', {
        collectionKey: 'US_NATIONAL_PARKS',
        goal: 'Visit all parks',
        visitedCount: 10,
        plannedCount: 5,
      });
      expect(result).toEqual({
        collectionKey: 'US_NATIONAL_PARKS',
        goal: 'Visit all parks',
        visitedCount: 10,
        plannedCount: 5,
      });
    });

    it('requires collectionKey', () => {
      expect(() => validateDetails('PLACE_COLLECTION', {})).toThrow(/collectionKey/);
    });
  });

  describe('ACHIEVEMENT', () => {
    it('accepts valid achievement details', () => {
      const result = validateDetails('ACHIEVEMENT', {
        proofLinks: ['https://example.com/cert'],
        metrics: { score: 95, rank: 1 },
      });
      expect(result).toMatchObject({
        proofLinks: ['https://example.com/cert'],
        metrics: { score: 95, rank: 1 },
      });
    });
  });

  describe('GENERAL', () => {
    it('accepts any JSON object', () => {
      const result = validateDetails('GENERAL', { foo: 'bar', count: 42 });
      expect(result).toEqual({ foo: 'bar', count: 42 });
    });

    it('rejects arrays', () => {
      expect(() => validateDetails('GENERAL', [1, 2, 3])).toThrow(/array|object/);
    });

    it('rejects strings', () => {
      expect(() => validateDetails('GENERAL', 'hello')).toThrow(/string|object/);
    });
  });

  describe('null/undefined', () => {
    it('returns null for null', () => {
      expect(validateDetails('TRAVEL', null)).toBeNull();
      expect(validateDetails('GENERAL', undefined)).toBeNull();
    });
  });
});

import { RedirectsService } from './redirects.service';

describe('RedirectsService', () => {
  it('records scan and returns redirect url', async () => {
    const prisma = {
      reviewCardProject: {
        findFirst: jest.fn().mockResolvedValue({
          id: 10,
          googleReviewUrlFinal: 'https://example.com/review',
        }),
      },
      reviewCardScanEvent: {
        create: jest.fn().mockResolvedValue({ id: 1 }),
      },
    } as any;

    const service = new RedirectsService(prisma);
    const url = await service.resolveRedirect({
      slug: 'acme-1234',
      ip: '127.0.0.1',
      userAgent: 'jest',
      referer: 'https://example.com',
    });

    expect(url).toBe('https://example.com/review');
    expect(prisma.reviewCardScanEvent.create).toHaveBeenCalled();
  });
});

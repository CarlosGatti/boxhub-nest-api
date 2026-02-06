import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../../core/prisma/prisma.service';
import { createInMemoryRateLimiter } from '../common/rate-limit';
import { hashIp } from '../common/ip-hash';

@Injectable()
export class RedirectsService {
  private readonly limiter = createInMemoryRateLimiter(60_000, 30);

  constructor(private readonly prisma: PrismaService) {}

  async resolveRedirect(params: {
    slug: string;
    ip?: string;
    userAgent?: string;
    referer?: string;
  }) {
    const salt = process.env.REVIEW_CARDS_IP_HASH_SALT ?? '';
    const ipHash = hashIp(params.ip, salt);
    const limiterKey = ipHash ?? 'anonymous';
    const rate = this.limiter(limiterKey);
    if (!rate.allowed) {
      throw new HttpException('Too many requests', 429);
    }

    const project = await this.prisma.reviewCardProject.findFirst({
      where: {
        slug: params.slug,
        status: 'PUBLISHED',
      },
      select: {
        id: true,
        googleReviewUrlFinal: true,
      },
    });

    if (!project || !project.googleReviewUrlFinal) {
      throw new NotFoundException('Review card not found');
    }

    await this.prisma.reviewCardScanEvent.create({
      data: {
        projectId: project.id,
        ipHash,
        userAgent: params.userAgent?.slice(0, 512),
        referer: params.referer?.slice(0, 512),
      },
    });

    return project.googleReviewUrlFinal;
  }
}

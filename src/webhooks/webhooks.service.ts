// src/webhooks/webhooks.service.ts

import { Injectable } from '@nestjs/common'
import { PrismaService } from "../prisma.service";

@Injectable()
export class WebhooksService {
  constructor(private prisma: PrismaService) {}

  async processLemonEvent(event: string, data: any) {
    const email = data?.attributes?.user_email
    const subscriptionId = data?.id
    const expiresAt = data?.attributes?.renews_at

    if (!email) return

    switch (event) {
      case 'subscription_created':
      case 'subscription_updated':
        await this.prisma.user.update({
          where: { email },
          data: {
            isPremium: true,
            subscriptionId: subscriptionId,
            expiresAt: expiresAt ? new Date(expiresAt) : null,
          },
        })
        break

      case 'subscription_cancelled':
        await this.prisma.user.update({
          where: { email },
          data: {
            willExpireAt: expiresAt ? new Date(expiresAt) : null,
          },
        })
        break

      case 'subscription_expired':
      case 'subscription_payment_failed':
        await this.prisma.user.update({
          where: { email },
          data: { isPremium: false },
        })
        break
    }
  }
}

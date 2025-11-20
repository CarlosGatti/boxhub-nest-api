// src/webhooks/webhooks.controller.ts
import { Controller, Post, Req, Headers, HttpCode, UnauthorizedException } from '@nestjs/common';
import { WebhooksService } from './webhooks.service';
// @ts-ignore
import { Request } from 'express';
import * as crypto from 'crypto';

@Controller('webhooks')
export class WebhooksController {
  constructor(private readonly webhooksService: WebhooksService) {}

  @Post('lemonsqueezy')
  @HttpCode(200)
  async handleLemonWebhook(@Req() req: Request, @Headers('x-signature') signature: string) {
    const rawBody = (req as any).rawBody; // precisa configurar express para manter o rawBody
    const secret = process.env.LEMON_SECRET;

    const expectedSignature = crypto
      .createHmac('sha256', secret!)
      .update(rawBody)
      .digest('hex');

    if (signature !== expectedSignature) {
      throw new UnauthorizedException('Invalid signature');
    }

    const event = JSON.parse(rawBody.toString());
    const eventType = event.meta?.event_name;
    const payload = event.data;

    await this.webhooksService.processLemonEvent(eventType, payload);

    return { ok: true };
  }
}

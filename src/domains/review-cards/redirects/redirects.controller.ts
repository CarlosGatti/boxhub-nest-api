import { Controller, Get, Param, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { RedirectsService } from './redirects.service';

@Controller()
export class RedirectsController {
  constructor(private readonly redirectsService: RedirectsService) {}

  @Get('r/:slug')
  async redirect(@Param('slug') slug: string, @Req() req: Request, @Res() res: Response) {
    const forwarded = req.headers['x-forwarded-for'] as string | undefined;
    const ip = forwarded ? forwarded.split(',')[0]?.trim() : req.ip;
    const redirectUrl = await this.redirectsService.resolveRedirect({
      slug,
      ip,
      userAgent: req.headers['user-agent'],
      referer: req.headers['referer'],
    });
    return res.redirect(302, redirectUrl);
  }
}

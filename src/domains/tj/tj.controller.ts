import {
  Controller,
  Post,
  Get,
  Body,
  Query,
  BadRequestException,
} from '@nestjs/common';
import { TjService } from './tj.service';
import { MintTokenDto } from './dto/mint-token.dto';

@Controller('api/tj')
export class TjController {
  constructor(private readonly tjService: TjService) {}

  @Post('mint')
  async mint(@Body() dto: MintTokenDto) {
    try {
      const token = await this.tjService.mintToken(dto.name, dto.discountId);

      // Build absolute URL
      const baseUrl =
        process.env.NEXT_PUBLIC_BASE_URL ||
        process.env.BASE_URL ||
        'https://carlosgatti.com';

      const url = `${baseUrl}/tj/${encodeURIComponent(token)}`;

      return {
        token,
        url,
      };
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }
      throw new BadRequestException(
        error?.message || 'Failed to mint token',
      );
    }
  }

  @Get('verify')
  async verify(@Query('token') token: string) {
    if (!token) {
      throw new BadRequestException('Missing token');
    }

    try {
      const decodedToken = decodeURIComponent(token);
      const payload = await this.tjService.verifyToken(decodedToken);
      return payload;
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }
      throw error; // UnauthorizedException or other
    }
  }
}

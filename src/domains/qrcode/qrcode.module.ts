import { Module } from '@nestjs/common';
import { PrismaService } from '../../core/prisma/prisma.service';
import { QrcodeResolver } from './qrcode.resolver';
import { QrcodeService } from './qrcode.service';

@Module({
  providers: [PrismaService, QrcodeService, QrcodeResolver],
})
export class QrcodeModule {}

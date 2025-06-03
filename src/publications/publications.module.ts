import { MailModule } from 'src/services/providers/mail/mail.module';
import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { PublicationResolver } from './publications.resolver';
import { PublicationService } from './publications.service';
@Module({
  imports: [MailModule],
  providers: [PrismaService, PublicationService, PublicationResolver],
})
export class PublicationsModule {}

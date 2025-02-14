import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventResolver } from './event.resolver';
import { PrismaService } from '../prisma.service';
import { UserService } from '../user/user.service';
import { MailModule } from '../services/providers/mail/mail.module';

@Module({
  providers: [EventResolver, EventService, PrismaService, UserService],
  imports: [MailModule],
})
export class EventModule {}

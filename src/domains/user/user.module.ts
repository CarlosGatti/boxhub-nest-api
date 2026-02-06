import { AuthModule } from 'src/core/auth/auth.module';
import { MailModule } from 'src/core/services/providers/mail/mail.module';
import { Module, forwardRef } from '@nestjs/common';
import { PrismaService } from '../../core/prisma/prisma.service';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  imports: [MailModule, forwardRef(() => AuthModule)],
  providers: [UserService, PrismaService, UserResolver],
})
export class UserModule { }

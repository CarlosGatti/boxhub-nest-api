import { Module, forwardRef } from '@nestjs/common';

import { AppPermissionGuard } from './guards/app-permission.guard';
import { AuthController } from './auth.controller';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';
import { MailModule } from 'src/services/providers/mail/mail.module';
import { PassportModule } from '@nestjs/passport';
import { PrismaService } from '../prisma.service';
import { UserModule } from '../user/user.module';
import { UserService } from '../user/user.service';

//TODO - Remover Secret Hard-Code e colocar num .env
@Module({
  imports: [
    forwardRef(() => UserModule),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: '97742c5c0c5ea59ab16e61af76825b8b', // TODO - ADD THIS TO ENV
      signOptions: {
        expiresIn: '1d',
      },
    }),
    MailModule,
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    AuthResolver,
    JwtStrategy,
    UserService,
    PrismaService,
    AppPermissionGuard,
  ],
  exports: [AuthService, AppPermissionGuard],
})
export class AuthModule { }
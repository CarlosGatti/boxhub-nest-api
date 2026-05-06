import { Module } from '@nestjs/common';
import { AuthModule } from 'src/core/auth/auth.module';
import { JwtAuthGuard } from 'src/core/auth/guards/jwt-auth.guard';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { PomodoroResolver } from './pomodoro.resolver';
import { PomodoroService } from './pomodoro.service';

@Module({
  imports: [AuthModule],
  controllers: [],
  providers: [PomodoroService, PomodoroResolver, PrismaService, JwtAuthGuard],
  exports: [PomodoroService],
})
export class PomodoroModule {}

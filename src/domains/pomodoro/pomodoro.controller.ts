import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/core/auth/guards/jwt-auth.guard';
import { CreatePomodoroTaskDto } from './dto/create-pomodoro-task.dto';
import { StartPomodoroSessionDto } from './dto/start-pomodoro-session.dto';
import { UpdatePomodoroTaskDto } from './dto/update-pomodoro-task.dto';
import { PomodoroService } from './pomodoro.service';

@Controller('pomodoro')
@UseGuards(JwtAuthGuard)
export class PomodoroController {
  constructor(private readonly pomodoroService: PomodoroService) {}

  @Get('tasks')
  async listTasks(@Req() req: any) {
    return this.pomodoroService.listTasks(req.user.id);
  }

  @Post('tasks')
  async createTask(@Req() req: any, @Body() input: CreatePomodoroTaskDto) {
    return this.pomodoroService.createTask(req.user.id, input);
  }

  @Patch('tasks/:id')
  async updateTask(
    @Req() req: any,
    @Param('id', ParseIntPipe) id: number,
    @Body() input: UpdatePomodoroTaskDto,
  ) {
    return this.pomodoroService.updateTask(req.user.id, id, input);
  }

  @Delete('tasks/:id')
  async deleteTask(
    @Req() req: any,
    @Param('id', ParseIntPipe) id: number,
    @Query('archive') archive?: string,
  ) {
    return this.pomodoroService.deleteOrArchiveTask(req.user.id, id, archive === 'true');
  }

  @Get('sessions')
  async listSessions(@Req() req: any) {
    return this.pomodoroService.listSessions(req.user.id);
  }

  @Post('sessions/start')
  async startSession(@Req() req: any, @Body() input: StartPomodoroSessionDto) {
    return this.pomodoroService.startSession(req.user.id, input);
  }

  @Patch('sessions/:id/pause')
  async pauseSession(@Req() req: any, @Param('id', ParseIntPipe) id: number) {
    return this.pomodoroService.pauseSession(req.user.id, id);
  }

  @Patch('sessions/:id/resume')
  async resumeSession(@Req() req: any, @Param('id', ParseIntPipe) id: number) {
    return this.pomodoroService.resumeSession(req.user.id, id);
  }

  @Patch('sessions/:id/complete')
  async completeSession(@Req() req: any, @Param('id', ParseIntPipe) id: number) {
    return this.pomodoroService.completeSession(req.user.id, id);
  }

  @Patch('sessions/:id/cancel')
  async cancelSession(@Req() req: any, @Param('id', ParseIntPipe) id: number) {
    return this.pomodoroService.cancelSession(req.user.id, id);
  }

  @Get('stats')
  async getStats(@Req() req: any) {
    return this.pomodoroService.getStats(req.user.id);
  }
}

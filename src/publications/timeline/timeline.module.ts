import { Module } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { TimelineResolver } from './timeline.resolver';
import { TimelineService } from './timeline.service';
// import { PostResolver } from '../post/post.resolver';
// import { EventResolver } from '../event/event.resolver';

@Module({
  providers: [PrismaService, TimelineService, TimelineResolver],
})
export class TimelineModule {}

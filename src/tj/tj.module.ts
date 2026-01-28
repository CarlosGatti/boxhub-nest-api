import { Module } from '@nestjs/common';
import { TjController } from './tj.controller';
import { TjService } from './tj.service';

@Module({
  controllers: [TjController],
  providers: [TjService],
  exports: [TjService],
})
export class TjModule {}

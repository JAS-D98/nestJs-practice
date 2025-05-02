import { Module } from '@nestjs/common';
import { RescService } from './resc.service';
import { RescController } from './resc.controller';

@Module({
  controllers: [RescController],
  providers: [RescService],
})
export class RescModule {}

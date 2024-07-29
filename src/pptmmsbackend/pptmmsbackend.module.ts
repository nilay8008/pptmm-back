import { Module } from '@nestjs/common';
import { PptmmsbackendService } from './pptmmsbackend.service';
import { PptmmsbackendController } from './pptmmsbackend.controller';

@Module({
  controllers: [PptmmsbackendController],
  providers: [PptmmsbackendService],
})
export class PptmmsbackendModule {}

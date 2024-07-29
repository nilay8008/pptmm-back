import { Module } from '@nestjs/common';
import { EndService } from './end.service';
import { EndController } from './end.controller';
import { DatabaseModule } from 'src/database/database.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [DatabaseModule, AuthModule],
  controllers: [EndController],
  providers: [EndService],
})
export class EndModule {}

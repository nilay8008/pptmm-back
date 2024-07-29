import { Module } from '@nestjs/common';

import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EndModule } from './end/end.module';

@Module({
  imports: [DatabaseModule, EndModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

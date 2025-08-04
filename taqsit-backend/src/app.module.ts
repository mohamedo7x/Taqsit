import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DatabaseMoodule } from './DatabaseStore/database.module';


@Module({
  imports: [DatabaseMoodule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}

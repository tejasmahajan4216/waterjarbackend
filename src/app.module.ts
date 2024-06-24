import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://tejasmahajan4216:OPL7O0YSjznIKFGe@waterjtesting.bcsybhs.mongodb.net/',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

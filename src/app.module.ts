import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarService } from './car/car.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, CarService],
})
export class AppModule {}

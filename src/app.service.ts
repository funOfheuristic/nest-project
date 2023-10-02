import { Inject, Injectable } from '@nestjs/common';
import { CarService } from './car/car.service';

@Injectable()
export class AppService {
  @Inject()
  private carService: CarService;
  getHello(): string {
    return 'Hello World, Fun of Heuristic';
  }
}

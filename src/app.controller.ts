import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller('apps')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':name')
  //@Redirect('https://www.youtube.com/@funofheuristic', 302)
  getHello(@Param('name') name: string, @Query() query: any): string {
    return `Hello ${name}, how are you ? ${query.name}`;
  }

  @Post()
  @HttpCode(203)
  addHello(@Body() hello: Hello): Hello {
    return {
      name: `Hello ${hello.name}, how are you ?`,
    };
  }

  @Put(':id')
  updateHello(): string {
    return this.appService.getHello() + ' Put';
  }

  @Delete()
  DeleteHello(): string {
    return this.appService.getHello() + ' Delete';
  }
}

export interface Hello {
  name: string;
}

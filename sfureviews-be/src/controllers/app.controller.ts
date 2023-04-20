import { Controller, Get } from '@nestjs/common';
import { AppService } from '../services/app.service';

// We can simply create a new controller by using the command: nest g controller [NAME]

// @Controller() is a decorator used by NEST to create the mapping. Pass the prefix here to everything which is "/NAME"
// Will be passed through this controller
@Controller('status')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getStatus();
  }

}

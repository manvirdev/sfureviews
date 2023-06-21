import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from '../services/app.service';
import { AuthGuard } from '@nestjs/passport';

// We can simply create a new controller by using the command: nest g controller [NAME]

// @Controller() is a decorator used by NEST to create the mapping. Pass the prefix here to everything which is "/NAME"
// Will be passed through this controller
@Controller('status')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(AuthGuard('azure-ad'))
  getHello(): string {
    return this.appService.getStatus();
  }

}

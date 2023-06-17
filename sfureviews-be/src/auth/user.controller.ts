import { Controller, Get, Post, Body, Request, UseGuards, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from './users.service';
import { User } from './user.schema';
import { UserDto } from './user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body(new ValidationPipe({ forbidNonWhitelisted: true})) userDto: UserDto): Promise<User> {
    return this.usersService.create(userDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  async getProfile(@Request() req): Promise<{ userId: string }> {
    const user = await this.usersService.findById(req.user.userId);
    return { userId: user.email };
  }
}

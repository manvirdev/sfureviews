import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { UserService } from './users.services';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { LoggerService } from '../common/logger/logger.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly loggerService: LoggerService,
  ) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    this.loggerService.log('Creating user...');
    return this.userService.create(createUserDto);
  }

  @Get()
  async findAll() {
    this.loggerService.log('Getting all users...');
    return this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    this.loggerService.log(`Getting user with ID ${id}...`);
    return this.userService.findOneById(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    this.loggerService.log(`Updating user with ID ${id}...`);
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    this.loggerService.log(`Deleting user with ID ${id}...`);
    return this.userService.remove(id);
  }
}

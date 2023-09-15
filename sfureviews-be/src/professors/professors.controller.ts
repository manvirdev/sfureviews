import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ProfessorService } from '../modules/professor/professor.services';
import { CreateProfessorDto } from './dtos/create-professor.dto';
import { UpdateProfessorDto } from './dtos/update-professor.dto';
import { Professor } from './schemas/professor.schema';
import { LoggerService } from '../common/logger/logger.service';

@Controller('professor')
export class ProfessorController {
  constructor(
    private readonly professorService: ProfessorService,
    private readonly loggerService: LoggerService,
  ) {}

  @Post()
  async create(@Body() createProfessorDto: CreateProfessorDto): Promise<Professor> {
    // Example usage of logger
    this.loggerService.log('Creating professor...');
    return this.professorService.create(createProfessorDto);
  }

  @Get()
  async findAll(): Promise<Professor[]> {
    // Example usage of logger
    this.loggerService.log('Getting all professors...');
    return this.professorService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Professor> {
    // Example usage of logger
    this.loggerService.log(`Getting professor with ID ${id}...`);
    return this.professorService.findOneById(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProfessorDto: UpdateProfessorDto,
  ): Promise<Professor> {
    // Example usage of logger
    this.loggerService.log(`Updating professor with ID ${id}...`);
    return this.professorService.update(id, updateProfessorDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Professor> {
    // Example usage of logger
    this.loggerService.log(`Deleting professor with ID ${id}...`);
    return this.professorService.remove(id);
  }
}
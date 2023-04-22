import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ProfessorService } from '../modules/professor/professor.services';
import { CreateProfessorDto } from '../modules/professor/dtos/create-professor.dto';
import { UpdateProfessorDto } from '../modules/professor/dtos/update-professor.dto';
import { Professor } from '../modules/professor/schemas/professor.schema';

@Controller('professor')
export class ProfessorController {
  constructor(private readonly professorService: ProfessorService) {}

  @Post()
  async create(@Body() createProfessorDto: CreateProfessorDto): Promise<Professor> {
    return this.professorService.create(createProfessorDto);
  }

  @Get()
  async findAll(): Promise<Professor[]> {
    return this.professorService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Professor> {
    return this.professorService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProfessorDto: UpdateProfessorDto,
  ): Promise<Professor> {
    return this.professorService.update(id, updateProfessorDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Professor> {
    return this.professorService.remove(id);
  }
}

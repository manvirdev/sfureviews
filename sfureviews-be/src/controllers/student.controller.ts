import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { CreateStudentDto } from '../modules/student/dtos/create-student.dto';
import { UpdateStudentDto } from '../modules/student/dtos/update-student.dto';
import { Student } from '../modules/student/schemas/student.schema';
import { StudentService } from '../modules/student/student.services';
import { LoggerService } from '../common/logger/logger.service';

@Controller('student')
export class StudentController {
  constructor(
    private readonly studentService: StudentService,
    private readonly loggerService: LoggerService,
  ) {}

  @Post()
  async create(@Body() createStudentDto: CreateStudentDto): Promise<Student> {
    this.loggerService.log('Creating student...');
    return this.studentService.create(createStudentDto);
  }

  @Get()
  async findAll(): Promise<Student[]> {
    this.loggerService.log('Getting all students...');
    return this.studentService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Student> {
    this.loggerService.log(`Getting student with ID ${id}...`);
    return this.studentService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateStudentDto: UpdateStudentDto,
  ): Promise<Student> {
    this.loggerService.log(`Updating student with ID ${id}...`);
    return this.studentService.update(id, updateStudentDto);
  }
}

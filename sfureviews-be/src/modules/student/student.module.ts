import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LoggerService } from '../../common/logger/logger.service'; 
import { StudentService } from './student.services';
import { StudentController } from '../../controllers/student.controller';
import { Student, StudentSchema } from './schemas/student.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Student.name, schema: StudentSchema },
    ]),
  ],
  controllers: [StudentController],
  providers: [StudentService, LoggerService], // Add LoggerService to the providers array
  exports: [StudentService],
})
export class StudentModule {}

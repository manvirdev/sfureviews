import { Module } from '@nestjs/common';
import { ProfessorService } from '../professor/professor.services';
import { StudentService } from '..//student/student.services';

@Module({
  providers: [ProfessorService, StudentService],
  exports: [ProfessorService, StudentService]
})
export class UserModule {}
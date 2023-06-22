import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { StudentModule } from '../modules/student/student.module'; 
import { ProfessorModule } from '../modules/professor/professor.module';

@Module({
  imports: [ProfessorModule, StudentModule], // Add the StudentModule to the imports array
  providers: [AuthService]
})
export class AuthModule {}

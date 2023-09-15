import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AuthService } from './auth.service';
import { StudentModule } from '../modules/student/student.module'; 
import { ProfessorModule } from '../modules/professor/professor.module';
import { UserModule } from 'src/modules/user/user.module';

@Module({
  imports: [UserModule, HttpModule], // Add the StudentModule to the imports array
  providers: [AuthService]
})
export class AuthModule {}

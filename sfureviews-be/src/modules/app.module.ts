import { Module } from '@nestjs/common';
import { UserModule } from 'src/auth/user.module';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { MongoModule } from './mongo.module';
import { ProfessorModule } from './professor/professor.module';

@Module({
  imports: [MongoModule, ProfessorModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

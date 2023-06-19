import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { MongoModule } from './mongo.module';
import { ProfessorModule } from './professor/professor.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [MongoModule, ProfessorModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

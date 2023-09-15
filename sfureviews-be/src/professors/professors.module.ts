import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LoggerService } from 'src/common/logger/logger.service';
import { ProfessorController } from './professor.controller';
import { ProfessorService } from './professor.services';
import { Professor, ProfessorSchema } from './schemas/professor.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Professor.name, schema: ProfessorSchema },
    ]),
  ],
  controllers: [ProfessorController],
  providers: [ProfessorService, LoggerService],
  exports: [ProfessorService]
})
export class ProfessorModule {}

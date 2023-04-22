import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProfessorController } from 'src/controllers/professor.controller';
import { ProfessorService } from './professor.services';
import { Professor, ProfessorSchema } from './schemas/professor.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Professor.name, schema: ProfessorSchema },
    ]),
  ],
  controllers: [ProfessorController],
  providers: [ProfessorService],
})
export class ProfessorModule {}

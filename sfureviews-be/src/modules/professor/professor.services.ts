import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Professor, ProfessorDocument } from './schemas/professor.schema';
import { CreateProfessorDto } from './dtos/create-professor.dto';
import { UpdateProfessorDto } from './dtos/update-professor.dto';

@Injectable()
export class ProfessorService {
  constructor(
    @InjectModel(Professor.name) private professorModel: Model<ProfessorDocument>,
  ) {}

  async create(createProfessorDto: CreateProfessorDto): Promise<Professor> {
    const createdProfessor = new this.professorModel(createProfessorDto);
    return createdProfessor.save();
  }

  async findAll(): Promise<Professor[]> {
    return this.professorModel.find().exec();
  }

  async findOneById(id: string): Promise<Professor> {
    return this.professorModel.findById(id).exec();
  }

  async findOneByEmail(email: string): Promise<Professor> {
    return this.professorModel.findOne({ email }).exec();
  }

  async findOneByName(name: string): Promise<Professor> {
    return this.professorModel.findOne({ name }).exec();
  }

  async update(id: string, updateProfessorDto: UpdateProfessorDto): Promise<Professor> {
    return this.professorModel.findByIdAndUpdate(id, updateProfessorDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Professor> {
    return this.professorModel.findByIdAndRemove(id).exec();
  }
}

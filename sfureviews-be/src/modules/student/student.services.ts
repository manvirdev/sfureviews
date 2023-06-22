import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Student, StudentDocument } from './schemas/student.schema';

@Injectable()
export class StudentService {
  constructor(
    @InjectModel(Student.name) private studentModel: Model<StudentDocument>,
  ) {}

  async create(createStudentDto: any): Promise<Student> {
    const createdStudent = new this.studentModel(createStudentDto);
    return createdStudent.save();
  }

  async findAll(): Promise<Student[]> {
    return this.studentModel.find().exec();
  }

  async findById(id: string): Promise<Student> {
    return this.studentModel.findById(id).exec();
  }

  async findByEmail(email: string): Promise<Student> {
    return this.studentModel.findOne({ email }).exec();
  }

  async findByName(name: string): Promise<Student[]> {
    return this.studentModel.find({ name }).exec();
  }

  async update(email: string, updateStudentDto: any): Promise<Student> {
    return this.studentModel.findOneAndUpdate({ email }, updateStudentDto, { new: true }).exec();
  }

  async delete(email: string): Promise<Student> {
    return this.studentModel.findOneAndDelete({ email }).exec();
  }
}

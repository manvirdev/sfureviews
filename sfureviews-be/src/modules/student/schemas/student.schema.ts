import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StudentDocument = Student & Document;

@Schema()
export class Student {
  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  studentEmail: string;

  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  program: string;

  @Prop()
  pronouns: string;
}

export const StudentSchema = SchemaFactory.createForClass(Student);

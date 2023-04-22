import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProfessorDocument = Professor & Document;

@Schema()
export class Professor {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  department: string;

  @Prop({ required: true })
  email: string;

  @Prop()
  phone: string;

  @Prop()
  courses: [
    {
      courseName: string;
      courseId: string;
      semester: string;
      description: string;
    },
  ];

  @Prop()
  researchInterests: string[];

  @Prop()
  publications: string[];

  @Prop()
  officeHours: [
    {
      day: string;
      start: string;
      end: string;
    },
  ];
}

export const ProfessorSchema = SchemaFactory.createForClass(Professor);
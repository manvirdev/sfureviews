import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import UserSchema from 'src/users/schemas/user.schema';

export type ProfessorDocument = Professor & Document;

@Schema()
export class Professor {
  @Prop({ required: true })
  department: string;

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

export const ProfessorSchema = UserSchema.clone().add({
  department: { type: String, required: true },
  courses: [{
    courseName: { type: String, required: true },
    courseId: { type: String, required: true },
    semester: { type: String, required: true },
    description: { type: String, required: false },
  }],
  researchInterests: [{ type: String }],
  publications: [{ type: String }],
  officeHours: [{
    day: { type: String, required: true },
    start: { type: String, required: true },
    end: { type: String, required: true },
  }],
});

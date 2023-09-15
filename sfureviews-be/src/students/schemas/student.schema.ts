import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import UserSchema from 'src/users/schemas/user.schema';


@Schema()
export class Student {
  @Prop({ required: true })
  program: string;
}

export const StudentSchema = UserSchema.add({
  program: { type: String, required: true },
});

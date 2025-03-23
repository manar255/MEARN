import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { School } from './school.model';

export type TeacherDocument = HydratedDocument<Teacher>;

@Schema()
export class Teacher {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  salary: number;
  
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'School' })
  school: School;
}

export const TeacherSchema = SchemaFactory.createForClass(Teacher);


import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SchoolDocument = HydratedDocument<School>;

@Schema()
export class School {
  @Prop()
  name: string;

  @Prop()
  location:string;
}

export const SchoolSchema = SchemaFactory.createForClass(School);

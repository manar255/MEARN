import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';


export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {

    @Prop({required:true})
    name: string;

    @Prop({required:true,unique:true})
    email: string;

    @Prop({minlength:8})
    password: string;

    @Prop()
    phone: string;
    
    @Prop({min:16,max:60})
    age: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
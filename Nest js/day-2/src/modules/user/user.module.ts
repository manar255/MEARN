import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User, UserSchema } from 'src/models/user.model';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
   imports: [
      MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}

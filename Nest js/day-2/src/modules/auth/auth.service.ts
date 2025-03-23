import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/models/user.model';
import SignUpDto from './dtos/signUp.dto';
import * as bcrypt from 'bcrypt';
import SignInDto from './dtos/signIn.dto';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async signUp(userData: SignUpDto) {
    const oldUser = await this.userModel.findOne({ email: userData.email });

    if (oldUser) {
      throw new ConflictException('you already has account');
    }

    const hashPassword = await bcrypt.hash(userData.password, 10);

    const user = new this.userModel({ ...userData, password: hashPassword });
    await user.save();

    return 'user created';
  }

  async signIn(userData:SignInDto){
    const user = await this.userModel.findOne({email:userData.email});

    if(!user){
        throw new ConflictException('Invalid credentials');
    }
    
    const isMatch = bcrypt.compare(userData.password,user.password);

    if(!isMatch){
        throw new ConflictException('Invalid credentials');
    }

    const token =  jwt.sign({ userId: user._id },  process.env.SECRET_KEY! );

    return {token}
    
  }
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/models/user.model';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}


  getUserById(id) {
    return this.userModel.findById(id);
  }

  getOtherUsers(id){
    return  this.userModel.find({ _id: { $ne: id } })
  }
}

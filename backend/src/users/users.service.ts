import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}
  async create(user: CreateUserDto) {
    const createdUser = new this.userModel({
      name: user.name,
      email: user.email,
      password: user.password,
    });

    return await createdUser.save();
  }
}

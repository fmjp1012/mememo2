import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  create(user: CreateUserDto) {
    return 'This action adds a new user';
  }
}

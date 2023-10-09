import { Body, Controller, Get, Param, Post, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body(ValidationPipe) createUser: CreateUserDto) {
    return this.usersService.create(createUser);
  }
}

import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dta/create.user.dto';
import { UserService } from './user.service'
import { User } from './model/user.model'

@Controller('users')
export class UserController {
  constructor(private userService: UserService){}

  @Post()
  async createUser(@Body() createUserDto:CreateUserDto): Promise<void>{
    return this.userService.create(createUserDto);
  }

  @Get()
  async findAllUsers(): Promise<User[]>{
    return this.userService.findAll();
  }
}

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/UpdateUserDto';
import { CreateUserDto } from './dto/CreateUserDto';
import { UserDto } from './dto/UserDto';
//import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('create-user')
  async create(@Body() createUserDto: CreateUserDto): Promise<UserDto> {
    return await this.usersService.create(createUserDto);
  }

  @Get('get-all-users')
  async findAll(): Promise<UserDto[]> {
    return await this.usersService.findAll();
  }

  @Get('get-user/:id')
  async findOne(@Param('id') id: string): Promise<UserDto> {
    return await this.usersService.findOne(+id);
  }

  @Patch('update-user/:id')
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<UserDto> {
    return await this.usersService.update(+id, updateUserDto);
  }

  @Delete('remove-user/:id')
  async remove(@Param('id') id: string): Promise<UserDto> {
    return await this.usersService.remove(+id);
  }
}

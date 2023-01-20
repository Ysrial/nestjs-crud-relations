import { UpdateUserDto } from './dto/UpdateUserDto';
import { CreateUserDto } from './dto/CreateUserDto';
import { UserDto } from './dto/UserDto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<UserDto>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<UserDto> {
    return await this.userRepository.save(createUserDto);
  }

  async findAll(): Promise<UserDto[]> {
    return await this.userRepository.find();
  }

  async findOne(id: number): Promise<UserDto> {
    return await this.userRepository.findOneBy({ id });
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<UserDto> {
    await this.userRepository.update({ id }, updateUserDto);
    return await this.findOne(id);
  }

  async remove(id: number): Promise<UserDto> {
    await this.userRepository.delete(id);
    return await this.userRepository.findOneBy({ id });
  }
}

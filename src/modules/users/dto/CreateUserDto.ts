import { UserDto } from './UserDto';
import { OmitType } from '@nestjs/swagger';

export class CreateUserDto extends OmitType(UserDto, ['id']) {}

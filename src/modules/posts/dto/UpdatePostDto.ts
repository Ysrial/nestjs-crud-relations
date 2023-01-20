import { CreatePostDto } from './CreatePostDto';
import { PartialType } from '@nestjs/swagger';

export class UpdatePostDto extends PartialType(CreatePostDto) {}

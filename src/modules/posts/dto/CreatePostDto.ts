import { PostDto } from './PostDto';
import { OmitType } from '@nestjs/swagger';

export class CreatePostDto extends OmitType(PostDto, ['id']) {
  userId: number;
}

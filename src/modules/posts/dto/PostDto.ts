import { Post } from './../entities/post.entity';

export class PostDto {
  id: number;
  content: string;

  constructor(post: Post) {
    this.id = post.id;
    this.content = post.content;
  }
}

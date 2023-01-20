import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostDto } from './dto/PostDto';
import { CreatePostDto } from './dto/CreatePostDto';
import { UpdatePostDto } from './dto/UpdatePostDto';
import { Post } from './entities/post.entity';
import { UsersService } from '../users/users.service';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
    private userService: UsersService,
  ) {}

  async create(createPostDto: CreatePostDto): Promise<PostDto> {
    const _user = await this.userService.findOne(createPostDto.userId);
    const { userId, ...post } = { _user, ...createPostDto };
    return await this.postRepository.save(post);
  }

  async findAll(): Promise<PostDto[]> {
    return await this.postRepository.find();
  }

  async findOne(id: number): Promise<PostDto> {
    return await this.postRepository.findOneBy({ id });
  }

  async update(id: number, updatePostDto: UpdatePostDto): Promise<PostDto> {
    // await this.postRepository.update({ id }, updatePostDto);
    // return await this.findOne(id);
    return null;
  }

  async remove(id: number): Promise<PostDto> {
    await this.postRepository.delete(id);
    return await this.postRepository.findOneBy({ id });
  }
}

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/CreatePostDto';
import { UpdatePostDto } from './dto/UpdatePostDto';
import { PostDto } from './dto/PostDto';

@Controller('post')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post('create-post')
  async create(@Body() createPostDto: CreatePostDto): Promise<PostDto> {
    return await this.postsService.create(createPostDto);
  }

  @Get('get-all-posts')
  async findAll(): Promise<PostDto[]> {
    return await this.postsService.findAll();
  }

  @Get('get-post/:id')
  async findOne(@Param('id') id: string): Promise<PostDto> {
    return await this.postsService.findOne(+id);
  }

  @Patch('update-post/:id')
  async update(
    @Param('id') id: string,
    @Body() updatePostDto: UpdatePostDto,
  ): Promise<PostDto> {
    return await this.postsService.update(+id, updatePostDto);
  }

  @Delete('remove-post/:id')
  async remove(@Param('id') id: string): Promise<PostDto> {
    return await this.postsService.remove(+id);
  }
}

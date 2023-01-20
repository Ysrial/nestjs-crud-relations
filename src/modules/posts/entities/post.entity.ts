import { User } from '../../users/entities/user.entity';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ nullable: false })
  content: string;

  //Relations
  @ManyToOne(() => User, (user) => user.posts)
  user: User;
}

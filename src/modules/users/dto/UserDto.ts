import { User } from '../entities/user.entity';

export class UserDto {
  id: number;
  nome: string;
  idade: number;

  constructor(user: User) {
    this.id = user.id;
    this.nome = user.nome;
    this.idade = user.idade;
  }
}

import { User } from './../models/user.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: Array<User> = [
    {
      id: 1,
      nome: "Leo",
      email: "leo@gmail.com",
      senha: "123456"
    },
    {
      id: 2,
      nome: "Kennedy",
      email: "kennedy@gmail.com",
      senha: "123456"
    }
  ];

  constructor() { }

  getUsers() {
    return this.users;
  }

  getUserByEmailAndPassword(email: string, password: string) {
    return this.users.find((user) => user.email === email && user.senha === password);
  }
}

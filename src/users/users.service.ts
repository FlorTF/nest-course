import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  //PROPIEDADES
  private users = [
    {
      id: 1,
      name: 'John Doe',
      phone: '123456789',
    },
    {
      id: 2,
      name: 'Jane Doe',
      phone: '123456789',
    },
  ];

  //METODO
  getUsers() {
    return this.users;
  }
}

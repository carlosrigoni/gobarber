import CreateUserService from '@modules/users/services/CreateUserService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import UsersRepository from '../../typeorm/repositories/UsersRepository';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const CreateUser = container.resolve(CreateUserService);

    const user = await CreateUser.execute({ name, email, password });

    delete user.password;

    return response.json(user);
  }
}

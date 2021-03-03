import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    name: 'Larissa',
    email: 'larissa_souz@hotmail.com',
    password: '123456',
    techs: [
      'ReactJS',
      'React-Native',
      'NodeJS',
      { title: 'JavaScript', experience: 100},      
    ],
  });

  console.log(user.email);

  return response.json({ message: 'Hello'});
}
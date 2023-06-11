import { sign } from 'jsonwebtoken';
import { compare } from 'bcryptjs';

import prisma from '../../prisma';
interface IAuthRequestProps {
  email: string;
  password: string;
}

class AuthUserService {
  async execute({ email, password }: IAuthRequestProps) {
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      throw new Error('User/Password incorrect');
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error('User/Password incorrect');
    }

    const token = sign(
      {
        name: user.name,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        subject: user.id,
        expiresIn: '30d',
      },
    );

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      token,
    };
  }
}

export { AuthUserService };

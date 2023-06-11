import prisma from '../../prisma';
import { compare } from 'bcryptjs';

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

    return {
      status: passwordMatch,
    };
  }
}

export { AuthUserService };

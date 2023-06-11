import prisma from '../../prisma';
import bcryptjs from 'bcryptjs';
interface ICreateUserServiceProps {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  async execute(data: ICreateUserServiceProps) {
    await this.verifyUserExist(data.email);

    if (!data.email) {
      throw new Error('Email incorrect');
    }

    const passwordHash = await bcryptjs.hash(data.password, 8);

    return await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: passwordHash,
      },
      select: {
        id: true,
        name: true,
        email: true,
        created_at: true,
      },
    });
  }

  async verifyUserExist(email: string) {
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (user) {
      throw new Error('User already exists');
    }
  }
}

export { CreateUserService };

interface ICreateUserServiceProps {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  async execute(data: ICreateUserServiceProps) {}
}

export { CreateUserService };

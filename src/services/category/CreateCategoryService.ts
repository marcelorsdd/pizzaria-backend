import prisma from '../../prisma';

class CreateCategoryService {
  async execute(name: string) {
    if (!name) {
      throw new Error('Name is required');
    }

    const category = await prisma.category.findFirst({
      where: {
        name,
      },
    });

    if (category) {
      throw new Error('Category already exists');
    }

    return await prisma.category.create({
      data: {
        name,
      },
    });
  }
}

export { CreateCategoryService };

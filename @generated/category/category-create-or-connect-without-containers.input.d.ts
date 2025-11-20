import { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { CategoryCreateWithoutContainersInput } from './category-create-without-containers.input';
export declare class CategoryCreateOrConnectWithoutContainersInput {
    where: Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>;
    create: CategoryCreateWithoutContainersInput;
}

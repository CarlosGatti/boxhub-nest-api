import { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { CategoryUpdateWithoutContainersInput } from './category-update-without-containers.input';
import { CategoryCreateWithoutContainersInput } from './category-create-without-containers.input';
export declare class CategoryUpsertWithWhereUniqueWithoutContainersInput {
    where: Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>;
    update: CategoryUpdateWithoutContainersInput;
    create: CategoryCreateWithoutContainersInput;
}

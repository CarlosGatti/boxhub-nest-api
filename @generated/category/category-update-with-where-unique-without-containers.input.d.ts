import { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { CategoryUpdateWithoutContainersInput } from './category-update-without-containers.input';
export declare class CategoryUpdateWithWhereUniqueWithoutContainersInput {
    where: Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>;
    data: CategoryUpdateWithoutContainersInput;
}

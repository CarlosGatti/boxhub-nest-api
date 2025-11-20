import { CategoryCreateWithoutContainersInput } from './category-create-without-containers.input';
import { CategoryCreateOrConnectWithoutContainersInput } from './category-create-or-connect-without-containers.input';
import { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
export declare class CategoryCreateNestedManyWithoutContainersInput {
    create?: Array<CategoryCreateWithoutContainersInput>;
    connectOrCreate?: Array<CategoryCreateOrConnectWithoutContainersInput>;
    connect?: Array<Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>>;
}

import { CategoryCreateWithoutContainersInput } from './category-create-without-containers.input';
import { CategoryCreateOrConnectWithoutContainersInput } from './category-create-or-connect-without-containers.input';
import { CategoryUpsertWithWhereUniqueWithoutContainersInput } from './category-upsert-with-where-unique-without-containers.input';
import { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { CategoryUpdateWithWhereUniqueWithoutContainersInput } from './category-update-with-where-unique-without-containers.input';
import { CategoryUpdateManyWithWhereWithoutContainersInput } from './category-update-many-with-where-without-containers.input';
import { CategoryScalarWhereInput } from './category-scalar-where.input';
export declare class CategoryUpdateManyWithoutContainersNestedInput {
    create?: Array<CategoryCreateWithoutContainersInput>;
    connectOrCreate?: Array<CategoryCreateOrConnectWithoutContainersInput>;
    upsert?: Array<CategoryUpsertWithWhereUniqueWithoutContainersInput>;
    set?: Array<Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>>;
    update?: Array<CategoryUpdateWithWhereUniqueWithoutContainersInput>;
    updateMany?: Array<CategoryUpdateManyWithWhereWithoutContainersInput>;
    deleteMany?: Array<CategoryScalarWhereInput>;
}

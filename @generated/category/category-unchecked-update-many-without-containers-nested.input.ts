import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutContainersInput } from './category-create-without-containers.input';
import { Type } from 'class-transformer';
import { CategoryCreateOrConnectWithoutContainersInput } from './category-create-or-connect-without-containers.input';
import { CategoryUpsertWithWhereUniqueWithoutContainersInput } from './category-upsert-with-where-unique-without-containers.input';
import { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { CategoryUpdateWithWhereUniqueWithoutContainersInput } from './category-update-with-where-unique-without-containers.input';
import { CategoryUpdateManyWithWhereWithoutContainersInput } from './category-update-many-with-where-without-containers.input';
import { CategoryScalarWhereInput } from './category-scalar-where.input';

@InputType()
export class CategoryUncheckedUpdateManyWithoutContainersNestedInput {

    @Field(() => [CategoryCreateWithoutContainersInput], {nullable:true})
    @Type(() => CategoryCreateWithoutContainersInput)
    create?: Array<CategoryCreateWithoutContainersInput>;

    @Field(() => [CategoryCreateOrConnectWithoutContainersInput], {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutContainersInput)
    connectOrCreate?: Array<CategoryCreateOrConnectWithoutContainersInput>;

    @Field(() => [CategoryUpsertWithWhereUniqueWithoutContainersInput], {nullable:true})
    @Type(() => CategoryUpsertWithWhereUniqueWithoutContainersInput)
    upsert?: Array<CategoryUpsertWithWhereUniqueWithoutContainersInput>;

    @Field(() => [CategoryWhereUniqueInput], {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    set?: Array<Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>>;

    @Field(() => [CategoryWhereUniqueInput], {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>>;

    @Field(() => [CategoryWhereUniqueInput], {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>>;

    @Field(() => [CategoryWhereUniqueInput], {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>>;

    @Field(() => [CategoryUpdateWithWhereUniqueWithoutContainersInput], {nullable:true})
    @Type(() => CategoryUpdateWithWhereUniqueWithoutContainersInput)
    update?: Array<CategoryUpdateWithWhereUniqueWithoutContainersInput>;

    @Field(() => [CategoryUpdateManyWithWhereWithoutContainersInput], {nullable:true})
    @Type(() => CategoryUpdateManyWithWhereWithoutContainersInput)
    updateMany?: Array<CategoryUpdateManyWithWhereWithoutContainersInput>;

    @Field(() => [CategoryScalarWhereInput], {nullable:true})
    @Type(() => CategoryScalarWhereInput)
    deleteMany?: Array<CategoryScalarWhereInput>;
}

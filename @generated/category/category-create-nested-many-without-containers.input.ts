import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutContainersInput } from './category-create-without-containers.input';
import { Type } from 'class-transformer';
import { CategoryCreateOrConnectWithoutContainersInput } from './category-create-or-connect-without-containers.input';
import { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInput } from './category-where-unique.input';

@InputType()
export class CategoryCreateNestedManyWithoutContainersInput {

    @Field(() => [CategoryCreateWithoutContainersInput], {nullable:true})
    @Type(() => CategoryCreateWithoutContainersInput)
    create?: Array<CategoryCreateWithoutContainersInput>;

    @Field(() => [CategoryCreateOrConnectWithoutContainersInput], {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutContainersInput)
    connectOrCreate?: Array<CategoryCreateOrConnectWithoutContainersInput>;

    @Field(() => [CategoryWhereUniqueInput], {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>>;
}

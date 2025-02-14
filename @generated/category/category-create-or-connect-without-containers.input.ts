import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { Type } from 'class-transformer';
import { CategoryCreateWithoutContainersInput } from './category-create-without-containers.input';

@InputType()
export class CategoryCreateOrConnectWithoutContainersInput {

    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    where!: Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>;

    @Field(() => CategoryCreateWithoutContainersInput, {nullable:false})
    @Type(() => CategoryCreateWithoutContainersInput)
    create!: CategoryCreateWithoutContainersInput;
}

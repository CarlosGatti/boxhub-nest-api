import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { Type } from 'class-transformer';
import { CategoryUpdateWithoutContainersInput } from './category-update-without-containers.input';
import { CategoryCreateWithoutContainersInput } from './category-create-without-containers.input';

@InputType()
export class CategoryUpsertWithWhereUniqueWithoutContainersInput {

    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    where!: Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>;

    @Field(() => CategoryUpdateWithoutContainersInput, {nullable:false})
    @Type(() => CategoryUpdateWithoutContainersInput)
    update!: CategoryUpdateWithoutContainersInput;

    @Field(() => CategoryCreateWithoutContainersInput, {nullable:false})
    @Type(() => CategoryCreateWithoutContainersInput)
    create!: CategoryCreateWithoutContainersInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ContainerWhereUniqueInput } from './container-where-unique.input';
import { Type } from 'class-transformer';
import { ContainerUpdateWithoutCategoriesInput } from './container-update-without-categories.input';

@InputType()
export class ContainerUpdateWithWhereUniqueWithoutCategoriesInput {

    @Field(() => ContainerWhereUniqueInput, {nullable:false})
    @Type(() => ContainerWhereUniqueInput)
    where!: Prisma.AtLeast<ContainerWhereUniqueInput, 'id' | 'code'>;

    @Field(() => ContainerUpdateWithoutCategoriesInput, {nullable:false})
    @Type(() => ContainerUpdateWithoutCategoriesInput)
    data!: ContainerUpdateWithoutCategoriesInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ContainerWhereUniqueInput } from './container-where-unique.input';
import { Type } from 'class-transformer';
import { ContainerCreateWithoutCategoriesInput } from './container-create-without-categories.input';

@InputType()
export class ContainerCreateOrConnectWithoutCategoriesInput {

    @Field(() => ContainerWhereUniqueInput, {nullable:false})
    @Type(() => ContainerWhereUniqueInput)
    where!: Prisma.AtLeast<ContainerWhereUniqueInput, 'id' | 'code'>;

    @Field(() => ContainerCreateWithoutCategoriesInput, {nullable:false})
    @Type(() => ContainerCreateWithoutCategoriesInput)
    create!: ContainerCreateWithoutCategoriesInput;
}

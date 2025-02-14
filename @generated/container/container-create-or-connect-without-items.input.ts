import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ContainerWhereUniqueInput } from './container-where-unique.input';
import { Type } from 'class-transformer';
import { ContainerCreateWithoutItemsInput } from './container-create-without-items.input';

@InputType()
export class ContainerCreateOrConnectWithoutItemsInput {

    @Field(() => ContainerWhereUniqueInput, {nullable:false})
    @Type(() => ContainerWhereUniqueInput)
    where!: Prisma.AtLeast<ContainerWhereUniqueInput, 'id' | 'code'>;

    @Field(() => ContainerCreateWithoutItemsInput, {nullable:false})
    @Type(() => ContainerCreateWithoutItemsInput)
    create!: ContainerCreateWithoutItemsInput;
}

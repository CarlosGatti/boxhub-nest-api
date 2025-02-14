import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContainerUpdateInput } from './container-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ContainerWhereUniqueInput } from './container-where-unique.input';

@ArgsType()
export class UpdateOneContainerArgs {

    @Field(() => ContainerUpdateInput, {nullable:false})
    @Type(() => ContainerUpdateInput)
    data!: ContainerUpdateInput;

    @Field(() => ContainerWhereUniqueInput, {nullable:false})
    @Type(() => ContainerWhereUniqueInput)
    where!: Prisma.AtLeast<ContainerWhereUniqueInput, 'id' | 'code'>;
}

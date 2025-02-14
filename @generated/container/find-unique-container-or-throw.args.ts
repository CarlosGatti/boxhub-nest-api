import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ContainerWhereUniqueInput } from './container-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueContainerOrThrowArgs {

    @Field(() => ContainerWhereUniqueInput, {nullable:false})
    @Type(() => ContainerWhereUniqueInput)
    where!: Prisma.AtLeast<ContainerWhereUniqueInput, 'id' | 'code'>;
}

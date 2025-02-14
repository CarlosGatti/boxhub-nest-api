import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ContainerWhereUniqueInput } from './container-where-unique.input';
import { Type } from 'class-transformer';
import { ContainerCreateWithoutFamilyInput } from './container-create-without-family.input';

@InputType()
export class ContainerCreateOrConnectWithoutFamilyInput {

    @Field(() => ContainerWhereUniqueInput, {nullable:false})
    @Type(() => ContainerWhereUniqueInput)
    where!: Prisma.AtLeast<ContainerWhereUniqueInput, 'id' | 'code'>;

    @Field(() => ContainerCreateWithoutFamilyInput, {nullable:false})
    @Type(() => ContainerCreateWithoutFamilyInput)
    create!: ContainerCreateWithoutFamilyInput;
}

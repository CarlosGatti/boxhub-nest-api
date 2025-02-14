import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ContainerWhereUniqueInput } from './container-where-unique.input';
import { Type } from 'class-transformer';
import { ContainerUpdateWithoutFamilyInput } from './container-update-without-family.input';

@InputType()
export class ContainerUpdateWithWhereUniqueWithoutFamilyInput {

    @Field(() => ContainerWhereUniqueInput, {nullable:false})
    @Type(() => ContainerWhereUniqueInput)
    where!: Prisma.AtLeast<ContainerWhereUniqueInput, 'id' | 'code'>;

    @Field(() => ContainerUpdateWithoutFamilyInput, {nullable:false})
    @Type(() => ContainerUpdateWithoutFamilyInput)
    data!: ContainerUpdateWithoutFamilyInput;
}

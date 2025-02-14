import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ContainerWhereUniqueInput } from './container-where-unique.input';
import { Type } from 'class-transformer';
import { ContainerUpdateWithoutFamilyInput } from './container-update-without-family.input';
import { ContainerCreateWithoutFamilyInput } from './container-create-without-family.input';

@InputType()
export class ContainerUpsertWithWhereUniqueWithoutFamilyInput {

    @Field(() => ContainerWhereUniqueInput, {nullable:false})
    @Type(() => ContainerWhereUniqueInput)
    where!: Prisma.AtLeast<ContainerWhereUniqueInput, 'id' | 'code'>;

    @Field(() => ContainerUpdateWithoutFamilyInput, {nullable:false})
    @Type(() => ContainerUpdateWithoutFamilyInput)
    update!: ContainerUpdateWithoutFamilyInput;

    @Field(() => ContainerCreateWithoutFamilyInput, {nullable:false})
    @Type(() => ContainerCreateWithoutFamilyInput)
    create!: ContainerCreateWithoutFamilyInput;
}

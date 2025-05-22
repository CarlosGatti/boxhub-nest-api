import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ContainerWhereUniqueInput } from './container-where-unique.input';
import { Type } from 'class-transformer';
import { ContainerUpdateWithoutStorageInput } from './container-update-without-storage.input';

@InputType()
export class ContainerUpdateWithWhereUniqueWithoutStorageInput {

    @Field(() => ContainerWhereUniqueInput, {nullable:false})
    @Type(() => ContainerWhereUniqueInput)
    where!: Prisma.AtLeast<ContainerWhereUniqueInput, 'id' | 'code'>;

    @Field(() => ContainerUpdateWithoutStorageInput, {nullable:false})
    @Type(() => ContainerUpdateWithoutStorageInput)
    data!: ContainerUpdateWithoutStorageInput;
}

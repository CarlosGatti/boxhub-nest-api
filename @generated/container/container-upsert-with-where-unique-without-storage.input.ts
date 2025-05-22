import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ContainerWhereUniqueInput } from './container-where-unique.input';
import { Type } from 'class-transformer';
import { ContainerUpdateWithoutStorageInput } from './container-update-without-storage.input';
import { ContainerCreateWithoutStorageInput } from './container-create-without-storage.input';

@InputType()
export class ContainerUpsertWithWhereUniqueWithoutStorageInput {

    @Field(() => ContainerWhereUniqueInput, {nullable:false})
    @Type(() => ContainerWhereUniqueInput)
    where!: Prisma.AtLeast<ContainerWhereUniqueInput, 'id' | 'code'>;

    @Field(() => ContainerUpdateWithoutStorageInput, {nullable:false})
    @Type(() => ContainerUpdateWithoutStorageInput)
    update!: ContainerUpdateWithoutStorageInput;

    @Field(() => ContainerCreateWithoutStorageInput, {nullable:false})
    @Type(() => ContainerCreateWithoutStorageInput)
    create!: ContainerCreateWithoutStorageInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ContainerWhereUniqueInput } from './container-where-unique.input';
import { Type } from 'class-transformer';
import { ContainerCreateWithoutStorageInput } from './container-create-without-storage.input';

@InputType()
export class ContainerCreateOrConnectWithoutStorageInput {

    @Field(() => ContainerWhereUniqueInput, {nullable:false})
    @Type(() => ContainerWhereUniqueInput)
    where!: Prisma.AtLeast<ContainerWhereUniqueInput, 'id' | 'code'>;

    @Field(() => ContainerCreateWithoutStorageInput, {nullable:false})
    @Type(() => ContainerCreateWithoutStorageInput)
    create!: ContainerCreateWithoutStorageInput;
}

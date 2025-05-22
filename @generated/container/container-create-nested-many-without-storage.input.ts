import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContainerCreateWithoutStorageInput } from './container-create-without-storage.input';
import { Type } from 'class-transformer';
import { ContainerCreateOrConnectWithoutStorageInput } from './container-create-or-connect-without-storage.input';
import { ContainerCreateManyStorageInputEnvelope } from './container-create-many-storage-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ContainerWhereUniqueInput } from './container-where-unique.input';

@InputType()
export class ContainerCreateNestedManyWithoutStorageInput {

    @Field(() => [ContainerCreateWithoutStorageInput], {nullable:true})
    @Type(() => ContainerCreateWithoutStorageInput)
    create?: Array<ContainerCreateWithoutStorageInput>;

    @Field(() => [ContainerCreateOrConnectWithoutStorageInput], {nullable:true})
    @Type(() => ContainerCreateOrConnectWithoutStorageInput)
    connectOrCreate?: Array<ContainerCreateOrConnectWithoutStorageInput>;

    @Field(() => ContainerCreateManyStorageInputEnvelope, {nullable:true})
    @Type(() => ContainerCreateManyStorageInputEnvelope)
    createMany?: ContainerCreateManyStorageInputEnvelope;

    @Field(() => [ContainerWhereUniqueInput], {nullable:true})
    @Type(() => ContainerWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ContainerWhereUniqueInput, 'id' | 'code'>>;
}

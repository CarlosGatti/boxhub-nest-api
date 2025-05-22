import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContainerCreateWithoutStorageInput } from './container-create-without-storage.input';
import { Type } from 'class-transformer';
import { ContainerCreateOrConnectWithoutStorageInput } from './container-create-or-connect-without-storage.input';
import { ContainerUpsertWithWhereUniqueWithoutStorageInput } from './container-upsert-with-where-unique-without-storage.input';
import { ContainerCreateManyStorageInputEnvelope } from './container-create-many-storage-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ContainerWhereUniqueInput } from './container-where-unique.input';
import { ContainerUpdateWithWhereUniqueWithoutStorageInput } from './container-update-with-where-unique-without-storage.input';
import { ContainerUpdateManyWithWhereWithoutStorageInput } from './container-update-many-with-where-without-storage.input';
import { ContainerScalarWhereInput } from './container-scalar-where.input';

@InputType()
export class ContainerUpdateManyWithoutStorageNestedInput {

    @Field(() => [ContainerCreateWithoutStorageInput], {nullable:true})
    @Type(() => ContainerCreateWithoutStorageInput)
    create?: Array<ContainerCreateWithoutStorageInput>;

    @Field(() => [ContainerCreateOrConnectWithoutStorageInput], {nullable:true})
    @Type(() => ContainerCreateOrConnectWithoutStorageInput)
    connectOrCreate?: Array<ContainerCreateOrConnectWithoutStorageInput>;

    @Field(() => [ContainerUpsertWithWhereUniqueWithoutStorageInput], {nullable:true})
    @Type(() => ContainerUpsertWithWhereUniqueWithoutStorageInput)
    upsert?: Array<ContainerUpsertWithWhereUniqueWithoutStorageInput>;

    @Field(() => ContainerCreateManyStorageInputEnvelope, {nullable:true})
    @Type(() => ContainerCreateManyStorageInputEnvelope)
    createMany?: ContainerCreateManyStorageInputEnvelope;

    @Field(() => [ContainerWhereUniqueInput], {nullable:true})
    @Type(() => ContainerWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ContainerWhereUniqueInput, 'id' | 'code'>>;

    @Field(() => [ContainerWhereUniqueInput], {nullable:true})
    @Type(() => ContainerWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ContainerWhereUniqueInput, 'id' | 'code'>>;

    @Field(() => [ContainerWhereUniqueInput], {nullable:true})
    @Type(() => ContainerWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ContainerWhereUniqueInput, 'id' | 'code'>>;

    @Field(() => [ContainerWhereUniqueInput], {nullable:true})
    @Type(() => ContainerWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ContainerWhereUniqueInput, 'id' | 'code'>>;

    @Field(() => [ContainerUpdateWithWhereUniqueWithoutStorageInput], {nullable:true})
    @Type(() => ContainerUpdateWithWhereUniqueWithoutStorageInput)
    update?: Array<ContainerUpdateWithWhereUniqueWithoutStorageInput>;

    @Field(() => [ContainerUpdateManyWithWhereWithoutStorageInput], {nullable:true})
    @Type(() => ContainerUpdateManyWithWhereWithoutStorageInput)
    updateMany?: Array<ContainerUpdateManyWithWhereWithoutStorageInput>;

    @Field(() => [ContainerScalarWhereInput], {nullable:true})
    @Type(() => ContainerScalarWhereInput)
    deleteMany?: Array<ContainerScalarWhereInput>;
}

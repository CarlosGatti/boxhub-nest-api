import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContainerCreateWithoutFamilyInput } from './container-create-without-family.input';
import { Type } from 'class-transformer';
import { ContainerCreateOrConnectWithoutFamilyInput } from './container-create-or-connect-without-family.input';
import { ContainerUpsertWithWhereUniqueWithoutFamilyInput } from './container-upsert-with-where-unique-without-family.input';
import { ContainerCreateManyFamilyInputEnvelope } from './container-create-many-family-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ContainerWhereUniqueInput } from './container-where-unique.input';
import { ContainerUpdateWithWhereUniqueWithoutFamilyInput } from './container-update-with-where-unique-without-family.input';
import { ContainerUpdateManyWithWhereWithoutFamilyInput } from './container-update-many-with-where-without-family.input';
import { ContainerScalarWhereInput } from './container-scalar-where.input';

@InputType()
export class ContainerUncheckedUpdateManyWithoutFamilyNestedInput {

    @Field(() => [ContainerCreateWithoutFamilyInput], {nullable:true})
    @Type(() => ContainerCreateWithoutFamilyInput)
    create?: Array<ContainerCreateWithoutFamilyInput>;

    @Field(() => [ContainerCreateOrConnectWithoutFamilyInput], {nullable:true})
    @Type(() => ContainerCreateOrConnectWithoutFamilyInput)
    connectOrCreate?: Array<ContainerCreateOrConnectWithoutFamilyInput>;

    @Field(() => [ContainerUpsertWithWhereUniqueWithoutFamilyInput], {nullable:true})
    @Type(() => ContainerUpsertWithWhereUniqueWithoutFamilyInput)
    upsert?: Array<ContainerUpsertWithWhereUniqueWithoutFamilyInput>;

    @Field(() => ContainerCreateManyFamilyInputEnvelope, {nullable:true})
    @Type(() => ContainerCreateManyFamilyInputEnvelope)
    createMany?: ContainerCreateManyFamilyInputEnvelope;

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

    @Field(() => [ContainerUpdateWithWhereUniqueWithoutFamilyInput], {nullable:true})
    @Type(() => ContainerUpdateWithWhereUniqueWithoutFamilyInput)
    update?: Array<ContainerUpdateWithWhereUniqueWithoutFamilyInput>;

    @Field(() => [ContainerUpdateManyWithWhereWithoutFamilyInput], {nullable:true})
    @Type(() => ContainerUpdateManyWithWhereWithoutFamilyInput)
    updateMany?: Array<ContainerUpdateManyWithWhereWithoutFamilyInput>;

    @Field(() => [ContainerScalarWhereInput], {nullable:true})
    @Type(() => ContainerScalarWhereInput)
    deleteMany?: Array<ContainerScalarWhereInput>;
}

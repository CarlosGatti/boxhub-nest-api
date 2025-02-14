import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContainerCreateWithoutFamilyInput } from './container-create-without-family.input';
import { Type } from 'class-transformer';
import { ContainerCreateOrConnectWithoutFamilyInput } from './container-create-or-connect-without-family.input';
import { ContainerCreateManyFamilyInputEnvelope } from './container-create-many-family-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ContainerWhereUniqueInput } from './container-where-unique.input';

@InputType()
export class ContainerCreateNestedManyWithoutFamilyInput {

    @Field(() => [ContainerCreateWithoutFamilyInput], {nullable:true})
    @Type(() => ContainerCreateWithoutFamilyInput)
    create?: Array<ContainerCreateWithoutFamilyInput>;

    @Field(() => [ContainerCreateOrConnectWithoutFamilyInput], {nullable:true})
    @Type(() => ContainerCreateOrConnectWithoutFamilyInput)
    connectOrCreate?: Array<ContainerCreateOrConnectWithoutFamilyInput>;

    @Field(() => ContainerCreateManyFamilyInputEnvelope, {nullable:true})
    @Type(() => ContainerCreateManyFamilyInputEnvelope)
    createMany?: ContainerCreateManyFamilyInputEnvelope;

    @Field(() => [ContainerWhereUniqueInput], {nullable:true})
    @Type(() => ContainerWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ContainerWhereUniqueInput, 'id' | 'code'>>;
}

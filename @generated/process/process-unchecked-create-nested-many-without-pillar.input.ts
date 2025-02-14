import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProcessCreateWithoutPillarInput } from './process-create-without-pillar.input';
import { Type } from 'class-transformer';
import { ProcessCreateOrConnectWithoutPillarInput } from './process-create-or-connect-without-pillar.input';
import { ProcessCreateManyPillarInputEnvelope } from './process-create-many-pillar-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProcessWhereUniqueInput } from './process-where-unique.input';

@InputType()
export class ProcessUncheckedCreateNestedManyWithoutPillarInput {

    @Field(() => [ProcessCreateWithoutPillarInput], {nullable:true})
    @Type(() => ProcessCreateWithoutPillarInput)
    create?: Array<ProcessCreateWithoutPillarInput>;

    @Field(() => [ProcessCreateOrConnectWithoutPillarInput], {nullable:true})
    @Type(() => ProcessCreateOrConnectWithoutPillarInput)
    connectOrCreate?: Array<ProcessCreateOrConnectWithoutPillarInput>;

    @Field(() => ProcessCreateManyPillarInputEnvelope, {nullable:true})
    @Type(() => ProcessCreateManyPillarInputEnvelope)
    createMany?: ProcessCreateManyPillarInputEnvelope;

    @Field(() => [ProcessWhereUniqueInput], {nullable:true})
    @Type(() => ProcessWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProcessWhereUniqueInput, 'id'>>;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProcessCreateWithoutPillarInput } from './process-create-without-pillar.input';
import { Type } from 'class-transformer';
import { ProcessCreateOrConnectWithoutPillarInput } from './process-create-or-connect-without-pillar.input';
import { ProcessUpsertWithWhereUniqueWithoutPillarInput } from './process-upsert-with-where-unique-without-pillar.input';
import { ProcessCreateManyPillarInputEnvelope } from './process-create-many-pillar-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProcessWhereUniqueInput } from './process-where-unique.input';
import { ProcessUpdateWithWhereUniqueWithoutPillarInput } from './process-update-with-where-unique-without-pillar.input';
import { ProcessUpdateManyWithWhereWithoutPillarInput } from './process-update-many-with-where-without-pillar.input';
import { ProcessScalarWhereInput } from './process-scalar-where.input';

@InputType()
export class ProcessUncheckedUpdateManyWithoutPillarNestedInput {

    @Field(() => [ProcessCreateWithoutPillarInput], {nullable:true})
    @Type(() => ProcessCreateWithoutPillarInput)
    create?: Array<ProcessCreateWithoutPillarInput>;

    @Field(() => [ProcessCreateOrConnectWithoutPillarInput], {nullable:true})
    @Type(() => ProcessCreateOrConnectWithoutPillarInput)
    connectOrCreate?: Array<ProcessCreateOrConnectWithoutPillarInput>;

    @Field(() => [ProcessUpsertWithWhereUniqueWithoutPillarInput], {nullable:true})
    @Type(() => ProcessUpsertWithWhereUniqueWithoutPillarInput)
    upsert?: Array<ProcessUpsertWithWhereUniqueWithoutPillarInput>;

    @Field(() => ProcessCreateManyPillarInputEnvelope, {nullable:true})
    @Type(() => ProcessCreateManyPillarInputEnvelope)
    createMany?: ProcessCreateManyPillarInputEnvelope;

    @Field(() => [ProcessWhereUniqueInput], {nullable:true})
    @Type(() => ProcessWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ProcessWhereUniqueInput, 'id'>>;

    @Field(() => [ProcessWhereUniqueInput], {nullable:true})
    @Type(() => ProcessWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ProcessWhereUniqueInput, 'id'>>;

    @Field(() => [ProcessWhereUniqueInput], {nullable:true})
    @Type(() => ProcessWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ProcessWhereUniqueInput, 'id'>>;

    @Field(() => [ProcessWhereUniqueInput], {nullable:true})
    @Type(() => ProcessWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProcessWhereUniqueInput, 'id'>>;

    @Field(() => [ProcessUpdateWithWhereUniqueWithoutPillarInput], {nullable:true})
    @Type(() => ProcessUpdateWithWhereUniqueWithoutPillarInput)
    update?: Array<ProcessUpdateWithWhereUniqueWithoutPillarInput>;

    @Field(() => [ProcessUpdateManyWithWhereWithoutPillarInput], {nullable:true})
    @Type(() => ProcessUpdateManyWithWhereWithoutPillarInput)
    updateMany?: Array<ProcessUpdateManyWithWhereWithoutPillarInput>;

    @Field(() => [ProcessScalarWhereInput], {nullable:true})
    @Type(() => ProcessScalarWhereInput)
    deleteMany?: Array<ProcessScalarWhereInput>;
}

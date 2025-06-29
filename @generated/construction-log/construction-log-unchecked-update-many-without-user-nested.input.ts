import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConstructionLogCreateWithoutUserInput } from './construction-log-create-without-user.input';
import { Type } from 'class-transformer';
import { ConstructionLogCreateOrConnectWithoutUserInput } from './construction-log-create-or-connect-without-user.input';
import { ConstructionLogUpsertWithWhereUniqueWithoutUserInput } from './construction-log-upsert-with-where-unique-without-user.input';
import { ConstructionLogCreateManyUserInputEnvelope } from './construction-log-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ConstructionLogWhereUniqueInput } from './construction-log-where-unique.input';
import { ConstructionLogUpdateWithWhereUniqueWithoutUserInput } from './construction-log-update-with-where-unique-without-user.input';
import { ConstructionLogUpdateManyWithWhereWithoutUserInput } from './construction-log-update-many-with-where-without-user.input';
import { ConstructionLogScalarWhereInput } from './construction-log-scalar-where.input';

@InputType()
export class ConstructionLogUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [ConstructionLogCreateWithoutUserInput], {nullable:true})
    @Type(() => ConstructionLogCreateWithoutUserInput)
    create?: Array<ConstructionLogCreateWithoutUserInput>;

    @Field(() => [ConstructionLogCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ConstructionLogCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<ConstructionLogCreateOrConnectWithoutUserInput>;

    @Field(() => [ConstructionLogUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ConstructionLogUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<ConstructionLogUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => ConstructionLogCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ConstructionLogCreateManyUserInputEnvelope)
    createMany?: ConstructionLogCreateManyUserInputEnvelope;

    @Field(() => [ConstructionLogWhereUniqueInput], {nullable:true})
    @Type(() => ConstructionLogWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ConstructionLogWhereUniqueInput, 'id'>>;

    @Field(() => [ConstructionLogWhereUniqueInput], {nullable:true})
    @Type(() => ConstructionLogWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ConstructionLogWhereUniqueInput, 'id'>>;

    @Field(() => [ConstructionLogWhereUniqueInput], {nullable:true})
    @Type(() => ConstructionLogWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ConstructionLogWhereUniqueInput, 'id'>>;

    @Field(() => [ConstructionLogWhereUniqueInput], {nullable:true})
    @Type(() => ConstructionLogWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ConstructionLogWhereUniqueInput, 'id'>>;

    @Field(() => [ConstructionLogUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ConstructionLogUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<ConstructionLogUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [ConstructionLogUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => ConstructionLogUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<ConstructionLogUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [ConstructionLogScalarWhereInput], {nullable:true})
    @Type(() => ConstructionLogScalarWhereInput)
    deleteMany?: Array<ConstructionLogScalarWhereInput>;
}

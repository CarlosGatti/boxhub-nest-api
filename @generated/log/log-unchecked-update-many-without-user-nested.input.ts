import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LogCreateWithoutUserInput } from './log-create-without-user.input';
import { Type } from 'class-transformer';
import { LogCreateOrConnectWithoutUserInput } from './log-create-or-connect-without-user.input';
import { LogUpsertWithWhereUniqueWithoutUserInput } from './log-upsert-with-where-unique-without-user.input';
import { LogCreateManyUserInputEnvelope } from './log-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { LogWhereUniqueInput } from './log-where-unique.input';
import { LogUpdateWithWhereUniqueWithoutUserInput } from './log-update-with-where-unique-without-user.input';
import { LogUpdateManyWithWhereWithoutUserInput } from './log-update-many-with-where-without-user.input';
import { LogScalarWhereInput } from './log-scalar-where.input';

@InputType()
export class LogUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [LogCreateWithoutUserInput], {nullable:true})
    @Type(() => LogCreateWithoutUserInput)
    create?: Array<LogCreateWithoutUserInput>;

    @Field(() => [LogCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => LogCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<LogCreateOrConnectWithoutUserInput>;

    @Field(() => [LogUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => LogUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<LogUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => LogCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => LogCreateManyUserInputEnvelope)
    createMany?: LogCreateManyUserInputEnvelope;

    @Field(() => [LogWhereUniqueInput], {nullable:true})
    @Type(() => LogWhereUniqueInput)
    set?: Array<Prisma.AtLeast<LogWhereUniqueInput, 'id'>>;

    @Field(() => [LogWhereUniqueInput], {nullable:true})
    @Type(() => LogWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<LogWhereUniqueInput, 'id'>>;

    @Field(() => [LogWhereUniqueInput], {nullable:true})
    @Type(() => LogWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<LogWhereUniqueInput, 'id'>>;

    @Field(() => [LogWhereUniqueInput], {nullable:true})
    @Type(() => LogWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<LogWhereUniqueInput, 'id'>>;

    @Field(() => [LogUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => LogUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<LogUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [LogUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => LogUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<LogUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [LogScalarWhereInput], {nullable:true})
    @Type(() => LogScalarWhereInput)
    deleteMany?: Array<LogScalarWhereInput>;
}

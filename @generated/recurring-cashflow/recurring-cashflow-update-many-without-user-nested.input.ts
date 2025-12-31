import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecurringCashflowCreateWithoutUserInput } from './recurring-cashflow-create-without-user.input';
import { Type } from 'class-transformer';
import { RecurringCashflowCreateOrConnectWithoutUserInput } from './recurring-cashflow-create-or-connect-without-user.input';
import { RecurringCashflowUpsertWithWhereUniqueWithoutUserInput } from './recurring-cashflow-upsert-with-where-unique-without-user.input';
import { RecurringCashflowCreateManyUserInputEnvelope } from './recurring-cashflow-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { RecurringCashflowWhereUniqueInput } from './recurring-cashflow-where-unique.input';
import { RecurringCashflowUpdateWithWhereUniqueWithoutUserInput } from './recurring-cashflow-update-with-where-unique-without-user.input';
import { RecurringCashflowUpdateManyWithWhereWithoutUserInput } from './recurring-cashflow-update-many-with-where-without-user.input';
import { RecurringCashflowScalarWhereInput } from './recurring-cashflow-scalar-where.input';

@InputType()
export class RecurringCashflowUpdateManyWithoutUserNestedInput {

    @Field(() => [RecurringCashflowCreateWithoutUserInput], {nullable:true})
    @Type(() => RecurringCashflowCreateWithoutUserInput)
    create?: Array<RecurringCashflowCreateWithoutUserInput>;

    @Field(() => [RecurringCashflowCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => RecurringCashflowCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<RecurringCashflowCreateOrConnectWithoutUserInput>;

    @Field(() => [RecurringCashflowUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => RecurringCashflowUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<RecurringCashflowUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => RecurringCashflowCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => RecurringCashflowCreateManyUserInputEnvelope)
    createMany?: RecurringCashflowCreateManyUserInputEnvelope;

    @Field(() => [RecurringCashflowWhereUniqueInput], {nullable:true})
    @Type(() => RecurringCashflowWhereUniqueInput)
    set?: Array<Prisma.AtLeast<RecurringCashflowWhereUniqueInput, 'id'>>;

    @Field(() => [RecurringCashflowWhereUniqueInput], {nullable:true})
    @Type(() => RecurringCashflowWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<RecurringCashflowWhereUniqueInput, 'id'>>;

    @Field(() => [RecurringCashflowWhereUniqueInput], {nullable:true})
    @Type(() => RecurringCashflowWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<RecurringCashflowWhereUniqueInput, 'id'>>;

    @Field(() => [RecurringCashflowWhereUniqueInput], {nullable:true})
    @Type(() => RecurringCashflowWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RecurringCashflowWhereUniqueInput, 'id'>>;

    @Field(() => [RecurringCashflowUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => RecurringCashflowUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<RecurringCashflowUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [RecurringCashflowUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => RecurringCashflowUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<RecurringCashflowUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [RecurringCashflowScalarWhereInput], {nullable:true})
    @Type(() => RecurringCashflowScalarWhereInput)
    deleteMany?: Array<RecurringCashflowScalarWhereInput>;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecurringCashflowCreateWithoutUserInput } from './recurring-cashflow-create-without-user.input';
import { Type } from 'class-transformer';
import { RecurringCashflowCreateOrConnectWithoutUserInput } from './recurring-cashflow-create-or-connect-without-user.input';
import { RecurringCashflowCreateManyUserInputEnvelope } from './recurring-cashflow-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { RecurringCashflowWhereUniqueInput } from './recurring-cashflow-where-unique.input';

@InputType()
export class RecurringCashflowUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [RecurringCashflowCreateWithoutUserInput], {nullable:true})
    @Type(() => RecurringCashflowCreateWithoutUserInput)
    create?: Array<RecurringCashflowCreateWithoutUserInput>;

    @Field(() => [RecurringCashflowCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => RecurringCashflowCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<RecurringCashflowCreateOrConnectWithoutUserInput>;

    @Field(() => RecurringCashflowCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => RecurringCashflowCreateManyUserInputEnvelope)
    createMany?: RecurringCashflowCreateManyUserInputEnvelope;

    @Field(() => [RecurringCashflowWhereUniqueInput], {nullable:true})
    @Type(() => RecurringCashflowWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RecurringCashflowWhereUniqueInput, 'id'>>;
}

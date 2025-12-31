import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CashflowEntryCreateWithoutUserInput } from './cashflow-entry-create-without-user.input';
import { Type } from 'class-transformer';
import { CashflowEntryCreateOrConnectWithoutUserInput } from './cashflow-entry-create-or-connect-without-user.input';
import { CashflowEntryCreateManyUserInputEnvelope } from './cashflow-entry-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CashflowEntryWhereUniqueInput } from './cashflow-entry-where-unique.input';

@InputType()
export class CashflowEntryCreateNestedManyWithoutUserInput {

    @Field(() => [CashflowEntryCreateWithoutUserInput], {nullable:true})
    @Type(() => CashflowEntryCreateWithoutUserInput)
    create?: Array<CashflowEntryCreateWithoutUserInput>;

    @Field(() => [CashflowEntryCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => CashflowEntryCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<CashflowEntryCreateOrConnectWithoutUserInput>;

    @Field(() => CashflowEntryCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => CashflowEntryCreateManyUserInputEnvelope)
    createMany?: CashflowEntryCreateManyUserInputEnvelope;

    @Field(() => [CashflowEntryWhereUniqueInput], {nullable:true})
    @Type(() => CashflowEntryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CashflowEntryWhereUniqueInput, 'id'>>;
}

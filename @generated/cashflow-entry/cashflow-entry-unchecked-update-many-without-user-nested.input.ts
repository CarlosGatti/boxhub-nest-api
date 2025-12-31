import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CashflowEntryCreateWithoutUserInput } from './cashflow-entry-create-without-user.input';
import { Type } from 'class-transformer';
import { CashflowEntryCreateOrConnectWithoutUserInput } from './cashflow-entry-create-or-connect-without-user.input';
import { CashflowEntryUpsertWithWhereUniqueWithoutUserInput } from './cashflow-entry-upsert-with-where-unique-without-user.input';
import { CashflowEntryCreateManyUserInputEnvelope } from './cashflow-entry-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CashflowEntryWhereUniqueInput } from './cashflow-entry-where-unique.input';
import { CashflowEntryUpdateWithWhereUniqueWithoutUserInput } from './cashflow-entry-update-with-where-unique-without-user.input';
import { CashflowEntryUpdateManyWithWhereWithoutUserInput } from './cashflow-entry-update-many-with-where-without-user.input';
import { CashflowEntryScalarWhereInput } from './cashflow-entry-scalar-where.input';

@InputType()
export class CashflowEntryUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [CashflowEntryCreateWithoutUserInput], {nullable:true})
    @Type(() => CashflowEntryCreateWithoutUserInput)
    create?: Array<CashflowEntryCreateWithoutUserInput>;

    @Field(() => [CashflowEntryCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => CashflowEntryCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<CashflowEntryCreateOrConnectWithoutUserInput>;

    @Field(() => [CashflowEntryUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => CashflowEntryUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<CashflowEntryUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => CashflowEntryCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => CashflowEntryCreateManyUserInputEnvelope)
    createMany?: CashflowEntryCreateManyUserInputEnvelope;

    @Field(() => [CashflowEntryWhereUniqueInput], {nullable:true})
    @Type(() => CashflowEntryWhereUniqueInput)
    set?: Array<Prisma.AtLeast<CashflowEntryWhereUniqueInput, 'id'>>;

    @Field(() => [CashflowEntryWhereUniqueInput], {nullable:true})
    @Type(() => CashflowEntryWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<CashflowEntryWhereUniqueInput, 'id'>>;

    @Field(() => [CashflowEntryWhereUniqueInput], {nullable:true})
    @Type(() => CashflowEntryWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<CashflowEntryWhereUniqueInput, 'id'>>;

    @Field(() => [CashflowEntryWhereUniqueInput], {nullable:true})
    @Type(() => CashflowEntryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CashflowEntryWhereUniqueInput, 'id'>>;

    @Field(() => [CashflowEntryUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => CashflowEntryUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<CashflowEntryUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [CashflowEntryUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => CashflowEntryUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<CashflowEntryUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [CashflowEntryScalarWhereInput], {nullable:true})
    @Type(() => CashflowEntryScalarWhereInput)
    deleteMany?: Array<CashflowEntryScalarWhereInput>;
}

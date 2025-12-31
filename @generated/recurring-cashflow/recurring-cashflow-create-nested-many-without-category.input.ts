import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecurringCashflowCreateWithoutCategoryInput } from './recurring-cashflow-create-without-category.input';
import { Type } from 'class-transformer';
import { RecurringCashflowCreateOrConnectWithoutCategoryInput } from './recurring-cashflow-create-or-connect-without-category.input';
import { RecurringCashflowCreateManyCategoryInputEnvelope } from './recurring-cashflow-create-many-category-input-envelope.input';
import { Prisma } from '@prisma/client';
import { RecurringCashflowWhereUniqueInput } from './recurring-cashflow-where-unique.input';

@InputType()
export class RecurringCashflowCreateNestedManyWithoutCategoryInput {

    @Field(() => [RecurringCashflowCreateWithoutCategoryInput], {nullable:true})
    @Type(() => RecurringCashflowCreateWithoutCategoryInput)
    create?: Array<RecurringCashflowCreateWithoutCategoryInput>;

    @Field(() => [RecurringCashflowCreateOrConnectWithoutCategoryInput], {nullable:true})
    @Type(() => RecurringCashflowCreateOrConnectWithoutCategoryInput)
    connectOrCreate?: Array<RecurringCashflowCreateOrConnectWithoutCategoryInput>;

    @Field(() => RecurringCashflowCreateManyCategoryInputEnvelope, {nullable:true})
    @Type(() => RecurringCashflowCreateManyCategoryInputEnvelope)
    createMany?: RecurringCashflowCreateManyCategoryInputEnvelope;

    @Field(() => [RecurringCashflowWhereUniqueInput], {nullable:true})
    @Type(() => RecurringCashflowWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RecurringCashflowWhereUniqueInput, 'id'>>;
}

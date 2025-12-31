import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecurringCashflowCreateWithoutCategoryInput } from './recurring-cashflow-create-without-category.input';
import { Type } from 'class-transformer';
import { RecurringCashflowCreateOrConnectWithoutCategoryInput } from './recurring-cashflow-create-or-connect-without-category.input';
import { RecurringCashflowUpsertWithWhereUniqueWithoutCategoryInput } from './recurring-cashflow-upsert-with-where-unique-without-category.input';
import { RecurringCashflowCreateManyCategoryInputEnvelope } from './recurring-cashflow-create-many-category-input-envelope.input';
import { Prisma } from '@prisma/client';
import { RecurringCashflowWhereUniqueInput } from './recurring-cashflow-where-unique.input';
import { RecurringCashflowUpdateWithWhereUniqueWithoutCategoryInput } from './recurring-cashflow-update-with-where-unique-without-category.input';
import { RecurringCashflowUpdateManyWithWhereWithoutCategoryInput } from './recurring-cashflow-update-many-with-where-without-category.input';
import { RecurringCashflowScalarWhereInput } from './recurring-cashflow-scalar-where.input';

@InputType()
export class RecurringCashflowUpdateManyWithoutCategoryNestedInput {

    @Field(() => [RecurringCashflowCreateWithoutCategoryInput], {nullable:true})
    @Type(() => RecurringCashflowCreateWithoutCategoryInput)
    create?: Array<RecurringCashflowCreateWithoutCategoryInput>;

    @Field(() => [RecurringCashflowCreateOrConnectWithoutCategoryInput], {nullable:true})
    @Type(() => RecurringCashflowCreateOrConnectWithoutCategoryInput)
    connectOrCreate?: Array<RecurringCashflowCreateOrConnectWithoutCategoryInput>;

    @Field(() => [RecurringCashflowUpsertWithWhereUniqueWithoutCategoryInput], {nullable:true})
    @Type(() => RecurringCashflowUpsertWithWhereUniqueWithoutCategoryInput)
    upsert?: Array<RecurringCashflowUpsertWithWhereUniqueWithoutCategoryInput>;

    @Field(() => RecurringCashflowCreateManyCategoryInputEnvelope, {nullable:true})
    @Type(() => RecurringCashflowCreateManyCategoryInputEnvelope)
    createMany?: RecurringCashflowCreateManyCategoryInputEnvelope;

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

    @Field(() => [RecurringCashflowUpdateWithWhereUniqueWithoutCategoryInput], {nullable:true})
    @Type(() => RecurringCashflowUpdateWithWhereUniqueWithoutCategoryInput)
    update?: Array<RecurringCashflowUpdateWithWhereUniqueWithoutCategoryInput>;

    @Field(() => [RecurringCashflowUpdateManyWithWhereWithoutCategoryInput], {nullable:true})
    @Type(() => RecurringCashflowUpdateManyWithWhereWithoutCategoryInput)
    updateMany?: Array<RecurringCashflowUpdateManyWithWhereWithoutCategoryInput>;

    @Field(() => [RecurringCashflowScalarWhereInput], {nullable:true})
    @Type(() => RecurringCashflowScalarWhereInput)
    deleteMany?: Array<RecurringCashflowScalarWhereInput>;
}

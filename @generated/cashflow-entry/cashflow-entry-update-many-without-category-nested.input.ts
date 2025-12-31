import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CashflowEntryCreateWithoutCategoryInput } from './cashflow-entry-create-without-category.input';
import { Type } from 'class-transformer';
import { CashflowEntryCreateOrConnectWithoutCategoryInput } from './cashflow-entry-create-or-connect-without-category.input';
import { CashflowEntryUpsertWithWhereUniqueWithoutCategoryInput } from './cashflow-entry-upsert-with-where-unique-without-category.input';
import { CashflowEntryCreateManyCategoryInputEnvelope } from './cashflow-entry-create-many-category-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CashflowEntryWhereUniqueInput } from './cashflow-entry-where-unique.input';
import { CashflowEntryUpdateWithWhereUniqueWithoutCategoryInput } from './cashflow-entry-update-with-where-unique-without-category.input';
import { CashflowEntryUpdateManyWithWhereWithoutCategoryInput } from './cashflow-entry-update-many-with-where-without-category.input';
import { CashflowEntryScalarWhereInput } from './cashflow-entry-scalar-where.input';

@InputType()
export class CashflowEntryUpdateManyWithoutCategoryNestedInput {

    @Field(() => [CashflowEntryCreateWithoutCategoryInput], {nullable:true})
    @Type(() => CashflowEntryCreateWithoutCategoryInput)
    create?: Array<CashflowEntryCreateWithoutCategoryInput>;

    @Field(() => [CashflowEntryCreateOrConnectWithoutCategoryInput], {nullable:true})
    @Type(() => CashflowEntryCreateOrConnectWithoutCategoryInput)
    connectOrCreate?: Array<CashflowEntryCreateOrConnectWithoutCategoryInput>;

    @Field(() => [CashflowEntryUpsertWithWhereUniqueWithoutCategoryInput], {nullable:true})
    @Type(() => CashflowEntryUpsertWithWhereUniqueWithoutCategoryInput)
    upsert?: Array<CashflowEntryUpsertWithWhereUniqueWithoutCategoryInput>;

    @Field(() => CashflowEntryCreateManyCategoryInputEnvelope, {nullable:true})
    @Type(() => CashflowEntryCreateManyCategoryInputEnvelope)
    createMany?: CashflowEntryCreateManyCategoryInputEnvelope;

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

    @Field(() => [CashflowEntryUpdateWithWhereUniqueWithoutCategoryInput], {nullable:true})
    @Type(() => CashflowEntryUpdateWithWhereUniqueWithoutCategoryInput)
    update?: Array<CashflowEntryUpdateWithWhereUniqueWithoutCategoryInput>;

    @Field(() => [CashflowEntryUpdateManyWithWhereWithoutCategoryInput], {nullable:true})
    @Type(() => CashflowEntryUpdateManyWithWhereWithoutCategoryInput)
    updateMany?: Array<CashflowEntryUpdateManyWithWhereWithoutCategoryInput>;

    @Field(() => [CashflowEntryScalarWhereInput], {nullable:true})
    @Type(() => CashflowEntryScalarWhereInput)
    deleteMany?: Array<CashflowEntryScalarWhereInput>;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CashflowEntryCreateWithoutCategoryInput } from './cashflow-entry-create-without-category.input';
import { Type } from 'class-transformer';
import { CashflowEntryCreateOrConnectWithoutCategoryInput } from './cashflow-entry-create-or-connect-without-category.input';
import { CashflowEntryCreateManyCategoryInputEnvelope } from './cashflow-entry-create-many-category-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CashflowEntryWhereUniqueInput } from './cashflow-entry-where-unique.input';

@InputType()
export class CashflowEntryCreateNestedManyWithoutCategoryInput {

    @Field(() => [CashflowEntryCreateWithoutCategoryInput], {nullable:true})
    @Type(() => CashflowEntryCreateWithoutCategoryInput)
    create?: Array<CashflowEntryCreateWithoutCategoryInput>;

    @Field(() => [CashflowEntryCreateOrConnectWithoutCategoryInput], {nullable:true})
    @Type(() => CashflowEntryCreateOrConnectWithoutCategoryInput)
    connectOrCreate?: Array<CashflowEntryCreateOrConnectWithoutCategoryInput>;

    @Field(() => CashflowEntryCreateManyCategoryInputEnvelope, {nullable:true})
    @Type(() => CashflowEntryCreateManyCategoryInputEnvelope)
    createMany?: CashflowEntryCreateManyCategoryInputEnvelope;

    @Field(() => [CashflowEntryWhereUniqueInput], {nullable:true})
    @Type(() => CashflowEntryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CashflowEntryWhereUniqueInput, 'id'>>;
}

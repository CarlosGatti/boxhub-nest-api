import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CashflowCategoryCreateWithoutEntriesInput } from './cashflow-category-create-without-entries.input';
import { Type } from 'class-transformer';
import { CashflowCategoryCreateOrConnectWithoutEntriesInput } from './cashflow-category-create-or-connect-without-entries.input';
import { Prisma } from '@prisma/client';
import { CashflowCategoryWhereUniqueInput } from './cashflow-category-where-unique.input';

@InputType()
export class CashflowCategoryCreateNestedOneWithoutEntriesInput {

    @Field(() => CashflowCategoryCreateWithoutEntriesInput, {nullable:true})
    @Type(() => CashflowCategoryCreateWithoutEntriesInput)
    create?: CashflowCategoryCreateWithoutEntriesInput;

    @Field(() => CashflowCategoryCreateOrConnectWithoutEntriesInput, {nullable:true})
    @Type(() => CashflowCategoryCreateOrConnectWithoutEntriesInput)
    connectOrCreate?: CashflowCategoryCreateOrConnectWithoutEntriesInput;

    @Field(() => CashflowCategoryWhereUniqueInput, {nullable:true})
    @Type(() => CashflowCategoryWhereUniqueInput)
    connect?: Prisma.AtLeast<CashflowCategoryWhereUniqueInput, 'id' | 'userId_name_type'>;
}

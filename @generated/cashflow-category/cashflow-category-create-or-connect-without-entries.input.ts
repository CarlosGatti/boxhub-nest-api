import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CashflowCategoryWhereUniqueInput } from './cashflow-category-where-unique.input';
import { Type } from 'class-transformer';
import { CashflowCategoryCreateWithoutEntriesInput } from './cashflow-category-create-without-entries.input';

@InputType()
export class CashflowCategoryCreateOrConnectWithoutEntriesInput {

    @Field(() => CashflowCategoryWhereUniqueInput, {nullable:false})
    @Type(() => CashflowCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<CashflowCategoryWhereUniqueInput, 'id' | 'userId_name'>;

    @Field(() => CashflowCategoryCreateWithoutEntriesInput, {nullable:false})
    @Type(() => CashflowCategoryCreateWithoutEntriesInput)
    create!: CashflowCategoryCreateWithoutEntriesInput;
}

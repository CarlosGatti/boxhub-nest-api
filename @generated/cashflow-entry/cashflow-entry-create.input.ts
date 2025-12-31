import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CashflowType } from '../prisma/cashflow-type.enum';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { UserCreateNestedOneWithoutCashflowEntriesInput } from '../user/user-create-nested-one-without-cashflow-entries.input';
import { CashflowCategoryCreateNestedOneWithoutEntriesInput } from '../cashflow-category/cashflow-category-create-nested-one-without-entries.input';

@InputType()
export class CashflowEntryCreateInput {

    @Field(() => CashflowType, {nullable:false})
    type!: keyof typeof CashflowType;

    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    amount!: Decimal;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Date, {nullable:true})
    date?: Date | string;

    @Field(() => String, {nullable:true})
    notes?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutCashflowEntriesInput, {nullable:false})
    @Type(() => UserCreateNestedOneWithoutCashflowEntriesInput)
    user!: UserCreateNestedOneWithoutCashflowEntriesInput;

    @Field(() => CashflowCategoryCreateNestedOneWithoutEntriesInput, {nullable:false})
    @Type(() => CashflowCategoryCreateNestedOneWithoutEntriesInput)
    category!: CashflowCategoryCreateNestedOneWithoutEntriesInput;
}

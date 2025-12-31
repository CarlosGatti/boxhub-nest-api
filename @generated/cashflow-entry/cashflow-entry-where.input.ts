import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumCashflowTypeFilter } from '../prisma/enum-cashflow-type-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { CashflowCategoryRelationFilter } from '../cashflow-category/cashflow-category-relation-filter.input';

@InputType()
export class CashflowEntryWhereInput {

    @Field(() => [CashflowEntryWhereInput], {nullable:true})
    @Type(() => CashflowEntryWhereInput)
    AND?: Array<CashflowEntryWhereInput>;

    @Field(() => [CashflowEntryWhereInput], {nullable:true})
    @Type(() => CashflowEntryWhereInput)
    OR?: Array<CashflowEntryWhereInput>;

    @Field(() => [CashflowEntryWhereInput], {nullable:true})
    @Type(() => CashflowEntryWhereInput)
    NOT?: Array<CashflowEntryWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    categoryId?: IntFilter;

    @Field(() => EnumCashflowTypeFilter, {nullable:true})
    type?: EnumCashflowTypeFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    amount?: DecimalFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    date?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    notes?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    @Type(() => UserRelationFilter)
    user?: UserRelationFilter;

    @Field(() => CashflowCategoryRelationFilter, {nullable:true})
    @Type(() => CashflowCategoryRelationFilter)
    category?: CashflowCategoryRelationFilter;
}

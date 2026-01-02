import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CashflowCategoryUserIdNameTypeCompoundUniqueInput } from './cashflow-category-user-id-name-type-compound-unique.input';
import { CashflowCategoryWhereInput } from './cashflow-category-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumCashflowTypeFilter } from '../prisma/enum-cashflow-type-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { Type } from 'class-transformer';
import { CashflowEntryListRelationFilter } from '../cashflow-entry/cashflow-entry-list-relation-filter.input';
import { RecurringCashflowListRelationFilter } from '../recurring-cashflow/recurring-cashflow-list-relation-filter.input';

@InputType()
export class CashflowCategoryWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => CashflowCategoryUserIdNameTypeCompoundUniqueInput, {nullable:true})
    userId_name_type?: CashflowCategoryUserIdNameTypeCompoundUniqueInput;

    @Field(() => [CashflowCategoryWhereInput], {nullable:true})
    AND?: Array<CashflowCategoryWhereInput>;

    @Field(() => [CashflowCategoryWhereInput], {nullable:true})
    OR?: Array<CashflowCategoryWhereInput>;

    @Field(() => [CashflowCategoryWhereInput], {nullable:true})
    NOT?: Array<CashflowCategoryWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => EnumCashflowTypeFilter, {nullable:true})
    type?: EnumCashflowTypeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    color?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    icon?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    @Type(() => UserRelationFilter)
    user?: UserRelationFilter;

    @Field(() => CashflowEntryListRelationFilter, {nullable:true})
    @Type(() => CashflowEntryListRelationFilter)
    entries?: CashflowEntryListRelationFilter;

    @Field(() => RecurringCashflowListRelationFilter, {nullable:true})
    @Type(() => RecurringCashflowListRelationFilter)
    recurring?: RecurringCashflowListRelationFilter;
}

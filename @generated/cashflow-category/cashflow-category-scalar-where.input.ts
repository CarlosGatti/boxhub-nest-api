import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumCashflowTypeFilter } from '../prisma/enum-cashflow-type-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class CashflowCategoryScalarWhereInput {

    @Field(() => [CashflowCategoryScalarWhereInput], {nullable:true})
    AND?: Array<CashflowCategoryScalarWhereInput>;

    @Field(() => [CashflowCategoryScalarWhereInput], {nullable:true})
    OR?: Array<CashflowCategoryScalarWhereInput>;

    @Field(() => [CashflowCategoryScalarWhereInput], {nullable:true})
    NOT?: Array<CashflowCategoryScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

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
}

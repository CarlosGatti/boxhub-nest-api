import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumDiscartItemTypeFilter } from '../prisma/enum-discart-item-type-filter.input';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input';
import { EnumDiscartItemCategoryFilter } from '../prisma/enum-discart-item-category-filter.input';
import { EnumDiscartItemConditionFilter } from '../prisma/enum-discart-item-condition-filter.input';
import { EnumDiscartItemStatusFilter } from '../prisma/enum-discart-item-status-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class DiscartItemScalarWhereInput {

    @Field(() => [DiscartItemScalarWhereInput], {nullable:true})
    AND?: Array<DiscartItemScalarWhereInput>;

    @Field(() => [DiscartItemScalarWhereInput], {nullable:true})
    OR?: Array<DiscartItemScalarWhereInput>;

    @Field(() => [DiscartItemScalarWhereInput], {nullable:true})
    NOT?: Array<DiscartItemScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => EnumDiscartItemTypeFilter, {nullable:true})
    type?: EnumDiscartItemTypeFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    price?: FloatNullableFilter;

    @Field(() => EnumDiscartItemCategoryFilter, {nullable:true})
    category?: EnumDiscartItemCategoryFilter;

    @Field(() => EnumDiscartItemConditionFilter, {nullable:true})
    condition?: EnumDiscartItemConditionFilter;

    @Field(() => EnumDiscartItemStatusFilter, {nullable:true})
    status?: EnumDiscartItemStatusFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    imageUrls?: StringNullableListFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    pickupAddress?: JsonNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    contactPhone?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    createdById?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}

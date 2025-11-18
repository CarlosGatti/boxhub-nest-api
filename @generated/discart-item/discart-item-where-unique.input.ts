import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DiscartItemWhereInput } from './discart-item-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumDiscartItemTypeFilter } from '../prisma/enum-discart-item-type-filter.input';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input';
import { EnumDiscartItemConditionFilter } from '../prisma/enum-discart-item-condition-filter.input';
import { EnumDiscartItemStatusFilter } from '../prisma/enum-discart-item-status-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class DiscartItemWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [DiscartItemWhereInput], {nullable:true})
    AND?: Array<DiscartItemWhereInput>;

    @Field(() => [DiscartItemWhereInput], {nullable:true})
    OR?: Array<DiscartItemWhereInput>;

    @Field(() => [DiscartItemWhereInput], {nullable:true})
    NOT?: Array<DiscartItemWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => EnumDiscartItemTypeFilter, {nullable:true})
    type?: EnumDiscartItemTypeFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    price?: FloatNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    category?: StringFilter;

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

    @Field(() => UserRelationFilter, {nullable:true})
    createdBy?: UserRelationFilter;
}

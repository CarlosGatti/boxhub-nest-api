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
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { CommentListRelationFilter } from '../comment/comment-list-relation-filter.input';

@InputType()
export class DiscartItemWhereInput {

    @Field(() => [DiscartItemWhereInput], {nullable:true})
    AND?: Array<DiscartItemWhereInput>;

    @Field(() => [DiscartItemWhereInput], {nullable:true})
    OR?: Array<DiscartItemWhereInput>;

    @Field(() => [DiscartItemWhereInput], {nullable:true})
    NOT?: Array<DiscartItemWhereInput>;

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

    @Field(() => StringNullableFilter, {nullable:true})
    contactPhone?: StringNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    createdById?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    createdBy?: UserRelationFilter;

    @Field(() => CommentListRelationFilter, {nullable:true})
    comments?: CommentListRelationFilter;
}

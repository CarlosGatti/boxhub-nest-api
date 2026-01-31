import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { FeedProfileRelationFilter } from '../feed-profile/feed-profile-relation-filter.input';
import { FeedSourceListRelationFilter } from '../feed-source/feed-source-list-relation-filter.input';

@InputType()
export class FeedCollectionWhereInput {

    @Field(() => [FeedCollectionWhereInput], {nullable:true})
    AND?: Array<FeedCollectionWhereInput>;

    @Field(() => [FeedCollectionWhereInput], {nullable:true})
    OR?: Array<FeedCollectionWhereInput>;

    @Field(() => [FeedCollectionWhereInput], {nullable:true})
    NOT?: Array<FeedCollectionWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    profileId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    icon?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    color?: StringNullableFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    keywords?: StringNullableListFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    blocked?: StringNullableListFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    preferredDomains?: StringNullableListFilter;

    @Field(() => BoolFilter, {nullable:true})
    isActive?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => FeedProfileRelationFilter, {nullable:true})
    profile?: FeedProfileRelationFilter;

    @Field(() => FeedSourceListRelationFilter, {nullable:true})
    sources?: FeedSourceListRelationFilter;
}

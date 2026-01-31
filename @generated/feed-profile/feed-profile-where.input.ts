import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { Type } from 'class-transformer';
import { FeedCollectionListRelationFilter } from '../feed-collection/feed-collection-list-relation-filter.input';

@InputType()
export class FeedProfileWhereInput {

    @Field(() => [FeedProfileWhereInput], {nullable:true})
    AND?: Array<FeedProfileWhereInput>;

    @Field(() => [FeedProfileWhereInput], {nullable:true})
    OR?: Array<FeedProfileWhereInput>;

    @Field(() => [FeedProfileWhereInput], {nullable:true})
    NOT?: Array<FeedProfileWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    timezone?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    language?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    @Type(() => UserRelationFilter)
    user?: UserRelationFilter;

    @Field(() => FeedCollectionListRelationFilter, {nullable:true})
    collections?: FeedCollectionListRelationFilter;
}

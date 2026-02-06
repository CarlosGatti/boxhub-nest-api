import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { FeedSourcePreferenceUserIdSourceIdCompoundUniqueInput } from './feed-source-preference-user-id-source-id-compound-unique.input';
import { FeedSourcePreferenceWhereInput } from './feed-source-preference-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { Type } from 'class-transformer';
import { FeedSourceRelationFilter } from '../feed-source/feed-source-relation-filter.input';

@InputType()
export class FeedSourcePreferenceWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => FeedSourcePreferenceUserIdSourceIdCompoundUniqueInput, {nullable:true})
    userId_sourceId?: FeedSourcePreferenceUserIdSourceIdCompoundUniqueInput;

    @Field(() => [FeedSourcePreferenceWhereInput], {nullable:true})
    AND?: Array<FeedSourcePreferenceWhereInput>;

    @Field(() => [FeedSourcePreferenceWhereInput], {nullable:true})
    OR?: Array<FeedSourcePreferenceWhereInput>;

    @Field(() => [FeedSourcePreferenceWhereInput], {nullable:true})
    NOT?: Array<FeedSourcePreferenceWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    sourceId?: IntFilter;

    @Field(() => BoolFilter, {nullable:true})
    notifyOnNew?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    isMuted?: BoolFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    mutedUntil?: DateTimeNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    consecutiveSkips?: IntFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    lastInteractedAt?: DateTimeNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    @Type(() => UserRelationFilter)
    user?: UserRelationFilter;

    @Field(() => FeedSourceRelationFilter, {nullable:true})
    source?: FeedSourceRelationFilter;
}

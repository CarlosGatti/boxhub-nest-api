import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { FeedSourceNudgeWhereInput } from './feed-source-nudge-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { Type } from 'class-transformer';
import { FeedSourceRelationFilter } from '../feed-source/feed-source-relation-filter.input';

@InputType()
export class FeedSourceNudgeWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [FeedSourceNudgeWhereInput], {nullable:true})
    AND?: Array<FeedSourceNudgeWhereInput>;

    @Field(() => [FeedSourceNudgeWhereInput], {nullable:true})
    OR?: Array<FeedSourceNudgeWhereInput>;

    @Field(() => [FeedSourceNudgeWhereInput], {nullable:true})
    NOT?: Array<FeedSourceNudgeWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    sourceId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    reason?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    status?: StringFilter;

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

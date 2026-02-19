import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BucketGoalWhereInput } from './bucket-goal-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumBucketGoalTypeFilter } from '../prisma/enum-bucket-goal-type-filter.input';
import { EnumBucketGoalStatusFilter } from '../prisma/enum-bucket-goal-status-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { Type } from 'class-transformer';
import { BucketGoalLogListRelationFilter } from '../bucket-goal-log/bucket-goal-log-list-relation-filter.input';
import { BucketGoalPinListRelationFilter } from '../bucket-goal-pin/bucket-goal-pin-list-relation-filter.input';
import { BucketGoalMediaListRelationFilter } from '../bucket-goal-media/bucket-goal-media-list-relation-filter.input';
import { BucketVisionGoalLinkListRelationFilter } from '../bucket-vision-goal-link/bucket-vision-goal-link-list-relation-filter.input';

@InputType()
export class BucketGoalWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [BucketGoalWhereInput], {nullable:true})
    AND?: Array<BucketGoalWhereInput>;

    @Field(() => [BucketGoalWhereInput], {nullable:true})
    OR?: Array<BucketGoalWhereInput>;

    @Field(() => [BucketGoalWhereInput], {nullable:true})
    NOT?: Array<BucketGoalWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => EnumBucketGoalTypeFilter, {nullable:true})
    type?: EnumBucketGoalTypeFilter;

    @Field(() => EnumBucketGoalStatusFilter, {nullable:true})
    status?: EnumBucketGoalStatusFilter;

    @Field(() => IntFilter, {nullable:true})
    priority?: IntFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    details?: JsonNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    detailsSchemaVersion?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    coverUrl?: StringNullableFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    tags?: StringNullableListFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    targetDate?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    completedAt?: DateTimeNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    @Type(() => UserRelationFilter)
    user?: UserRelationFilter;

    @Field(() => BucketGoalLogListRelationFilter, {nullable:true})
    logs?: BucketGoalLogListRelationFilter;

    @Field(() => BucketGoalPinListRelationFilter, {nullable:true})
    pins?: BucketGoalPinListRelationFilter;

    @Field(() => BucketGoalMediaListRelationFilter, {nullable:true})
    media?: BucketGoalMediaListRelationFilter;

    @Field(() => BucketVisionGoalLinkListRelationFilter, {nullable:true})
    bucketVisionGoalLinks?: BucketVisionGoalLinkListRelationFilter;
}

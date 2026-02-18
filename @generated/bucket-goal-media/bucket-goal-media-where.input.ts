import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumBucketMediaTypeFilter } from '../prisma/enum-bucket-media-type-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BucketGoalNullableRelationFilter } from '../bucket-goal/bucket-goal-nullable-relation-filter.input';
import { BucketGoalLogNullableRelationFilter } from '../bucket-goal-log/bucket-goal-log-nullable-relation-filter.input';

@InputType()
export class BucketGoalMediaWhereInput {

    @Field(() => [BucketGoalMediaWhereInput], {nullable:true})
    AND?: Array<BucketGoalMediaWhereInput>;

    @Field(() => [BucketGoalMediaWhereInput], {nullable:true})
    OR?: Array<BucketGoalMediaWhereInput>;

    @Field(() => [BucketGoalMediaWhereInput], {nullable:true})
    NOT?: Array<BucketGoalMediaWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    goalId?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    logId?: IntNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    url?: StringFilter;

    @Field(() => EnumBucketMediaTypeFilter, {nullable:true})
    type?: EnumBucketMediaTypeFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    metadata?: JsonNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => BucketGoalNullableRelationFilter, {nullable:true})
    goal?: BucketGoalNullableRelationFilter;

    @Field(() => BucketGoalLogNullableRelationFilter, {nullable:true})
    log?: BucketGoalLogNullableRelationFilter;
}

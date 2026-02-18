import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumBucketGoalTypeFilter } from '../prisma/enum-bucket-goal-type-filter.input';
import { EnumBucketGoalStatusFilter } from '../prisma/enum-bucket-goal-status-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class BucketGoalScalarWhereInput {

    @Field(() => [BucketGoalScalarWhereInput], {nullable:true})
    AND?: Array<BucketGoalScalarWhereInput>;

    @Field(() => [BucketGoalScalarWhereInput], {nullable:true})
    OR?: Array<BucketGoalScalarWhereInput>;

    @Field(() => [BucketGoalScalarWhereInput], {nullable:true})
    NOT?: Array<BucketGoalScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

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
}

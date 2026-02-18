import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumBucketMediaTypeWithAggregatesFilter } from '../prisma/enum-bucket-media-type-with-aggregates-filter.input';
import { JsonNullableWithAggregatesFilter } from '../prisma/json-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class BucketGoalMediaScalarWhereWithAggregatesInput {

    @Field(() => [BucketGoalMediaScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<BucketGoalMediaScalarWhereWithAggregatesInput>;

    @Field(() => [BucketGoalMediaScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<BucketGoalMediaScalarWhereWithAggregatesInput>;

    @Field(() => [BucketGoalMediaScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<BucketGoalMediaScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    goalId?: IntNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    logId?: IntNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    url?: StringWithAggregatesFilter;

    @Field(() => EnumBucketMediaTypeWithAggregatesFilter, {nullable:true})
    type?: EnumBucketMediaTypeWithAggregatesFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    metadata?: JsonNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}

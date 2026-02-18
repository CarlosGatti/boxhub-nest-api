import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { EnumBucketPinSourceWithAggregatesFilter } from '../prisma/enum-bucket-pin-source-with-aggregates-filter.input';
import { JsonNullableWithAggregatesFilter } from '../prisma/json-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class BucketGoalPinScalarWhereWithAggregatesInput {

    @Field(() => [BucketGoalPinScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<BucketGoalPinScalarWhereWithAggregatesInput>;

    @Field(() => [BucketGoalPinScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<BucketGoalPinScalarWhereWithAggregatesInput>;

    @Field(() => [BucketGoalPinScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<BucketGoalPinScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    goalId?: IntWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    lat?: FloatWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    lng?: FloatWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    label?: StringNullableWithAggregatesFilter;

    @Field(() => EnumBucketPinSourceWithAggregatesFilter, {nullable:true})
    source?: EnumBucketPinSourceWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    placeId?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    address?: StringNullableWithAggregatesFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    raw?: JsonNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumBucketVisionPeriodTypeWithAggregatesFilter } from '../prisma/enum-bucket-vision-period-type-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { EnumBucketVisionLayoutModeWithAggregatesFilter } from '../prisma/enum-bucket-vision-layout-mode-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class BucketVisionBoardScalarWhereWithAggregatesInput {

    @Field(() => [BucketVisionBoardScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<BucketVisionBoardScalarWhereWithAggregatesInput>;

    @Field(() => [BucketVisionBoardScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<BucketVisionBoardScalarWhereWithAggregatesInput>;

    @Field(() => [BucketVisionBoardScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<BucketVisionBoardScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => EnumBucketVisionPeriodTypeWithAggregatesFilter, {nullable:true})
    periodType?: EnumBucketVisionPeriodTypeWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    year?: IntNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    periodKey?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    startDate?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    endDate?: DateTimeNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    theme?: StringNullableWithAggregatesFilter;

    @Field(() => EnumBucketVisionLayoutModeWithAggregatesFilter, {nullable:true})
    layoutMode?: EnumBucketVisionLayoutModeWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    coverUrl?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}

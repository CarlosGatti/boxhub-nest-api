import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { EnumBucketVisionItemTypeWithAggregatesFilter } from '../prisma/enum-bucket-vision-item-type-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { JsonNullableWithAggregatesFilter } from '../prisma/json-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class BucketVisionItemScalarWhereWithAggregatesInput {

    @Field(() => [BucketVisionItemScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<BucketVisionItemScalarWhereWithAggregatesInput>;

    @Field(() => [BucketVisionItemScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<BucketVisionItemScalarWhereWithAggregatesInput>;

    @Field(() => [BucketVisionItemScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<BucketVisionItemScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    boardId?: IntWithAggregatesFilter;

    @Field(() => EnumBucketVisionItemTypeWithAggregatesFilter, {nullable:true})
    type?: EnumBucketVisionItemTypeWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    text?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    url?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    color?: StringNullableWithAggregatesFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    metadata?: JsonNullableWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    order?: IntWithAggregatesFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    layout?: JsonNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}

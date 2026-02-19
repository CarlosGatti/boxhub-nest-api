import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { EnumBucketVisionSectionTypeWithAggregatesFilter } from '../prisma/enum-bucket-vision-section-type-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { JsonNullableWithAggregatesFilter } from '../prisma/json-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class BucketVisionSectionScalarWhereWithAggregatesInput {

    @Field(() => [BucketVisionSectionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<BucketVisionSectionScalarWhereWithAggregatesInput>;

    @Field(() => [BucketVisionSectionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<BucketVisionSectionScalarWhereWithAggregatesInput>;

    @Field(() => [BucketVisionSectionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<BucketVisionSectionScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    boardId?: IntWithAggregatesFilter;

    @Field(() => EnumBucketVisionSectionTypeWithAggregatesFilter, {nullable:true})
    type?: EnumBucketVisionSectionTypeWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    title?: StringNullableWithAggregatesFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    content?: JsonNullableWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    order?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumBucketShareTypeWithAggregatesFilter } from '../prisma/enum-bucket-share-type-with-aggregates-filter.input';
import { JsonWithAggregatesFilter } from '../prisma/json-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class BucketShareScalarWhereWithAggregatesInput {

    @Field(() => [BucketShareScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<BucketShareScalarWhereWithAggregatesInput>;

    @Field(() => [BucketShareScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<BucketShareScalarWhereWithAggregatesInput>;

    @Field(() => [BucketShareScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<BucketShareScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    token?: StringWithAggregatesFilter;

    @Field(() => EnumBucketShareTypeWithAggregatesFilter, {nullable:true})
    type?: EnumBucketShareTypeWithAggregatesFilter;

    @Field(() => JsonWithAggregatesFilter, {nullable:true})
    payload?: JsonWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;
}

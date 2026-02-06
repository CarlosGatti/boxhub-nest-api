import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class ReviewCardScanEventScalarWhereWithAggregatesInput {

    @Field(() => [ReviewCardScanEventScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ReviewCardScanEventScalarWhereWithAggregatesInput>;

    @Field(() => [ReviewCardScanEventScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ReviewCardScanEventScalarWhereWithAggregatesInput>;

    @Field(() => [ReviewCardScanEventScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ReviewCardScanEventScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    projectId?: IntWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    ipHash?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    userAgent?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    referer?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;
}

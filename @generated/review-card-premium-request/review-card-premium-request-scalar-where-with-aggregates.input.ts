import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumReviewCardPremiumRequestStatusWithAggregatesFilter } from '../prisma/enum-review-card-premium-request-status-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class ReviewCardPremiumRequestScalarWhereWithAggregatesInput {

    @Field(() => [ReviewCardPremiumRequestScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ReviewCardPremiumRequestScalarWhereWithAggregatesInput>;

    @Field(() => [ReviewCardPremiumRequestScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ReviewCardPremiumRequestScalarWhereWithAggregatesInput>;

    @Field(() => [ReviewCardPremiumRequestScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ReviewCardPremiumRequestScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: IntWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    projectId?: IntNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    notes?: StringWithAggregatesFilter;

    @Field(() => EnumReviewCardPremiumRequestStatusWithAggregatesFilter, {nullable:true})
    status?: EnumReviewCardPremiumRequestStatusWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { EnumReviewCardProjectStatusWithAggregatesFilter } from '../prisma/enum-review-card-project-status-with-aggregates-filter.input';
import { EnumReviewCardLinkModeWithAggregatesFilter } from '../prisma/enum-review-card-link-mode-with-aggregates-filter.input';
import { JsonNullableWithAggregatesFilter } from '../prisma/json-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class ReviewCardProjectScalarWhereWithAggregatesInput {

    @Field(() => [ReviewCardProjectScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ReviewCardProjectScalarWhereWithAggregatesInput>;

    @Field(() => [ReviewCardProjectScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ReviewCardProjectScalarWhereWithAggregatesInput>;

    @Field(() => [ReviewCardProjectScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ReviewCardProjectScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    businessId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    templateId?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    slug?: StringNullableWithAggregatesFilter;

    @Field(() => EnumReviewCardProjectStatusWithAggregatesFilter, {nullable:true})
    status?: EnumReviewCardProjectStatusWithAggregatesFilter;

    @Field(() => EnumReviewCardLinkModeWithAggregatesFilter, {nullable:true})
    reviewLinkMode?: EnumReviewCardLinkModeWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    googleReviewUrlFinal?: StringNullableWithAggregatesFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    designJson?: JsonNullableWithAggregatesFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    assetsJson?: JsonNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumReviewCardProjectStatusFilter } from '../prisma/enum-review-card-project-status-filter.input';
import { EnumReviewCardLinkModeFilter } from '../prisma/enum-review-card-link-mode-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ReviewCardProjectScalarWhereInput {

    @Field(() => [ReviewCardProjectScalarWhereInput], {nullable:true})
    AND?: Array<ReviewCardProjectScalarWhereInput>;

    @Field(() => [ReviewCardProjectScalarWhereInput], {nullable:true})
    OR?: Array<ReviewCardProjectScalarWhereInput>;

    @Field(() => [ReviewCardProjectScalarWhereInput], {nullable:true})
    NOT?: Array<ReviewCardProjectScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    businessId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    templateId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    slug?: StringNullableFilter;

    @Field(() => EnumReviewCardProjectStatusFilter, {nullable:true})
    status?: EnumReviewCardProjectStatusFilter;

    @Field(() => EnumReviewCardLinkModeFilter, {nullable:true})
    reviewLinkMode?: EnumReviewCardLinkModeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    googleReviewUrlFinal?: StringNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    designJson?: JsonNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    assetsJson?: JsonNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}

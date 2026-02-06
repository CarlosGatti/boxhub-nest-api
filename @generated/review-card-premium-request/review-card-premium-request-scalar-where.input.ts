import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumReviewCardPremiumRequestStatusFilter } from '../prisma/enum-review-card-premium-request-status-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ReviewCardPremiumRequestScalarWhereInput {

    @Field(() => [ReviewCardPremiumRequestScalarWhereInput], {nullable:true})
    AND?: Array<ReviewCardPremiumRequestScalarWhereInput>;

    @Field(() => [ReviewCardPremiumRequestScalarWhereInput], {nullable:true})
    OR?: Array<ReviewCardPremiumRequestScalarWhereInput>;

    @Field(() => [ReviewCardPremiumRequestScalarWhereInput], {nullable:true})
    NOT?: Array<ReviewCardPremiumRequestScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    projectId?: IntNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    notes?: StringFilter;

    @Field(() => EnumReviewCardPremiumRequestStatusFilter, {nullable:true})
    status?: EnumReviewCardPremiumRequestStatusFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ReviewCardPremiumRequestWhereInput } from './review-card-premium-request-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumReviewCardPremiumRequestStatusFilter } from '../prisma/enum-review-card-premium-request-status-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { Type } from 'class-transformer';
import { ReviewCardProjectNullableRelationFilter } from '../review-card-project/review-card-project-nullable-relation-filter.input';

@InputType()
export class ReviewCardPremiumRequestWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [ReviewCardPremiumRequestWhereInput], {nullable:true})
    AND?: Array<ReviewCardPremiumRequestWhereInput>;

    @Field(() => [ReviewCardPremiumRequestWhereInput], {nullable:true})
    OR?: Array<ReviewCardPremiumRequestWhereInput>;

    @Field(() => [ReviewCardPremiumRequestWhereInput], {nullable:true})
    NOT?: Array<ReviewCardPremiumRequestWhereInput>;

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

    @Field(() => UserRelationFilter, {nullable:true})
    @Type(() => UserRelationFilter)
    user?: UserRelationFilter;

    @Field(() => ReviewCardProjectNullableRelationFilter, {nullable:true})
    project?: ReviewCardProjectNullableRelationFilter;
}

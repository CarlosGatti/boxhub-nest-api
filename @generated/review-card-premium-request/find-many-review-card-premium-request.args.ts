import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewCardPremiumRequestWhereInput } from './review-card-premium-request-where.input';
import { Type } from 'class-transformer';
import { ReviewCardPremiumRequestOrderByWithRelationInput } from './review-card-premium-request-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ReviewCardPremiumRequestWhereUniqueInput } from './review-card-premium-request-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ReviewCardPremiumRequestScalarFieldEnum } from './review-card-premium-request-scalar-field.enum';

@ArgsType()
export class FindManyReviewCardPremiumRequestArgs {

    @Field(() => ReviewCardPremiumRequestWhereInput, {nullable:true})
    @Type(() => ReviewCardPremiumRequestWhereInput)
    where?: ReviewCardPremiumRequestWhereInput;

    @Field(() => [ReviewCardPremiumRequestOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ReviewCardPremiumRequestOrderByWithRelationInput>;

    @Field(() => ReviewCardPremiumRequestWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ReviewCardPremiumRequestWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ReviewCardPremiumRequestScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ReviewCardPremiumRequestScalarFieldEnum>;
}

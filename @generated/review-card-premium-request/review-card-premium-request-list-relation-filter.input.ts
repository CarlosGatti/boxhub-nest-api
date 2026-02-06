import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCardPremiumRequestWhereInput } from './review-card-premium-request-where.input';

@InputType()
export class ReviewCardPremiumRequestListRelationFilter {

    @Field(() => ReviewCardPremiumRequestWhereInput, {nullable:true})
    every?: ReviewCardPremiumRequestWhereInput;

    @Field(() => ReviewCardPremiumRequestWhereInput, {nullable:true})
    some?: ReviewCardPremiumRequestWhereInput;

    @Field(() => ReviewCardPremiumRequestWhereInput, {nullable:true})
    none?: ReviewCardPremiumRequestWhereInput;
}

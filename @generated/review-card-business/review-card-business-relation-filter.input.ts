import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCardBusinessWhereInput } from './review-card-business-where.input';

@InputType()
export class ReviewCardBusinessRelationFilter {

    @Field(() => ReviewCardBusinessWhereInput, {nullable:true})
    is?: ReviewCardBusinessWhereInput;

    @Field(() => ReviewCardBusinessWhereInput, {nullable:true})
    isNot?: ReviewCardBusinessWhereInput;
}

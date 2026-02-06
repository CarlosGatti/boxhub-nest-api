import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCardBusinessWhereInput } from './review-card-business-where.input';

@InputType()
export class ReviewCardBusinessListRelationFilter {

    @Field(() => ReviewCardBusinessWhereInput, {nullable:true})
    every?: ReviewCardBusinessWhereInput;

    @Field(() => ReviewCardBusinessWhereInput, {nullable:true})
    some?: ReviewCardBusinessWhereInput;

    @Field(() => ReviewCardBusinessWhereInput, {nullable:true})
    none?: ReviewCardBusinessWhereInput;
}

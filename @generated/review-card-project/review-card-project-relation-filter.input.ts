import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCardProjectWhereInput } from './review-card-project-where.input';

@InputType()
export class ReviewCardProjectRelationFilter {

    @Field(() => ReviewCardProjectWhereInput, {nullable:true})
    is?: ReviewCardProjectWhereInput;

    @Field(() => ReviewCardProjectWhereInput, {nullable:true})
    isNot?: ReviewCardProjectWhereInput;
}

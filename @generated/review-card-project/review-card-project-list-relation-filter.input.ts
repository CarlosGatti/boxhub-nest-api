import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCardProjectWhereInput } from './review-card-project-where.input';

@InputType()
export class ReviewCardProjectListRelationFilter {

    @Field(() => ReviewCardProjectWhereInput, {nullable:true})
    every?: ReviewCardProjectWhereInput;

    @Field(() => ReviewCardProjectWhereInput, {nullable:true})
    some?: ReviewCardProjectWhereInput;

    @Field(() => ReviewCardProjectWhereInput, {nullable:true})
    none?: ReviewCardProjectWhereInput;
}

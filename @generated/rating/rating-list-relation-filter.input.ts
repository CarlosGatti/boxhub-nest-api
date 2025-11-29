import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RatingWhereInput } from './rating-where.input';

@InputType()
export class RatingListRelationFilter {

    @Field(() => RatingWhereInput, {nullable:true})
    every?: RatingWhereInput;

    @Field(() => RatingWhereInput, {nullable:true})
    some?: RatingWhereInput;

    @Field(() => RatingWhereInput, {nullable:true})
    none?: RatingWhereInput;
}

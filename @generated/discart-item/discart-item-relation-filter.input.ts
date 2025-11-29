import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DiscartItemWhereInput } from './discart-item-where.input';

@InputType()
export class DiscartItemRelationFilter {

    @Field(() => DiscartItemWhereInput, {nullable:true})
    is?: DiscartItemWhereInput;

    @Field(() => DiscartItemWhereInput, {nullable:true})
    isNot?: DiscartItemWhereInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DiscartItemWhereInput } from './discart-item-where.input';

@InputType()
export class DiscartItemListRelationFilter {

    @Field(() => DiscartItemWhereInput, {nullable:true})
    every?: DiscartItemWhereInput;

    @Field(() => DiscartItemWhereInput, {nullable:true})
    some?: DiscartItemWhereInput;

    @Field(() => DiscartItemWhereInput, {nullable:true})
    none?: DiscartItemWhereInput;
}

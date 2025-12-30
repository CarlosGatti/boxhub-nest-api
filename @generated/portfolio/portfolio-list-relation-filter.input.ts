import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PortfolioWhereInput } from './portfolio-where.input';

@InputType()
export class PortfolioListRelationFilter {

    @Field(() => PortfolioWhereInput, {nullable:true})
    every?: PortfolioWhereInput;

    @Field(() => PortfolioWhereInput, {nullable:true})
    some?: PortfolioWhereInput;

    @Field(() => PortfolioWhereInput, {nullable:true})
    none?: PortfolioWhereInput;
}

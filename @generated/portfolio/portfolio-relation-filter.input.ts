import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PortfolioWhereInput } from './portfolio-where.input';

@InputType()
export class PortfolioRelationFilter {

    @Field(() => PortfolioWhereInput, {nullable:true})
    is?: PortfolioWhereInput;

    @Field(() => PortfolioWhereInput, {nullable:true})
    isNot?: PortfolioWhereInput;
}

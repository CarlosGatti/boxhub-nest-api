import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PortfolioCount {

    @Field(() => Int, {nullable:false})
    holdings?: number;

    @Field(() => Int, {nullable:false})
    transactions?: number;
}

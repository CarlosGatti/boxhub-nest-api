import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CashflowCategoryCount {

    @Field(() => Int, {nullable:false})
    entries?: number;

    @Field(() => Int, {nullable:false})
    recurring?: number;
}

import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class DefinedProjectSumAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    clientId?: number;

    @Field(() => Float, {nullable:true})
    budget?: number;

    @Field(() => Int, {nullable:true})
    supplierId?: number;
}

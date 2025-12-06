import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ItemAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    quantity?: number;

    @Field(() => Float, {nullable:true})
    containerId?: number;

    @Field(() => Float, {nullable:true})
    discartItemId?: number;
}

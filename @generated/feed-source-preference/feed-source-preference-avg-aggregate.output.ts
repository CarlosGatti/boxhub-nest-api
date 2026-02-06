import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class FeedSourcePreferenceAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    userId?: number;

    @Field(() => Float, {nullable:true})
    sourceId?: number;

    @Field(() => Float, {nullable:true})
    consecutiveSkips?: number;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class FeedSourceSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    collectionId?: true;

    @Field(() => Boolean, {nullable:true})
    fetchEveryMin?: true;

    @Field(() => Boolean, {nullable:true})
    failureCount?: true;
}

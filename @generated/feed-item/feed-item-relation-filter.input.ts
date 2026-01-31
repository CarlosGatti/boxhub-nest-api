import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedItemWhereInput } from './feed-item-where.input';

@InputType()
export class FeedItemRelationFilter {

    @Field(() => FeedItemWhereInput, {nullable:true})
    is?: FeedItemWhereInput;

    @Field(() => FeedItemWhereInput, {nullable:true})
    isNot?: FeedItemWhereInput;
}

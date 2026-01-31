import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedSourceWhereInput } from './feed-source-where.input';

@InputType()
export class FeedSourceRelationFilter {

    @Field(() => FeedSourceWhereInput, {nullable:true})
    is?: FeedSourceWhereInput;

    @Field(() => FeedSourceWhereInput, {nullable:true})
    isNot?: FeedSourceWhereInput;
}

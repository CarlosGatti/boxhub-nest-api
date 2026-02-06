import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedSourceNudgeWhereInput } from './feed-source-nudge-where.input';

@InputType()
export class FeedSourceNudgeListRelationFilter {

    @Field(() => FeedSourceNudgeWhereInput, {nullable:true})
    every?: FeedSourceNudgeWhereInput;

    @Field(() => FeedSourceNudgeWhereInput, {nullable:true})
    some?: FeedSourceNudgeWhereInput;

    @Field(() => FeedSourceNudgeWhereInput, {nullable:true})
    none?: FeedSourceNudgeWhereInput;
}

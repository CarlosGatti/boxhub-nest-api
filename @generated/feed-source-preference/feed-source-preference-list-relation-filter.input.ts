import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedSourcePreferenceWhereInput } from './feed-source-preference-where.input';

@InputType()
export class FeedSourcePreferenceListRelationFilter {

    @Field(() => FeedSourcePreferenceWhereInput, {nullable:true})
    every?: FeedSourcePreferenceWhereInput;

    @Field(() => FeedSourcePreferenceWhereInput, {nullable:true})
    some?: FeedSourcePreferenceWhereInput;

    @Field(() => FeedSourcePreferenceWhereInput, {nullable:true})
    none?: FeedSourcePreferenceWhereInput;
}

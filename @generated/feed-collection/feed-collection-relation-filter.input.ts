import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedCollectionWhereInput } from './feed-collection-where.input';

@InputType()
export class FeedCollectionRelationFilter {

    @Field(() => FeedCollectionWhereInput, {nullable:true})
    is?: FeedCollectionWhereInput;

    @Field(() => FeedCollectionWhereInput, {nullable:true})
    isNot?: FeedCollectionWhereInput;
}

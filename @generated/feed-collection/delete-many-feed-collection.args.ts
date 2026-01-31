import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeedCollectionWhereInput } from './feed-collection-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyFeedCollectionArgs {

    @Field(() => FeedCollectionWhereInput, {nullable:true})
    @Type(() => FeedCollectionWhereInput)
    where?: FeedCollectionWhereInput;
}

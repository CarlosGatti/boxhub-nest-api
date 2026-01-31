import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeedCollectionCreateInput } from './feed-collection-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneFeedCollectionArgs {

    @Field(() => FeedCollectionCreateInput, {nullable:false})
    @Type(() => FeedCollectionCreateInput)
    data!: FeedCollectionCreateInput;
}

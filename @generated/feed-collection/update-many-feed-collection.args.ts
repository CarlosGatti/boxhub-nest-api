import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeedCollectionUpdateManyMutationInput } from './feed-collection-update-many-mutation.input';
import { Type } from 'class-transformer';
import { FeedCollectionWhereInput } from './feed-collection-where.input';

@ArgsType()
export class UpdateManyFeedCollectionArgs {

    @Field(() => FeedCollectionUpdateManyMutationInput, {nullable:false})
    @Type(() => FeedCollectionUpdateManyMutationInput)
    data!: FeedCollectionUpdateManyMutationInput;

    @Field(() => FeedCollectionWhereInput, {nullable:true})
    @Type(() => FeedCollectionWhereInput)
    where?: FeedCollectionWhereInput;
}

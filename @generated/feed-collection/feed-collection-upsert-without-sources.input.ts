import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedCollectionUpdateWithoutSourcesInput } from './feed-collection-update-without-sources.input';
import { Type } from 'class-transformer';
import { FeedCollectionCreateWithoutSourcesInput } from './feed-collection-create-without-sources.input';
import { FeedCollectionWhereInput } from './feed-collection-where.input';

@InputType()
export class FeedCollectionUpsertWithoutSourcesInput {

    @Field(() => FeedCollectionUpdateWithoutSourcesInput, {nullable:false})
    @Type(() => FeedCollectionUpdateWithoutSourcesInput)
    update!: FeedCollectionUpdateWithoutSourcesInput;

    @Field(() => FeedCollectionCreateWithoutSourcesInput, {nullable:false})
    @Type(() => FeedCollectionCreateWithoutSourcesInput)
    create!: FeedCollectionCreateWithoutSourcesInput;

    @Field(() => FeedCollectionWhereInput, {nullable:true})
    @Type(() => FeedCollectionWhereInput)
    where?: FeedCollectionWhereInput;
}

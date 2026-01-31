import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedCollectionWhereInput } from './feed-collection-where.input';
import { Type } from 'class-transformer';
import { FeedCollectionUpdateWithoutSourcesInput } from './feed-collection-update-without-sources.input';

@InputType()
export class FeedCollectionUpdateToOneWithWhereWithoutSourcesInput {

    @Field(() => FeedCollectionWhereInput, {nullable:true})
    @Type(() => FeedCollectionWhereInput)
    where?: FeedCollectionWhereInput;

    @Field(() => FeedCollectionUpdateWithoutSourcesInput, {nullable:false})
    @Type(() => FeedCollectionUpdateWithoutSourcesInput)
    data!: FeedCollectionUpdateWithoutSourcesInput;
}

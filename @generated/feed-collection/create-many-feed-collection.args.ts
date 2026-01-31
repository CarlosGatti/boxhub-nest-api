import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeedCollectionCreateManyInput } from './feed-collection-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyFeedCollectionArgs {

    @Field(() => [FeedCollectionCreateManyInput], {nullable:false})
    @Type(() => FeedCollectionCreateManyInput)
    data!: Array<FeedCollectionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

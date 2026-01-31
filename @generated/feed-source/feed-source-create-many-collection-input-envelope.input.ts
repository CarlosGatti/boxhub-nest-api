import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedSourceCreateManyCollectionInput } from './feed-source-create-many-collection.input';
import { Type } from 'class-transformer';

@InputType()
export class FeedSourceCreateManyCollectionInputEnvelope {

    @Field(() => [FeedSourceCreateManyCollectionInput], {nullable:false})
    @Type(() => FeedSourceCreateManyCollectionInput)
    data!: Array<FeedSourceCreateManyCollectionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

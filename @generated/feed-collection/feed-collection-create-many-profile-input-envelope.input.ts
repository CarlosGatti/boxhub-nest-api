import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedCollectionCreateManyProfileInput } from './feed-collection-create-many-profile.input';
import { Type } from 'class-transformer';

@InputType()
export class FeedCollectionCreateManyProfileInputEnvelope {

    @Field(() => [FeedCollectionCreateManyProfileInput], {nullable:false})
    @Type(() => FeedCollectionCreateManyProfileInput)
    data!: Array<FeedCollectionCreateManyProfileInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

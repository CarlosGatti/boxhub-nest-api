import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedEventCreateManyItemInput } from './feed-event-create-many-item.input';
import { Type } from 'class-transformer';

@InputType()
export class FeedEventCreateManyItemInputEnvelope {

    @Field(() => [FeedEventCreateManyItemInput], {nullable:false})
    @Type(() => FeedEventCreateManyItemInput)
    data!: Array<FeedEventCreateManyItemInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

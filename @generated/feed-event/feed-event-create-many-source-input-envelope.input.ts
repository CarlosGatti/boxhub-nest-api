import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedEventCreateManySourceInput } from './feed-event-create-many-source.input';
import { Type } from 'class-transformer';

@InputType()
export class FeedEventCreateManySourceInputEnvelope {

    @Field(() => [FeedEventCreateManySourceInput], {nullable:false})
    @Type(() => FeedEventCreateManySourceInput)
    data!: Array<FeedEventCreateManySourceInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

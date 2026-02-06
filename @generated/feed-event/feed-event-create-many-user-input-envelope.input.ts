import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedEventCreateManyUserInput } from './feed-event-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class FeedEventCreateManyUserInputEnvelope {

    @Field(() => [FeedEventCreateManyUserInput], {nullable:false})
    @Type(() => FeedEventCreateManyUserInput)
    data!: Array<FeedEventCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

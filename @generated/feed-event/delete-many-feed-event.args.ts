import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeedEventWhereInput } from './feed-event-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyFeedEventArgs {

    @Field(() => FeedEventWhereInput, {nullable:true})
    @Type(() => FeedEventWhereInput)
    where?: FeedEventWhereInput;
}

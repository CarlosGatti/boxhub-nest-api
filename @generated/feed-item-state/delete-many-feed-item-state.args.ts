import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeedItemStateWhereInput } from './feed-item-state-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyFeedItemStateArgs {

    @Field(() => FeedItemStateWhereInput, {nullable:true})
    @Type(() => FeedItemStateWhereInput)
    where?: FeedItemStateWhereInput;
}

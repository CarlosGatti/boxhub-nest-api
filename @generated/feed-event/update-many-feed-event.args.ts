import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeedEventUpdateManyMutationInput } from './feed-event-update-many-mutation.input';
import { Type } from 'class-transformer';
import { FeedEventWhereInput } from './feed-event-where.input';

@ArgsType()
export class UpdateManyFeedEventArgs {

    @Field(() => FeedEventUpdateManyMutationInput, {nullable:false})
    @Type(() => FeedEventUpdateManyMutationInput)
    data!: FeedEventUpdateManyMutationInput;

    @Field(() => FeedEventWhereInput, {nullable:true})
    @Type(() => FeedEventWhereInput)
    where?: FeedEventWhereInput;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeedItemStateUpdateManyMutationInput } from './feed-item-state-update-many-mutation.input';
import { Type } from 'class-transformer';
import { FeedItemStateWhereInput } from './feed-item-state-where.input';

@ArgsType()
export class UpdateManyFeedItemStateArgs {

    @Field(() => FeedItemStateUpdateManyMutationInput, {nullable:false})
    @Type(() => FeedItemStateUpdateManyMutationInput)
    data!: FeedItemStateUpdateManyMutationInput;

    @Field(() => FeedItemStateWhereInput, {nullable:true})
    @Type(() => FeedItemStateWhereInput)
    where?: FeedItemStateWhereInput;
}

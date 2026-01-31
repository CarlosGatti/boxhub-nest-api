import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeedItemUpdateManyMutationInput } from './feed-item-update-many-mutation.input';
import { Type } from 'class-transformer';
import { FeedItemWhereInput } from './feed-item-where.input';

@ArgsType()
export class UpdateManyFeedItemArgs {

    @Field(() => FeedItemUpdateManyMutationInput, {nullable:false})
    @Type(() => FeedItemUpdateManyMutationInput)
    data!: FeedItemUpdateManyMutationInput;

    @Field(() => FeedItemWhereInput, {nullable:true})
    @Type(() => FeedItemWhereInput)
    where?: FeedItemWhereInput;
}

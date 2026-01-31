import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeedSourceUpdateManyMutationInput } from './feed-source-update-many-mutation.input';
import { Type } from 'class-transformer';
import { FeedSourceWhereInput } from './feed-source-where.input';

@ArgsType()
export class UpdateManyFeedSourceArgs {

    @Field(() => FeedSourceUpdateManyMutationInput, {nullable:false})
    @Type(() => FeedSourceUpdateManyMutationInput)
    data!: FeedSourceUpdateManyMutationInput;

    @Field(() => FeedSourceWhereInput, {nullable:true})
    @Type(() => FeedSourceWhereInput)
    where?: FeedSourceWhereInput;
}

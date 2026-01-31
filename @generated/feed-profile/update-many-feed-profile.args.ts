import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeedProfileUpdateManyMutationInput } from './feed-profile-update-many-mutation.input';
import { Type } from 'class-transformer';
import { FeedProfileWhereInput } from './feed-profile-where.input';

@ArgsType()
export class UpdateManyFeedProfileArgs {

    @Field(() => FeedProfileUpdateManyMutationInput, {nullable:false})
    @Type(() => FeedProfileUpdateManyMutationInput)
    data!: FeedProfileUpdateManyMutationInput;

    @Field(() => FeedProfileWhereInput, {nullable:true})
    @Type(() => FeedProfileWhereInput)
    where?: FeedProfileWhereInput;
}

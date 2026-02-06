import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeedSourcePreferenceUpdateManyMutationInput } from './feed-source-preference-update-many-mutation.input';
import { Type } from 'class-transformer';
import { FeedSourcePreferenceWhereInput } from './feed-source-preference-where.input';

@ArgsType()
export class UpdateManyFeedSourcePreferenceArgs {

    @Field(() => FeedSourcePreferenceUpdateManyMutationInput, {nullable:false})
    @Type(() => FeedSourcePreferenceUpdateManyMutationInput)
    data!: FeedSourcePreferenceUpdateManyMutationInput;

    @Field(() => FeedSourcePreferenceWhereInput, {nullable:true})
    @Type(() => FeedSourcePreferenceWhereInput)
    where?: FeedSourcePreferenceWhereInput;
}

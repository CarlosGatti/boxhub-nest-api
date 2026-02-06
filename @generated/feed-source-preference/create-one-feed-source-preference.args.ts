import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeedSourcePreferenceCreateInput } from './feed-source-preference-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneFeedSourcePreferenceArgs {

    @Field(() => FeedSourcePreferenceCreateInput, {nullable:false})
    @Type(() => FeedSourcePreferenceCreateInput)
    data!: FeedSourcePreferenceCreateInput;
}

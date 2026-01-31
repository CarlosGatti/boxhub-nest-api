import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeedProfileCreateInput } from './feed-profile-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneFeedProfileArgs {

    @Field(() => FeedProfileCreateInput, {nullable:false})
    @Type(() => FeedProfileCreateInput)
    data!: FeedProfileCreateInput;
}

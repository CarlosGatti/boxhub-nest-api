import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeedSourcePreferenceWhereInput } from './feed-source-preference-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyFeedSourcePreferenceArgs {

    @Field(() => FeedSourcePreferenceWhereInput, {nullable:true})
    @Type(() => FeedSourcePreferenceWhereInput)
    where?: FeedSourcePreferenceWhereInput;
}

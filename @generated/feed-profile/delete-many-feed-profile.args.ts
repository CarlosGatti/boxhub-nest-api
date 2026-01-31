import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeedProfileWhereInput } from './feed-profile-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyFeedProfileArgs {

    @Field(() => FeedProfileWhereInput, {nullable:true})
    @Type(() => FeedProfileWhereInput)
    where?: FeedProfileWhereInput;
}

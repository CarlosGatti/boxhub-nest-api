import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeedItemStateCreateManyInput } from './feed-item-state-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyFeedItemStateArgs {

    @Field(() => [FeedItemStateCreateManyInput], {nullable:false})
    @Type(() => FeedItemStateCreateManyInput)
    data!: Array<FeedItemStateCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

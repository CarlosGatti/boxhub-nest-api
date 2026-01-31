import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeedItemCreateManyInput } from './feed-item-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyFeedItemArgs {

    @Field(() => [FeedItemCreateManyInput], {nullable:false})
    @Type(() => FeedItemCreateManyInput)
    data!: Array<FeedItemCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedItemStateCreateManyUserInput } from './feed-item-state-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class FeedItemStateCreateManyUserInputEnvelope {

    @Field(() => [FeedItemStateCreateManyUserInput], {nullable:false})
    @Type(() => FeedItemStateCreateManyUserInput)
    data!: Array<FeedItemStateCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

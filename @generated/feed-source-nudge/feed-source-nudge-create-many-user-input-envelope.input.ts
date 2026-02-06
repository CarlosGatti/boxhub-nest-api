import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedSourceNudgeCreateManyUserInput } from './feed-source-nudge-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class FeedSourceNudgeCreateManyUserInputEnvelope {

    @Field(() => [FeedSourceNudgeCreateManyUserInput], {nullable:false})
    @Type(() => FeedSourceNudgeCreateManyUserInput)
    data!: Array<FeedSourceNudgeCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

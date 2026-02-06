import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedSourceNudgeCreateManySourceInput } from './feed-source-nudge-create-many-source.input';
import { Type } from 'class-transformer';

@InputType()
export class FeedSourceNudgeCreateManySourceInputEnvelope {

    @Field(() => [FeedSourceNudgeCreateManySourceInput], {nullable:false})
    @Type(() => FeedSourceNudgeCreateManySourceInput)
    data!: Array<FeedSourceNudgeCreateManySourceInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

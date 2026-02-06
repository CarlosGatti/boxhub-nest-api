import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedSourceWhereInput } from './feed-source-where.input';
import { Type } from 'class-transformer';
import { FeedSourceUpdateWithoutNudgesInput } from './feed-source-update-without-nudges.input';

@InputType()
export class FeedSourceUpdateToOneWithWhereWithoutNudgesInput {

    @Field(() => FeedSourceWhereInput, {nullable:true})
    @Type(() => FeedSourceWhereInput)
    where?: FeedSourceWhereInput;

    @Field(() => FeedSourceUpdateWithoutNudgesInput, {nullable:false})
    @Type(() => FeedSourceUpdateWithoutNudgesInput)
    data!: FeedSourceUpdateWithoutNudgesInput;
}

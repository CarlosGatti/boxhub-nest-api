import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedSourceUpdateWithoutNudgesInput } from './feed-source-update-without-nudges.input';
import { Type } from 'class-transformer';
import { FeedSourceCreateWithoutNudgesInput } from './feed-source-create-without-nudges.input';
import { FeedSourceWhereInput } from './feed-source-where.input';

@InputType()
export class FeedSourceUpsertWithoutNudgesInput {

    @Field(() => FeedSourceUpdateWithoutNudgesInput, {nullable:false})
    @Type(() => FeedSourceUpdateWithoutNudgesInput)
    update!: FeedSourceUpdateWithoutNudgesInput;

    @Field(() => FeedSourceCreateWithoutNudgesInput, {nullable:false})
    @Type(() => FeedSourceCreateWithoutNudgesInput)
    create!: FeedSourceCreateWithoutNudgesInput;

    @Field(() => FeedSourceWhereInput, {nullable:true})
    @Type(() => FeedSourceWhereInput)
    where?: FeedSourceWhereInput;
}

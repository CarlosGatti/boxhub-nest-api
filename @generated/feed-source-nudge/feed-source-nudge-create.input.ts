import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutFeedSourceNudgesInput } from '../user/user-create-nested-one-without-feed-source-nudges.input';
import { Type } from 'class-transformer';
import { FeedSourceCreateNestedOneWithoutNudgesInput } from '../feed-source/feed-source-create-nested-one-without-nudges.input';

@InputType()
export class FeedSourceNudgeCreateInput {

    @Field(() => String, {nullable:false})
    reason!: string;

    @Field(() => String, {nullable:false})
    status!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutFeedSourceNudgesInput, {nullable:false})
    @Type(() => UserCreateNestedOneWithoutFeedSourceNudgesInput)
    user!: UserCreateNestedOneWithoutFeedSourceNudgesInput;

    @Field(() => FeedSourceCreateNestedOneWithoutNudgesInput, {nullable:false})
    source!: FeedSourceCreateNestedOneWithoutNudgesInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedSourceCreateNestedOneWithoutNudgesInput } from '../feed-source/feed-source-create-nested-one-without-nudges.input';

@InputType()
export class FeedSourceNudgeCreateWithoutUserInput {

    @Field(() => String, {nullable:false})
    reason!: string;

    @Field(() => String, {nullable:false})
    status!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => FeedSourceCreateNestedOneWithoutNudgesInput, {nullable:false})
    source!: FeedSourceCreateNestedOneWithoutNudgesInput;
}

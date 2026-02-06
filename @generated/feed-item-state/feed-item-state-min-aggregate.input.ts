import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class FeedItemStateMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;

    @Field(() => Boolean, {nullable:true})
    itemId?: true;

    @Field(() => Boolean, {nullable:true})
    readStatus?: true;

    @Field(() => Boolean, {nullable:true})
    saveStatus?: true;

    @Field(() => Boolean, {nullable:true})
    visibility?: true;

    @Field(() => Boolean, {nullable:true})
    openedAt?: true;

    @Field(() => Boolean, {nullable:true})
    skippedAt?: true;

    @Field(() => Boolean, {nullable:true})
    skipCount?: true;

    @Field(() => Boolean, {nullable:true})
    actionCount?: true;

    @Field(() => Boolean, {nullable:true})
    lastAction?: true;

    @Field(() => Boolean, {nullable:true})
    readAt?: true;

    @Field(() => Boolean, {nullable:true})
    savedAt?: true;

    @Field(() => Boolean, {nullable:true})
    hiddenAt?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

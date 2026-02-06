import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { FeedEventAction } from '../prisma/feed-event-action.enum';

@InputType()
export class FeedEventCreateManySourceInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    itemId!: number;

    @Field(() => FeedEventAction, {nullable:false})
    action!: keyof typeof FeedEventAction;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

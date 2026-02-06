import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { FeedEventAction } from '../prisma/feed-event-action.enum';

@ObjectType()
export class FeedEventMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => Int, {nullable:true})
    itemId?: number;

    @Field(() => Int, {nullable:true})
    sourceId?: number;

    @Field(() => FeedEventAction, {nullable:true})
    action?: keyof typeof FeedEventAction;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

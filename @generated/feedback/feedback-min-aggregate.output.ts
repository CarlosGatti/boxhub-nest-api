import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { FeedbackStatus } from '../prisma/feedback-status.enum';

@ObjectType()
export class FeedbackMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    targetAppId?: number;

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => String, {nullable:true})
    anonymousId?: string;

    @Field(() => String, {nullable:true})
    contactEmail?: string;

    @Field(() => Int, {nullable:true})
    rating?: number;

    @Field(() => String, {nullable:true})
    message?: string;

    @Field(() => String, {nullable:true})
    contextPath?: string;

    @Field(() => FeedbackStatus, {nullable:true})
    status?: keyof typeof FeedbackStatus;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

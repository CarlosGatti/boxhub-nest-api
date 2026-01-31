import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { FeedbackCreatetagsInput } from './feedback-createtags.input';
import { GraphQLJSON } from 'graphql-type-json';
import { FeedbackStatus } from '../prisma/feedback-status.enum';

@InputType()
export class FeedbackUncheckedCreateWithoutUserInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    targetAppId!: number;

    @Field(() => String, {nullable:true})
    anonymousId?: string;

    @Field(() => String, {nullable:true})
    contactEmail?: string;

    @Field(() => Int, {nullable:true})
    rating?: number;

    @Field(() => String, {nullable:false})
    message!: string;

    @Field(() => FeedbackCreatetagsInput, {nullable:true})
    tags?: FeedbackCreatetagsInput;

    @Field(() => String, {nullable:true})
    contextPath?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata?: any;

    @Field(() => FeedbackStatus, {nullable:true})
    status?: keyof typeof FeedbackStatus;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

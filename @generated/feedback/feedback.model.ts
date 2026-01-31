import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { FeedbackStatus } from '../prisma/feedback-status.enum';
import { App } from '../app/app.model';
import { User } from '../user/user.model';

@ObjectType()
export class Feedback {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    targetAppId!: number;

    @Field(() => Int, {nullable:true})
    userId!: number | null;

    @Field(() => String, {nullable:true})
    anonymousId!: string | null;

    @Field(() => String, {nullable:true})
    contactEmail!: string | null;

    @Field(() => Int, {nullable:true})
    rating!: number | null;

    @Field(() => String, {nullable:false})
    message!: string;

    @Field(() => [String], {nullable:true})
    tags!: Array<string>;

    @Field(() => String, {nullable:true})
    contextPath!: string | null;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata!: any | null;

    @Field(() => FeedbackStatus, {nullable:false,defaultValue:'PENDING'})
    status!: keyof typeof FeedbackStatus;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => App, {nullable:false})
    targetApp?: App;

    @Field(() => User, {nullable:true})
    user?: User | null;
}

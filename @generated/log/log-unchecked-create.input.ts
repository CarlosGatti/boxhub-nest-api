import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { LogAction } from '../prisma/log-action.enum';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class LogUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => LogAction, {nullable:false})
    action!: keyof typeof LogAction;

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => String, {nullable:true})
    details?: string;

    @Field(() => String, {nullable:true})
    route?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata?: any;

    @Field(() => String, {nullable:true})
    ipAddress?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { LogAction } from '../prisma/log-action.enum';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { User } from '../user/user.model';

@ObjectType()
export class Log {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => LogAction, {nullable:false})
    action!: keyof typeof LogAction;

    @Field(() => Int, {nullable:true})
    userId!: number | null;

    @Field(() => String, {nullable:true})
    details!: string | null;

    @Field(() => String, {nullable:true})
    route!: string | null;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata!: any | null;

    @Field(() => String, {nullable:true})
    ipAddress!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => User, {nullable:true})
    user?: User | null;
}

import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { LogAction } from '../prisma/log-action.enum';

@ObjectType()
export class LogMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => LogAction, {nullable:true})
    action?: keyof typeof LogAction;

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => String, {nullable:true})
    details?: string;

    @Field(() => String, {nullable:true})
    route?: string;

    @Field(() => String, {nullable:true})
    ipAddress?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

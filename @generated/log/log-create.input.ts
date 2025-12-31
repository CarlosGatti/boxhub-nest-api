import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LogAction } from '../prisma/log-action.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { UserCreateNestedOneWithoutLogsInput } from '../user/user-create-nested-one-without-logs.input';
import { Type } from 'class-transformer';

@InputType()
export class LogCreateInput {

    @Field(() => LogAction, {nullable:false})
    action!: keyof typeof LogAction;

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

    @Field(() => UserCreateNestedOneWithoutLogsInput, {nullable:true})
    @Type(() => UserCreateNestedOneWithoutLogsInput)
    user?: UserCreateNestedOneWithoutLogsInput;
}

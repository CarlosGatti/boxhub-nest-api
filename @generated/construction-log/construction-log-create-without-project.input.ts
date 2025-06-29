import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LogType } from '../prisma/log-type.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { UserCreateNestedOneWithoutConstructionLogsInput } from '../user/user-create-nested-one-without-construction-logs.input';
import { LogCommentCreateNestedManyWithoutLogInput } from '../log-comment/log-comment-create-nested-many-without-log.input';

@InputType()
export class ConstructionLogCreateWithoutProjectInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => LogType, {nullable:false})
    type!: keyof typeof LogType;

    @Field(() => GraphQLJSON, {nullable:true})
    images?: any;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutConstructionLogsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutConstructionLogsInput;

    @Field(() => LogCommentCreateNestedManyWithoutLogInput, {nullable:true})
    comments?: LogCommentCreateNestedManyWithoutLogInput;
}

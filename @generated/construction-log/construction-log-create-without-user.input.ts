import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LogType } from '../prisma/log-type.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { ProjectCreateNestedOneWithoutLogsInput } from '../project/project-create-nested-one-without-logs.input';
import { LogCommentCreateNestedManyWithoutLogInput } from '../log-comment/log-comment-create-nested-many-without-log.input';

@InputType()
export class ConstructionLogCreateWithoutUserInput {

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

    @Field(() => ProjectCreateNestedOneWithoutLogsInput, {nullable:false})
    project!: ProjectCreateNestedOneWithoutLogsInput;

    @Field(() => LogCommentCreateNestedManyWithoutLogInput, {nullable:true})
    comments?: LogCommentCreateNestedManyWithoutLogInput;
}

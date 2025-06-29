import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumLogTypeFieldUpdateOperationsInput } from '../prisma/enum-log-type-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ProjectUpdateOneRequiredWithoutLogsNestedInput } from '../project/project-update-one-required-without-logs-nested.input';
import { UserUpdateOneRequiredWithoutConstructionLogsNestedInput } from '../user/user-update-one-required-without-construction-logs-nested.input';
import { LogCommentUpdateManyWithoutLogNestedInput } from '../log-comment/log-comment-update-many-without-log-nested.input';

@InputType()
export class ConstructionLogUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => EnumLogTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumLogTypeFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    images?: any;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ProjectUpdateOneRequiredWithoutLogsNestedInput, {nullable:true})
    project?: ProjectUpdateOneRequiredWithoutLogsNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutConstructionLogsNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutConstructionLogsNestedInput;

    @Field(() => LogCommentUpdateManyWithoutLogNestedInput, {nullable:true})
    comments?: LogCommentUpdateManyWithoutLogNestedInput;
}

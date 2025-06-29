import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { StorageMemberCreateNestedManyWithoutUserInput } from '../storage-member/storage-member-create-nested-many-without-user.input';
import { ProjectCreateNestedManyWithoutResponsibleInput } from '../project/project-create-nested-many-without-responsible.input';
import { ConstructionLogCreateNestedManyWithoutUserInput } from '../construction-log/construction-log-create-nested-many-without-user.input';
import { LogCommentCreateNestedManyWithoutUserInput } from '../log-comment/log-comment-create-nested-many-without-user.input';
import { LogCommentReplyCreateNestedManyWithoutUserInput } from '../log-comment-reply/log-comment-reply-create-nested-many-without-user.input';
import { PermitInspectionCreateNestedManyWithoutResponsibleInput } from '../permit-inspection/permit-inspection-create-nested-many-without-responsible.input';
import { MaterialEntryCreateNestedManyWithoutReceivedByInput } from '../material-entry/material-entry-create-nested-many-without-received-by.input';

@InputType()
export class UserCreateWithoutLogsInput {

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    @Field(() => String, {nullable:true})
    nickname?: string;

    @Field(() => Boolean, {nullable:true})
    public?: boolean;

    @Field(() => Role, {nullable:true})
    role?: keyof typeof Role;

    @Field(() => Boolean, {nullable:true})
    emailVerified?: boolean;

    @Field(() => String, {nullable:true})
    profilePicture?: string;

    @Field(() => String, {nullable:true})
    about?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Boolean, {nullable:true})
    isPremium?: boolean;

    @Field(() => String, {nullable:true})
    subscriptionId?: string;

    @Field(() => Date, {nullable:true})
    expiresAt?: Date | string;

    @Field(() => Date, {nullable:true})
    willExpireAt?: Date | string;

    @Field(() => StorageMemberCreateNestedManyWithoutUserInput, {nullable:true})
    storageMemberships?: StorageMemberCreateNestedManyWithoutUserInput;

    @Field(() => ProjectCreateNestedManyWithoutResponsibleInput, {nullable:true})
    projectResponsible?: ProjectCreateNestedManyWithoutResponsibleInput;

    @Field(() => ConstructionLogCreateNestedManyWithoutUserInput, {nullable:true})
    constructionLogs?: ConstructionLogCreateNestedManyWithoutUserInput;

    @Field(() => LogCommentCreateNestedManyWithoutUserInput, {nullable:true})
    logComments?: LogCommentCreateNestedManyWithoutUserInput;

    @Field(() => LogCommentReplyCreateNestedManyWithoutUserInput, {nullable:true})
    logCommentReplies?: LogCommentReplyCreateNestedManyWithoutUserInput;

    @Field(() => PermitInspectionCreateNestedManyWithoutResponsibleInput, {nullable:true})
    responsibleInspections?: PermitInspectionCreateNestedManyWithoutResponsibleInput;

    @Field(() => MaterialEntryCreateNestedManyWithoutReceivedByInput, {nullable:true})
    receivedMaterials?: MaterialEntryCreateNestedManyWithoutReceivedByInput;
}

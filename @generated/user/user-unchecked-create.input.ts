import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { StorageMemberUncheckedCreateNestedManyWithoutUserInput } from '../storage-member/storage-member-unchecked-create-nested-many-without-user.input';
import { LogUncheckedCreateNestedManyWithoutUserInput } from '../log/log-unchecked-create-nested-many-without-user.input';
import { ProjectUncheckedCreateNestedManyWithoutResponsibleInput } from '../project/project-unchecked-create-nested-many-without-responsible.input';
import { ConstructionLogUncheckedCreateNestedManyWithoutUserInput } from '../construction-log/construction-log-unchecked-create-nested-many-without-user.input';
import { LogCommentUncheckedCreateNestedManyWithoutUserInput } from '../log-comment/log-comment-unchecked-create-nested-many-without-user.input';
import { LogCommentReplyUncheckedCreateNestedManyWithoutUserInput } from '../log-comment-reply/log-comment-reply-unchecked-create-nested-many-without-user.input';
import { PermitInspectionUncheckedCreateNestedManyWithoutResponsibleInput } from '../permit-inspection/permit-inspection-unchecked-create-nested-many-without-responsible.input';
import { MaterialEntryUncheckedCreateNestedManyWithoutReceivedByInput } from '../material-entry/material-entry-unchecked-create-nested-many-without-received-by.input';

@InputType()
export class UserUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => StorageMemberUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    storageMemberships?: StorageMemberUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => LogUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    logs?: LogUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => ProjectUncheckedCreateNestedManyWithoutResponsibleInput, {nullable:true})
    projectResponsible?: ProjectUncheckedCreateNestedManyWithoutResponsibleInput;

    @Field(() => ConstructionLogUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    constructionLogs?: ConstructionLogUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => LogCommentUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    logComments?: LogCommentUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => LogCommentReplyUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    logCommentReplies?: LogCommentReplyUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => PermitInspectionUncheckedCreateNestedManyWithoutResponsibleInput, {nullable:true})
    responsibleInspections?: PermitInspectionUncheckedCreateNestedManyWithoutResponsibleInput;

    @Field(() => MaterialEntryUncheckedCreateNestedManyWithoutReceivedByInput, {nullable:true})
    receivedMaterials?: MaterialEntryUncheckedCreateNestedManyWithoutReceivedByInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { EnumRoleFilter } from '../prisma/enum-role-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { StorageMemberListRelationFilter } from '../storage-member/storage-member-list-relation-filter.input';
import { LogListRelationFilter } from '../log/log-list-relation-filter.input';
import { ProjectListRelationFilter } from '../project/project-list-relation-filter.input';
import { ConstructionLogListRelationFilter } from '../construction-log/construction-log-list-relation-filter.input';
import { LogCommentListRelationFilter } from '../log-comment/log-comment-list-relation-filter.input';
import { LogCommentReplyListRelationFilter } from '../log-comment-reply/log-comment-reply-list-relation-filter.input';
import { PermitInspectionListRelationFilter } from '../permit-inspection/permit-inspection-list-relation-filter.input';
import { MaterialEntryListRelationFilter } from '../material-entry/material-entry-list-relation-filter.input';
import { DiscartItemListRelationFilter } from '../discart-item/discart-item-list-relation-filter.input';

@InputType()
export class UserWhereInput {

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    password?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    firstName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    lastName?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    nickname?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    public?: BoolFilter;

    @Field(() => EnumRoleFilter, {nullable:true})
    role?: EnumRoleFilter;

    @Field(() => BoolFilter, {nullable:true})
    emailVerified?: BoolFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    profilePicture?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    about?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    isPremium?: BoolFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    subscriptionId?: StringNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    expiresAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    willExpireAt?: DateTimeNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    apartment?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    isApprovedResident?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    isAdmin?: BoolFilter;

    @Field(() => StorageMemberListRelationFilter, {nullable:true})
    storageMemberships?: StorageMemberListRelationFilter;

    @Field(() => LogListRelationFilter, {nullable:true})
    logs?: LogListRelationFilter;

    @Field(() => ProjectListRelationFilter, {nullable:true})
    projectResponsible?: ProjectListRelationFilter;

    @Field(() => ConstructionLogListRelationFilter, {nullable:true})
    constructionLogs?: ConstructionLogListRelationFilter;

    @Field(() => LogCommentListRelationFilter, {nullable:true})
    logComments?: LogCommentListRelationFilter;

    @Field(() => LogCommentReplyListRelationFilter, {nullable:true})
    logCommentReplies?: LogCommentReplyListRelationFilter;

    @Field(() => PermitInspectionListRelationFilter, {nullable:true})
    responsibleInspections?: PermitInspectionListRelationFilter;

    @Field(() => MaterialEntryListRelationFilter, {nullable:true})
    receivedMaterials?: MaterialEntryListRelationFilter;

    @Field(() => DiscartItemListRelationFilter, {nullable:true})
    discartItems?: DiscartItemListRelationFilter;
}

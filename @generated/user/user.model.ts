import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { StorageMember } from '../storage-member/storage-member.model';
import { Log } from '../log/log.model';
import { Project } from '../project/project.model';
import { ConstructionLog } from '../construction-log/construction-log.model';
import { LogComment } from '../log-comment/log-comment.model';
import { LogCommentReply } from '../log-comment-reply/log-comment-reply.model';
import { PermitInspection } from '../permit-inspection/permit-inspection.model';
import { MaterialEntry } from '../material-entry/material-entry.model';
import { DiscartItem } from '../discart-item/discart-item.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    @Field(() => String, {nullable:true})
    nickname!: string | null;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    public!: boolean;

    @Field(() => Role, {nullable:false,defaultValue:'USER'})
    role!: keyof typeof Role;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    emailVerified!: boolean;

    @Field(() => String, {nullable:true})
    profilePicture!: string | null;

    @Field(() => String, {nullable:true})
    about!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isPremium!: boolean;

    @Field(() => String, {nullable:true})
    subscriptionId!: string | null;

    @Field(() => Date, {nullable:true})
    expiresAt!: Date | null;

    @Field(() => Date, {nullable:true})
    willExpireAt!: Date | null;

    @Field(() => String, {nullable:true})
    apartment!: string | null;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isApprovedResident!: boolean;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isAdmin!: boolean;

    @Field(() => [StorageMember], {nullable:true})
    storageMemberships?: Array<StorageMember>;

    @Field(() => [Log], {nullable:true})
    logs?: Array<Log>;

    @Field(() => [Project], {nullable:true})
    projectResponsible?: Array<Project>;

    @Field(() => [ConstructionLog], {nullable:true})
    constructionLogs?: Array<ConstructionLog>;

    @Field(() => [LogComment], {nullable:true})
    logComments?: Array<LogComment>;

    @Field(() => [LogCommentReply], {nullable:true})
    logCommentReplies?: Array<LogCommentReply>;

    @Field(() => [PermitInspection], {nullable:true})
    responsibleInspections?: Array<PermitInspection>;

    @Field(() => [MaterialEntry], {nullable:true})
    receivedMaterials?: Array<MaterialEntry>;

    @Field(() => [DiscartItem], {nullable:true})
    discartItems?: Array<DiscartItem>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}

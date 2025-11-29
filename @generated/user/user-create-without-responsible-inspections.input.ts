import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { StorageMemberCreateNestedManyWithoutUserInput } from '../storage-member/storage-member-create-nested-many-without-user.input';
import { LogCreateNestedManyWithoutUserInput } from '../log/log-create-nested-many-without-user.input';
import { ProjectCreateNestedManyWithoutResponsibleInput } from '../project/project-create-nested-many-without-responsible.input';
import { ConstructionLogCreateNestedManyWithoutUserInput } from '../construction-log/construction-log-create-nested-many-without-user.input';
import { LogCommentCreateNestedManyWithoutUserInput } from '../log-comment/log-comment-create-nested-many-without-user.input';
import { LogCommentReplyCreateNestedManyWithoutUserInput } from '../log-comment-reply/log-comment-reply-create-nested-many-without-user.input';
import { MaterialEntryCreateNestedManyWithoutReceivedByInput } from '../material-entry/material-entry-create-nested-many-without-received-by.input';
import { DiscartItemCreateNestedManyWithoutCreatedByInput } from '../discart-item/discart-item-create-nested-many-without-created-by.input';
import { CommentCreateNestedManyWithoutUserInput } from '../comment/comment-create-nested-many-without-user.input';
import { RatingCreateNestedManyWithoutSellerInput } from '../rating/rating-create-nested-many-without-seller.input';
import { RatingCreateNestedManyWithoutBuyerInput } from '../rating/rating-create-nested-many-without-buyer.input';

@InputType()
export class UserCreateWithoutResponsibleInspectionsInput {

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

    @Field(() => String, {nullable:true})
    contactPhone?: string;

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

    @Field(() => String, {nullable:true})
    apartment?: string;

    @Field(() => Boolean, {nullable:true})
    isApprovedResident?: boolean;

    @Field(() => Boolean, {nullable:true})
    isAdmin?: boolean;

    @Field(() => StorageMemberCreateNestedManyWithoutUserInput, {nullable:true})
    storageMemberships?: StorageMemberCreateNestedManyWithoutUserInput;

    @Field(() => LogCreateNestedManyWithoutUserInput, {nullable:true})
    logs?: LogCreateNestedManyWithoutUserInput;

    @Field(() => ProjectCreateNestedManyWithoutResponsibleInput, {nullable:true})
    projectResponsible?: ProjectCreateNestedManyWithoutResponsibleInput;

    @Field(() => ConstructionLogCreateNestedManyWithoutUserInput, {nullable:true})
    constructionLogs?: ConstructionLogCreateNestedManyWithoutUserInput;

    @Field(() => LogCommentCreateNestedManyWithoutUserInput, {nullable:true})
    logComments?: LogCommentCreateNestedManyWithoutUserInput;

    @Field(() => LogCommentReplyCreateNestedManyWithoutUserInput, {nullable:true})
    logCommentReplies?: LogCommentReplyCreateNestedManyWithoutUserInput;

    @Field(() => MaterialEntryCreateNestedManyWithoutReceivedByInput, {nullable:true})
    receivedMaterials?: MaterialEntryCreateNestedManyWithoutReceivedByInput;

    @Field(() => DiscartItemCreateNestedManyWithoutCreatedByInput, {nullable:true})
    discartItems?: DiscartItemCreateNestedManyWithoutCreatedByInput;

    @Field(() => CommentCreateNestedManyWithoutUserInput, {nullable:true})
    comments?: CommentCreateNestedManyWithoutUserInput;

    @Field(() => RatingCreateNestedManyWithoutSellerInput, {nullable:true})
    ratingsAsSeller?: RatingCreateNestedManyWithoutSellerInput;

    @Field(() => RatingCreateNestedManyWithoutBuyerInput, {nullable:true})
    ratingsAsBuyer?: RatingCreateNestedManyWithoutBuyerInput;
}

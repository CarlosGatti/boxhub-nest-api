import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { StorageMemberCreateNestedManyWithoutUserInput } from '../storage-member/storage-member-create-nested-many-without-user.input';
import { LogCreateNestedManyWithoutUserInput } from '../log/log-create-nested-many-without-user.input';
import { DiscartItemCreateNestedManyWithoutCreatedByInput } from '../discart-item/discart-item-create-nested-many-without-created-by.input';
import { CommentCreateNestedManyWithoutUserInput } from '../comment/comment-create-nested-many-without-user.input';
import { RatingCreateNestedManyWithoutSellerInput } from '../rating/rating-create-nested-many-without-seller.input';
import { RatingCreateNestedManyWithoutBuyerInput } from '../rating/rating-create-nested-many-without-buyer.input';
import { UserAppAccessCreateNestedManyWithoutUserInput } from '../user-app-access/user-app-access-create-nested-many-without-user.input';

@InputType()
export class UserCreateInput {

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

    @Field(() => DiscartItemCreateNestedManyWithoutCreatedByInput, {nullable:true})
    discartItems?: DiscartItemCreateNestedManyWithoutCreatedByInput;

    @Field(() => CommentCreateNestedManyWithoutUserInput, {nullable:true})
    comments?: CommentCreateNestedManyWithoutUserInput;

    @Field(() => RatingCreateNestedManyWithoutSellerInput, {nullable:true})
    ratingsAsSeller?: RatingCreateNestedManyWithoutSellerInput;

    @Field(() => RatingCreateNestedManyWithoutBuyerInput, {nullable:true})
    ratingsAsBuyer?: RatingCreateNestedManyWithoutBuyerInput;

    @Field(() => UserAppAccessCreateNestedManyWithoutUserInput, {nullable:true})
    apps?: UserAppAccessCreateNestedManyWithoutUserInput;
}

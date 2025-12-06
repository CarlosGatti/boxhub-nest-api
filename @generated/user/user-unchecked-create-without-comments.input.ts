import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { StorageMemberUncheckedCreateNestedManyWithoutUserInput } from '../storage-member/storage-member-unchecked-create-nested-many-without-user.input';
import { LogUncheckedCreateNestedManyWithoutUserInput } from '../log/log-unchecked-create-nested-many-without-user.input';
import { DiscartItemUncheckedCreateNestedManyWithoutCreatedByInput } from '../discart-item/discart-item-unchecked-create-nested-many-without-created-by.input';
import { RatingUncheckedCreateNestedManyWithoutSellerInput } from '../rating/rating-unchecked-create-nested-many-without-seller.input';
import { RatingUncheckedCreateNestedManyWithoutBuyerInput } from '../rating/rating-unchecked-create-nested-many-without-buyer.input';
import { UserAppAccessUncheckedCreateNestedManyWithoutUserInput } from '../user-app-access/user-app-access-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateWithoutCommentsInput {

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

    @Field(() => StorageMemberUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    storageMemberships?: StorageMemberUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => LogUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    logs?: LogUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => DiscartItemUncheckedCreateNestedManyWithoutCreatedByInput, {nullable:true})
    discartItems?: DiscartItemUncheckedCreateNestedManyWithoutCreatedByInput;

    @Field(() => RatingUncheckedCreateNestedManyWithoutSellerInput, {nullable:true})
    ratingsAsSeller?: RatingUncheckedCreateNestedManyWithoutSellerInput;

    @Field(() => RatingUncheckedCreateNestedManyWithoutBuyerInput, {nullable:true})
    ratingsAsBuyer?: RatingUncheckedCreateNestedManyWithoutBuyerInput;

    @Field(() => UserAppAccessUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    apps?: UserAppAccessUncheckedCreateNestedManyWithoutUserInput;
}

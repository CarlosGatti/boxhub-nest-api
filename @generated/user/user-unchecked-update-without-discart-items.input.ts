import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { EnumRoleFieldUpdateOperationsInput } from '../prisma/enum-role-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { StorageMemberUncheckedUpdateManyWithoutUserNestedInput } from '../storage-member/storage-member-unchecked-update-many-without-user-nested.input';
import { LogUncheckedUpdateManyWithoutUserNestedInput } from '../log/log-unchecked-update-many-without-user-nested.input';
import { CommentUncheckedUpdateManyWithoutUserNestedInput } from '../comment/comment-unchecked-update-many-without-user-nested.input';
import { RatingUncheckedUpdateManyWithoutSellerNestedInput } from '../rating/rating-unchecked-update-many-without-seller-nested.input';
import { RatingUncheckedUpdateManyWithoutBuyerNestedInput } from '../rating/rating-unchecked-update-many-without-buyer-nested.input';
import { UserAppAccessUncheckedUpdateManyWithoutUserNestedInput } from '../user-app-access/user-app-access-unchecked-update-many-without-user-nested.input';
import { PortfolioUncheckedUpdateManyWithoutUserNestedInput } from '../portfolio/portfolio-unchecked-update-many-without-user-nested.input';
import { Type } from 'class-transformer';
import { RefreshTokenUncheckedUpdateManyWithoutUserNestedInput } from '../refresh-token/refresh-token-unchecked-update-many-without-user-nested.input';

@InputType()
export class UserUncheckedUpdateWithoutDiscartItemsInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    lastName?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    nickname?: NullableStringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    public?: BoolFieldUpdateOperationsInput;

    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: EnumRoleFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    emailVerified?: BoolFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    profilePicture?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    about?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    contactPhone?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isPremium?: BoolFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    subscriptionId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    willExpireAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    apartment?: NullableStringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isApprovedResident?: BoolFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isAdmin?: BoolFieldUpdateOperationsInput;

    @Field(() => StorageMemberUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    storageMemberships?: StorageMemberUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => LogUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    logs?: LogUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => CommentUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => RatingUncheckedUpdateManyWithoutSellerNestedInput, {nullable:true})
    ratingsAsSeller?: RatingUncheckedUpdateManyWithoutSellerNestedInput;

    @Field(() => RatingUncheckedUpdateManyWithoutBuyerNestedInput, {nullable:true})
    ratingsAsBuyer?: RatingUncheckedUpdateManyWithoutBuyerNestedInput;

    @Field(() => UserAppAccessUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    apps?: UserAppAccessUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => PortfolioUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    @Type(() => PortfolioUncheckedUpdateManyWithoutUserNestedInput)
    portfolios?: PortfolioUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => RefreshTokenUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput;
}

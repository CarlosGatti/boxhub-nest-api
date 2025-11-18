import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    email = "email",
    password = "password",
    firstName = "firstName",
    lastName = "lastName",
    nickname = "nickname",
    'public' = "public",
    role = "role",
    emailVerified = "emailVerified",
    profilePicture = "profilePicture",
    about = "about",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    isPremium = "isPremium",
    subscriptionId = "subscriptionId",
    expiresAt = "expiresAt",
    willExpireAt = "willExpireAt",
    apartment = "apartment",
    isApprovedResident = "isApprovedResident",
    isAdmin = "isAdmin"
}


registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })

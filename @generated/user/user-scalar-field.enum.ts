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
    linkedinUrl = "linkedinUrl",
    twitterUrl = "twitterUrl",
    githubUrl = "githubUrl",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    isPremium = "isPremium",
    subscriptionId = "subscriptionId",
    expiresAt = "expiresAt",
    willExpireAt = "willExpireAt"
}


registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })

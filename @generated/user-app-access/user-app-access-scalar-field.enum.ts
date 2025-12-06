import { registerEnumType } from '@nestjs/graphql';

export enum UserAppAccessScalarFieldEnum {
    id = "id",
    userId = "userId",
    appId = "appId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(UserAppAccessScalarFieldEnum, { name: 'UserAppAccessScalarFieldEnum', description: undefined })

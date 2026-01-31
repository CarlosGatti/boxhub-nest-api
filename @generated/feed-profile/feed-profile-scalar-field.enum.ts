import { registerEnumType } from '@nestjs/graphql';

export enum FeedProfileScalarFieldEnum {
    id = "id",
    userId = "userId",
    timezone = "timezone",
    language = "language",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(FeedProfileScalarFieldEnum, { name: 'FeedProfileScalarFieldEnum', description: undefined })

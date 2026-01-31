import { registerEnumType } from '@nestjs/graphql';

export enum FeedCollectionScalarFieldEnum {
    id = "id",
    profileId = "profileId",
    name = "name",
    description = "description",
    icon = "icon",
    color = "color",
    keywords = "keywords",
    blocked = "blocked",
    preferredDomains = "preferredDomains",
    isActive = "isActive",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(FeedCollectionScalarFieldEnum, { name: 'FeedCollectionScalarFieldEnum', description: undefined })

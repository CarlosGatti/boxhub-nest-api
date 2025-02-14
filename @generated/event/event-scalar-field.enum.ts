import { registerEnumType } from '@nestjs/graphql';

export enum EventScalarFieldEnum {
    id = "id",
    title = "title",
    content = "content",
    published = "published",
    ownerId = "ownerId",
    startDate = "startDate",
    endDate = "endDate",
    eventOnlineDetailId = "eventOnlineDetailId",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    eventAddressId = "eventAddressId",
    visibility = "visibility",
    banner = "banner",
    communityId = "communityId"
}


registerEnumType(EventScalarFieldEnum, { name: 'EventScalarFieldEnum', description: undefined })

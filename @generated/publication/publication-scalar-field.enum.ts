import { registerEnumType } from '@nestjs/graphql';

export enum PublicationScalarFieldEnum {
    id = "id",
    description = "description",
    published = "published",
    userId = "userId",
    postId = "postId",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    visibility = "visibility",
    eventId = "eventId",
    communityId = "communityId"
}


registerEnumType(PublicationScalarFieldEnum, { name: 'PublicationScalarFieldEnum', description: undefined })

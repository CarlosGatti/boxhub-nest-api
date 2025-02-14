import { registerEnumType } from '@nestjs/graphql';

export enum PublicationLikeScalarFieldEnum {
    id = "id",
    userId = "userId",
    publicationId = "publicationId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(PublicationLikeScalarFieldEnum, { name: 'PublicationLikeScalarFieldEnum', description: undefined })

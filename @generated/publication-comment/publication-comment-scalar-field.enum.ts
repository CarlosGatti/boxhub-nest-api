import { registerEnumType } from '@nestjs/graphql';

export enum PublicationCommentScalarFieldEnum {
    id = "id",
    content = "content",
    userId = "userId",
    publicationId = "publicationId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(PublicationCommentScalarFieldEnum, { name: 'PublicationCommentScalarFieldEnum', description: undefined })

import { registerEnumType } from '@nestjs/graphql';

export enum DefinedInternalNoteScalarFieldEnum {
    id = "id",
    clientId = "clientId",
    projectId = "projectId",
    authorId = "authorId",
    body = "body",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(DefinedInternalNoteScalarFieldEnum, { name: 'DefinedInternalNoteScalarFieldEnum', description: undefined })

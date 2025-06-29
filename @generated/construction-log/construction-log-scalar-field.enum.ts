import { registerEnumType } from '@nestjs/graphql';

export enum ConstructionLogScalarFieldEnum {
    id = "id",
    projectId = "projectId",
    userId = "userId",
    title = "title",
    description = "description",
    type = "type",
    images = "images",
    createdAt = "createdAt"
}


registerEnumType(ConstructionLogScalarFieldEnum, { name: 'ConstructionLogScalarFieldEnum', description: undefined })

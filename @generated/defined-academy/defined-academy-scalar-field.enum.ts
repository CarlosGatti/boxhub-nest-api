import { registerEnumType } from '@nestjs/graphql';

export enum DefinedAcademyScalarFieldEnum {
    id = "id",
    appId = "appId",
    name = "name",
    slug = "slug",
    description = "description",
    status = "status",
    logoUrl = "logoUrl",
    settings = "settings",
    publishedAt = "publishedAt",
    archivedAt = "archivedAt",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(DefinedAcademyScalarFieldEnum, { name: 'DefinedAcademyScalarFieldEnum', description: undefined })

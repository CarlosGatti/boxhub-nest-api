import { registerEnumType } from '@nestjs/graphql';

export enum DefinedBrandingProjectScalarFieldEnum {
    id = "id",
    clientId = "clientId",
    projectId = "projectId",
    title = "title",
    slug = "slug",
    description = "description",
    concept = "concept",
    status = "status",
    isPublic = "isPublic",
    publishedAt = "publishedAt",
    isFeatured = "isFeatured",
    coverImageUrl = "coverImageUrl",
    brandManualPdfUrl = "brandManualPdfUrl",
    sourcePdfFileName = "sourcePdfFileName",
    metadata = "metadata",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(DefinedBrandingProjectScalarFieldEnum, { name: 'DefinedBrandingProjectScalarFieldEnum', description: undefined })

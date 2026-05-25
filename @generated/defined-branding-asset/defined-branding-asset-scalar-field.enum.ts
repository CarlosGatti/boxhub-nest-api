import { registerEnumType } from '@nestjs/graphql';

export enum DefinedBrandingAssetScalarFieldEnum {
    id = "id",
    brandingProjectId = "brandingProjectId",
    type = "type",
    name = "name",
    fileUrl = "fileUrl",
    fileName = "fileName",
    mimeType = "mimeType",
    notes = "notes",
    metadata = "metadata",
    order = "order",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(DefinedBrandingAssetScalarFieldEnum, { name: 'DefinedBrandingAssetScalarFieldEnum', description: undefined })

import { registerEnumType } from '@nestjs/graphql';

export enum ReviewCardTemplateScalarFieldEnum {
    id = "id",
    key = "key",
    name = "name",
    category = "category",
    aspect = "aspect",
    schemaVersion = "schemaVersion",
    isActive = "isActive",
    previewImageUrl = "previewImageUrl",
    defaultDesignJson = "defaultDesignJson",
    editableFieldsJson = "editableFieldsJson",
    constraintsJson = "constraintsJson",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(ReviewCardTemplateScalarFieldEnum, { name: 'ReviewCardTemplateScalarFieldEnum', description: undefined })

import { registerEnumType } from '@nestjs/graphql';

export enum DefinedBrandingSectionScalarFieldEnum {
    id = "id",
    brandingProjectId = "brandingProjectId",
    type = "type",
    title = "title",
    body = "body",
    contentJson = "contentJson",
    order = "order",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(DefinedBrandingSectionScalarFieldEnum, { name: 'DefinedBrandingSectionScalarFieldEnum', description: undefined })

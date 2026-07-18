import { registerEnumType } from '@nestjs/graphql';

export enum DefinedAcademyPartnerScalarFieldEnum {
    id = "id",
    academyId = "academyId",
    categoryId = "categoryId",
    name = "name",
    slug = "slug",
    description = "description",
    websiteUrl = "websiteUrl",
    contactUrl = "contactUrl",
    logoUrl = "logoUrl",
    location = "location",
    status = "status",
    featured = "featured",
    sortOrder = "sortOrder",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(DefinedAcademyPartnerScalarFieldEnum, { name: 'DefinedAcademyPartnerScalarFieldEnum', description: undefined })

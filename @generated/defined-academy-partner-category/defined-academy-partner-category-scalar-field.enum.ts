import { registerEnumType } from '@nestjs/graphql';

export enum DefinedAcademyPartnerCategoryScalarFieldEnum {
    id = "id",
    academyId = "academyId",
    name = "name",
    slug = "slug",
    description = "description",
    sortOrder = "sortOrder",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(DefinedAcademyPartnerCategoryScalarFieldEnum, { name: 'DefinedAcademyPartnerCategoryScalarFieldEnum', description: undefined })

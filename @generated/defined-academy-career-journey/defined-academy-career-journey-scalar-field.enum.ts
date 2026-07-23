import { registerEnumType } from '@nestjs/graphql';

export enum DefinedAcademyCareerJourneyScalarFieldEnum {
    id = "id",
    academyId = "academyId",
    title = "title",
    slug = "slug",
    description = "description",
    status = "status",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(DefinedAcademyCareerJourneyScalarFieldEnum, { name: 'DefinedAcademyCareerJourneyScalarFieldEnum', description: undefined })

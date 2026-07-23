import { registerEnumType } from '@nestjs/graphql';

export enum DefinedAcademyUserCareerProfileScalarFieldEnum {
    id = "id",
    userId = "userId",
    academyId = "academyId",
    journeyId = "journeyId",
    currentStageId = "currentStageId",
    notes = "notes",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(DefinedAcademyUserCareerProfileScalarFieldEnum, { name: 'DefinedAcademyUserCareerProfileScalarFieldEnum', description: undefined })

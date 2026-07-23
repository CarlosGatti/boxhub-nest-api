import { registerEnumType } from '@nestjs/graphql';

export enum DefinedAcademyUserCareerStageCompletionScalarFieldEnum {
    id = "id",
    profileId = "profileId",
    stageId = "stageId",
    completedAt = "completedAt",
    notes = "notes"
}


registerEnumType(DefinedAcademyUserCareerStageCompletionScalarFieldEnum, { name: 'DefinedAcademyUserCareerStageCompletionScalarFieldEnum', description: undefined })

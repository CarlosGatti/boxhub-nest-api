import { registerEnumType } from '@nestjs/graphql';

export enum DefinedAcademyCareerStageContentType {
    COURSE = "COURSE",
    RESOURCE = "RESOURCE"
}


registerEnumType(DefinedAcademyCareerStageContentType, { name: 'DefinedAcademyCareerStageContentType', description: undefined })

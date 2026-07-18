import { registerEnumType } from '@nestjs/graphql';

export enum DefinedAcademyCourseVisibility {
    PUBLIC = "PUBLIC",
    AUTHENTICATED = "AUTHENTICATED",
    PRIVATE = "PRIVATE"
}


registerEnumType(DefinedAcademyCourseVisibility, { name: 'DefinedAcademyCourseVisibility', description: undefined })

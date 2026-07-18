import { registerEnumType } from '@nestjs/graphql';

export enum DefinedAcademyModuleScalarFieldEnum {
    id = "id",
    courseId = "courseId",
    title = "title",
    description = "description",
    sortOrder = "sortOrder",
    status = "status",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(DefinedAcademyModuleScalarFieldEnum, { name: 'DefinedAcademyModuleScalarFieldEnum', description: undefined })

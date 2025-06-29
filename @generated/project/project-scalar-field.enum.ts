import { registerEnumType } from '@nestjs/graphql';

export enum ProjectScalarFieldEnum {
    id = "id",
    name = "name",
    client = "client",
    location = "location",
    status = "status",
    startDate = "startDate",
    endDate = "endDate",
    responsibleId = "responsibleId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(ProjectScalarFieldEnum, { name: 'ProjectScalarFieldEnum', description: undefined })

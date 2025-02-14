import { registerEnumType } from '@nestjs/graphql';

export enum ProcessScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    pillarId = "pillarId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(ProcessScalarFieldEnum, { name: 'ProcessScalarFieldEnum', description: undefined })

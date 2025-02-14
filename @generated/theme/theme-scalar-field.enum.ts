import { registerEnumType } from '@nestjs/graphql';

export enum ThemeScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    processId = "processId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(ThemeScalarFieldEnum, { name: 'ThemeScalarFieldEnum', description: undefined })

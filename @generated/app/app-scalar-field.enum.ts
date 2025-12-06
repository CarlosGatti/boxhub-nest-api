import { registerEnumType } from '@nestjs/graphql';

export enum AppScalarFieldEnum {
    id = "id",
    code = "code",
    name = "name",
    description = "description",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(AppScalarFieldEnum, { name: 'AppScalarFieldEnum', description: undefined })

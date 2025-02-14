import { registerEnumType } from '@nestjs/graphql';

export enum FamilyScalarFieldEnum {
    id = "id",
    name = "name",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(FamilyScalarFieldEnum, { name: 'FamilyScalarFieldEnum', description: undefined })

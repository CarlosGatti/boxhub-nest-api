import { registerEnumType } from '@nestjs/graphql';

export enum PillarScalarFieldEnum {
    id = "id",
    name = "name",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(PillarScalarFieldEnum, { name: 'PillarScalarFieldEnum', description: undefined })

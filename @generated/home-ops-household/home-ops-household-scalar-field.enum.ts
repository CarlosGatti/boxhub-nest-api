import { registerEnumType } from '@nestjs/graphql';

export enum HomeOpsHouseholdScalarFieldEnum {
    id = "id",
    name = "name",
    ownerId = "ownerId",
    appId = "appId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(HomeOpsHouseholdScalarFieldEnum, { name: 'HomeOpsHouseholdScalarFieldEnum', description: undefined })

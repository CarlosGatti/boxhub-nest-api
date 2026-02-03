import { registerEnumType } from '@nestjs/graphql';

export enum HomeOpsHouseholdMemberScalarFieldEnum {
    id = "id",
    householdId = "householdId",
    userId = "userId",
    role = "role",
    joinedAt = "joinedAt",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(HomeOpsHouseholdMemberScalarFieldEnum, { name: 'HomeOpsHouseholdMemberScalarFieldEnum', description: undefined })

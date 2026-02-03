import { registerEnumType } from '@nestjs/graphql';

export enum HomeOpsWeeklyPlanScalarFieldEnum {
    id = "id",
    householdId = "householdId",
    weekStartDate = "weekStartDate",
    status = "status",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(HomeOpsWeeklyPlanScalarFieldEnum, { name: 'HomeOpsWeeklyPlanScalarFieldEnum', description: undefined })

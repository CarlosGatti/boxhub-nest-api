import { registerEnumType } from '@nestjs/graphql';

export enum HomeOpsWorkloadLedgerScalarFieldEnum {
    id = "id",
    householdId = "householdId",
    userId = "userId",
    weekStart = "weekStart",
    pointsCompleted = "pointsCompleted",
    minutesCompleted = "minutesCompleted",
    tasksCompleted = "tasksCompleted",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(HomeOpsWorkloadLedgerScalarFieldEnum, { name: 'HomeOpsWorkloadLedgerScalarFieldEnum', description: undefined })

import { registerEnumType } from '@nestjs/graphql';

export enum HomeOpsWeeklyPlanStatus {
    PLANNED = "PLANNED",
    ACTIVE = "ACTIVE",
    ARCHIVED = "ARCHIVED"
}


registerEnumType(HomeOpsWeeklyPlanStatus, { name: 'HomeOpsWeeklyPlanStatus', description: undefined })

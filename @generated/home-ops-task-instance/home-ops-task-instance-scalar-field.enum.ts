import { registerEnumType } from '@nestjs/graphql';

export enum HomeOpsTaskInstanceScalarFieldEnum {
    id = "id",
    householdId = "householdId",
    templateId = "templateId",
    weeklyPlanId = "weeklyPlanId",
    sourceKey = "sourceKey",
    title = "title",
    description = "description",
    category = "category",
    points = "points",
    effortWeight = "effortWeight",
    estimatedMinutes = "estimatedMinutes",
    dueDate = "dueDate",
    slotLabel = "slotLabel",
    windowStart = "windowStart",
    windowEnd = "windowEnd",
    assigneeId = "assigneeId",
    status = "status",
    completedAt = "completedAt",
    completedById = "completedById",
    skippedAt = "skippedAt",
    skipReason = "skipReason",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(HomeOpsTaskInstanceScalarFieldEnum, { name: 'HomeOpsTaskInstanceScalarFieldEnum', description: undefined })

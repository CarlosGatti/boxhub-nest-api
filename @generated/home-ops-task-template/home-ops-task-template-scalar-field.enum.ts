import { registerEnumType } from '@nestjs/graphql';

export enum HomeOpsTaskTemplateScalarFieldEnum {
    id = "id",
    householdId = "householdId",
    title = "title",
    description = "description",
    category = "category",
    points = "points",
    effortWeight = "effortWeight",
    estimatedMinutes = "estimatedMinutes",
    frequency = "frequency",
    occurrences = "occurrences",
    interval = "interval",
    daysOfWeek = "daysOfWeek",
    dayOfMonth = "dayOfMonth",
    timezone = "timezone",
    assignmentMode = "assignmentMode",
    fixedAssigneeId = "fixedAssigneeId",
    isActive = "isActive",
    createdById = "createdById",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(HomeOpsTaskTemplateScalarFieldEnum, { name: 'HomeOpsTaskTemplateScalarFieldEnum', description: undefined })

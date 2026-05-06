import { registerEnumType } from '@nestjs/graphql';

export enum PomodoroSessionScalarFieldEnum {
    id = "id",
    userId = "userId",
    taskId = "taskId",
    projectId = "projectId",
    mode = "mode",
    status = "status",
    durationMinutes = "durationMinutes",
    startedAt = "startedAt",
    pausedAt = "pausedAt",
    resumedAt = "resumedAt",
    completedAt = "completedAt",
    cancelledAt = "cancelledAt",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(PomodoroSessionScalarFieldEnum, { name: 'PomodoroSessionScalarFieldEnum', description: undefined })

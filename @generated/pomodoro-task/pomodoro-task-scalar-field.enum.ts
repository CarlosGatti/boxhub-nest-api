import { registerEnumType } from '@nestjs/graphql';

export enum PomodoroTaskScalarFieldEnum {
    id = "id",
    userId = "userId",
    title = "title",
    description = "description",
    status = "status",
    projectId = "projectId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(PomodoroTaskScalarFieldEnum, { name: 'PomodoroTaskScalarFieldEnum', description: undefined })

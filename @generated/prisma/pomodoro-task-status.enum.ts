import { registerEnumType } from '@nestjs/graphql';

export enum PomodoroTaskStatus {
    TODO = "TODO",
    DOING = "DOING",
    DONE = "DONE",
    ARCHIVED = "ARCHIVED"
}


registerEnumType(PomodoroTaskStatus, { name: 'PomodoroTaskStatus', description: undefined })

import { registerEnumType } from '@nestjs/graphql';

export enum PomodoroSessionStatus {
    RUNNING = "RUNNING",
    PAUSED = "PAUSED",
    COMPLETED = "COMPLETED",
    CANCELLED = "CANCELLED"
}


registerEnumType(PomodoroSessionStatus, { name: 'PomodoroSessionStatus', description: undefined })

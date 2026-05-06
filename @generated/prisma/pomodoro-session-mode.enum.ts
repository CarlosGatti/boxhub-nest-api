import { registerEnumType } from '@nestjs/graphql';

export enum PomodoroSessionMode {
    FOCUS = "FOCUS",
    SHORT_BREAK = "SHORT_BREAK",
    LONG_BREAK = "LONG_BREAK"
}


registerEnumType(PomodoroSessionMode, { name: 'PomodoroSessionMode', description: undefined })

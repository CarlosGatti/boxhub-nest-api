import { registerEnumType } from '@nestjs/graphql';

export enum PomodoroUserSettingsScalarFieldEnum {
    userId = "userId",
    focusMinutes = "focusMinutes",
    shortBreakMinutes = "shortBreakMinutes",
    longBreakMinutes = "longBreakMinutes",
    longBreakEvery = "longBreakEvery",
    autoStartBreaks = "autoStartBreaks",
    autoStartFocus = "autoStartFocus",
    timezone = "timezone",
    updatedAt = "updatedAt"
}


registerEnumType(PomodoroUserSettingsScalarFieldEnum, { name: 'PomodoroUserSettingsScalarFieldEnum', description: undefined })

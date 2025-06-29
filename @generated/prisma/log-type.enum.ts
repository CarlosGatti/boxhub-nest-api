import { registerEnumType } from '@nestjs/graphql';

export enum LogType {
    OBSERVATION = "OBSERVATION",
    ISSUE = "ISSUE",
    GOOD_PRACTICE = "GOOD_PRACTICE",
    MATERIAL_RECEIPT = "MATERIAL_RECEIPT",
    DAILY_CHECKIN = "DAILY_CHECKIN",
    OTHER = "OTHER"
}


registerEnumType(LogType, { name: 'LogType', description: undefined })

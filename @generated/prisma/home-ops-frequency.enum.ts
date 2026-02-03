import { registerEnumType } from '@nestjs/graphql';

export enum HomeOpsFrequency {
    ONCE = "ONCE",
    DAILY = "DAILY",
    WEEKLY = "WEEKLY",
    BIWEEKLY = "BIWEEKLY",
    MONTHLY = "MONTHLY",
    CUSTOM = "CUSTOM"
}


registerEnumType(HomeOpsFrequency, { name: 'HomeOpsFrequency', description: undefined })

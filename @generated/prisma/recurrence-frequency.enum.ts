import { registerEnumType } from '@nestjs/graphql';

export enum RecurrenceFrequency {
    DAILY = "DAILY",
    WEEKLY = "WEEKLY",
    MONTHLY = "MONTHLY",
    QUARTERLY = "QUARTERLY",
    YEARLY = "YEARLY"
}


registerEnumType(RecurrenceFrequency, { name: 'RecurrenceFrequency', description: undefined })

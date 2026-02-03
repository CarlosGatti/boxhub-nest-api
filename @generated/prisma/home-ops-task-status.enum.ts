import { registerEnumType } from '@nestjs/graphql';

export enum HomeOpsTaskStatus {
    OPEN = "OPEN",
    DONE = "DONE",
    SKIPPED = "SKIPPED",
    CARRIED = "CARRIED"
}


registerEnumType(HomeOpsTaskStatus, { name: 'HomeOpsTaskStatus', description: undefined })

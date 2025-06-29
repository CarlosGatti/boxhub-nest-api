import { registerEnumType } from '@nestjs/graphql';

export enum ProjectStatus {
    PLANNING = "PLANNING",
    EXECUTING = "EXECUTING",
    FINISHED = "FINISHED",
    ON_HOLD = "ON_HOLD",
    CANCELED = "CANCELED"
}


registerEnumType(ProjectStatus, { name: 'ProjectStatus', description: undefined })

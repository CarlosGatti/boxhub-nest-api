import { registerEnumType } from '@nestjs/graphql';

export enum BucketGoalStatus {
    IDEA = "IDEA",
    PLANNED = "PLANNED",
    IN_PROGRESS = "IN_PROGRESS",
    DONE = "DONE",
    DROPPED = "DROPPED"
}


registerEnumType(BucketGoalStatus, { name: 'BucketGoalStatus', description: undefined })

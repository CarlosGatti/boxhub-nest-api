import { registerEnumType } from '@nestjs/graphql';

export enum BucketGoalType {
    GENERAL = "GENERAL",
    TRAVEL = "TRAVEL",
    EVENT = "EVENT",
    PLACE_COLLECTION = "PLACE_COLLECTION",
    ACHIEVEMENT = "ACHIEVEMENT"
}


registerEnumType(BucketGoalType, { name: 'BucketGoalType', description: undefined })

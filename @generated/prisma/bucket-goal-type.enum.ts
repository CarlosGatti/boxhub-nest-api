import { registerEnumType } from '@nestjs/graphql';

export enum BucketGoalType {
    GENERAL = "GENERAL",
    TRAVEL = "TRAVEL",
    EVENT = "EVENT",
    PLACE_COLLECTION = "PLACE_COLLECTION",
    ACHIEVEMENT = "ACHIEVEMENT",
    GAME = "GAME",
    MOVIE = "MOVIE",
    TV_SHOW = "TV_SHOW",
    BOOK = "BOOK"
}


registerEnumType(BucketGoalType, { name: 'BucketGoalType', description: undefined })

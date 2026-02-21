import { registerEnumType } from '@nestjs/graphql';

export enum BucketShareType {
    GOAL = "GOAL",
    TYPE = "TYPE",
    CUSTOM = "CUSTOM"
}


registerEnumType(BucketShareType, { name: 'BucketShareType', description: undefined })

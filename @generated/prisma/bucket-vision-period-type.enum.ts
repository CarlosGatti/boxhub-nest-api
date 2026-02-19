import { registerEnumType } from '@nestjs/graphql';

export enum BucketVisionPeriodType {
    YEAR = "YEAR",
    QUARTER = "QUARTER",
    CUSTOM = "CUSTOM"
}


registerEnumType(BucketVisionPeriodType, { name: 'BucketVisionPeriodType', description: undefined })

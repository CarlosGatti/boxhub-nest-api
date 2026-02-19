import { registerEnumType } from '@nestjs/graphql';

export enum BucketVisionLayoutMode {
    FORM = "FORM",
    CANVAS = "CANVAS"
}


registerEnumType(BucketVisionLayoutMode, { name: 'BucketVisionLayoutMode', description: undefined })

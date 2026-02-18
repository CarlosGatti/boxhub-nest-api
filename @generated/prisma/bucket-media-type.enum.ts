import { registerEnumType } from '@nestjs/graphql';

export enum BucketMediaType {
    IMAGE = "IMAGE",
    VIDEO = "VIDEO",
    LINK = "LINK"
}


registerEnumType(BucketMediaType, { name: 'BucketMediaType', description: undefined })

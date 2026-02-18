import { registerEnumType } from '@nestjs/graphql';

export enum BucketPinSource {
    MANUAL = "MANUAL",
    NOMINATIM = "NOMINATIM",
    GOOGLE = "GOOGLE"
}


registerEnumType(BucketPinSource, { name: 'BucketPinSource', description: undefined })

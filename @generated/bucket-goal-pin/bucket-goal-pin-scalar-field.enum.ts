import { registerEnumType } from '@nestjs/graphql';

export enum BucketGoalPinScalarFieldEnum {
    id = "id",
    goalId = "goalId",
    lat = "lat",
    lng = "lng",
    label = "label",
    source = "source",
    placeId = "placeId",
    address = "address",
    raw = "raw",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(BucketGoalPinScalarFieldEnum, { name: 'BucketGoalPinScalarFieldEnum', description: undefined })

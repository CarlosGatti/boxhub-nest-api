import { registerEnumType } from '@nestjs/graphql';

export enum BucketGoalScalarFieldEnum {
    id = "id",
    userId = "userId",
    title = "title",
    description = "description",
    type = "type",
    status = "status",
    priority = "priority",
    details = "details",
    detailsSchemaVersion = "detailsSchemaVersion",
    coverUrl = "coverUrl",
    tags = "tags",
    targetDate = "targetDate",
    completedAt = "completedAt",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(BucketGoalScalarFieldEnum, { name: 'BucketGoalScalarFieldEnum', description: undefined })

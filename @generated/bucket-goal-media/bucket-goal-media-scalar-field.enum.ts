import { registerEnumType } from '@nestjs/graphql';

export enum BucketGoalMediaScalarFieldEnum {
    id = "id",
    goalId = "goalId",
    logId = "logId",
    url = "url",
    type = "type",
    metadata = "metadata",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(BucketGoalMediaScalarFieldEnum, { name: 'BucketGoalMediaScalarFieldEnum', description: undefined })

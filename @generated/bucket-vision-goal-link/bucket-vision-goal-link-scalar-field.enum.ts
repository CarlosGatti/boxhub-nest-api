import { registerEnumType } from '@nestjs/graphql';

export enum BucketVisionGoalLinkScalarFieldEnum {
    id = "id",
    boardId = "boardId",
    goalId = "goalId",
    label = "label",
    createdAt = "createdAt"
}


registerEnumType(BucketVisionGoalLinkScalarFieldEnum, { name: 'BucketVisionGoalLinkScalarFieldEnum', description: undefined })

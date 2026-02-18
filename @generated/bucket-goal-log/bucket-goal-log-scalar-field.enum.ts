import { registerEnumType } from '@nestjs/graphql';

export enum BucketGoalLogScalarFieldEnum {
    id = "id",
    goalId = "goalId",
    note = "note",
    happenedAt = "happenedAt",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(BucketGoalLogScalarFieldEnum, { name: 'BucketGoalLogScalarFieldEnum', description: undefined })

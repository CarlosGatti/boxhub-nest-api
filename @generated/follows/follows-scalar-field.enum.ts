import { registerEnumType } from '@nestjs/graphql';

export enum FollowsScalarFieldEnum {
    id = "id",
    followerId = "followerId",
    followingId = "followingId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(FollowsScalarFieldEnum, { name: 'FollowsScalarFieldEnum', description: undefined })

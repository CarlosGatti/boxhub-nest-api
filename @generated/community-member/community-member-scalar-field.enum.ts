import { registerEnumType } from '@nestjs/graphql';

export enum CommunityMemberScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    communityId = "communityId",
    userId = "userId",
    status = "status",
    joinedAt = "joinedAt",
    leftAt = "leftAt",
    role = "role"
}


registerEnumType(CommunityMemberScalarFieldEnum, { name: 'CommunityMemberScalarFieldEnum', description: undefined })

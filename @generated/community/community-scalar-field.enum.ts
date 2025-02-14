import { registerEnumType } from '@nestjs/graphql';

export enum CommunityScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    banner = "banner",
    profilePicture = "profilePicture",
    visibility = "visibility",
    published = "published",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    ownerId = "ownerId",
    communityPlanId = "communityPlanId",
    postEnabledRole = "postEnabledRole",
    inviteEnabledRole = "inviteEnabledRole",
    parentCommunityId = "parentCommunityId"
}


registerEnumType(CommunityScalarFieldEnum, { name: 'CommunityScalarFieldEnum', description: undefined })

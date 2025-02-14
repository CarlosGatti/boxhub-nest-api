import { registerEnumType } from '@nestjs/graphql';

export enum CommunityMemberRole {
    OWNER = "OWNER",
    MEMBER = "MEMBER",
    ADMIN = "ADMIN"
}


registerEnumType(CommunityMemberRole, { name: 'CommunityMemberRole', description: undefined })

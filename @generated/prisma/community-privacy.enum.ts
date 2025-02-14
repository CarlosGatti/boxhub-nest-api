import { registerEnumType } from '@nestjs/graphql';

export enum CommunityPrivacy {
    OWNER = "OWNER",
    MEMBER = "MEMBER",
    ADMIN = "ADMIN",
    ALL = "ALL"
}


registerEnumType(CommunityPrivacy, { name: 'CommunityPrivacy', description: undefined })

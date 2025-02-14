import { registerEnumType } from '@nestjs/graphql';

export enum EventMemberRole {
    OWNER = "OWNER",
    MEMBER = "MEMBER",
    ADMIN = "ADMIN"
}


registerEnumType(EventMemberRole, { name: 'EventMemberRole', description: undefined })

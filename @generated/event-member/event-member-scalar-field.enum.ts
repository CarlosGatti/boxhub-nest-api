import { registerEnumType } from '@nestjs/graphql';

export enum EventMemberScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    eventId = "eventId",
    userId = "userId",
    status = "status",
    joinedAt = "joinedAt",
    leftAt = "leftAt",
    role = "role"
}


registerEnumType(EventMemberScalarFieldEnum, { name: 'EventMemberScalarFieldEnum', description: undefined })

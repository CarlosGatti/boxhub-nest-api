import { registerEnumType } from '@nestjs/graphql';

export enum EventOnlineDetailScalarFieldEnum {
    id = "id",
    platform = "platform",
    link = "link",
    joinCode = "joinCode",
    joinDetails = "joinDetails",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(EventOnlineDetailScalarFieldEnum, { name: 'EventOnlineDetailScalarFieldEnum', description: undefined })

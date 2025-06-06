import { registerEnumType } from '@nestjs/graphql';

export enum LogScalarFieldEnum {
    id = "id",
    action = "action",
    userId = "userId",
    details = "details",
    route = "route",
    metadata = "metadata",
    ipAddress = "ipAddress",
    createdAt = "createdAt"
}


registerEnumType(LogScalarFieldEnum, { name: 'LogScalarFieldEnum', description: undefined })

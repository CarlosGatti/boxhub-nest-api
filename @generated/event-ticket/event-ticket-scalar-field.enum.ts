import { registerEnumType } from '@nestjs/graphql';

export enum EventTicketScalarFieldEnum {
    id = "id",
    beeped = "beeped",
    expire = "expire",
    userEmail = "userEmail",
    eventId = "eventId",
    beepedTime = "beepedTime",
    valid = "valid"
}


registerEnumType(EventTicketScalarFieldEnum, { name: 'EventTicketScalarFieldEnum', description: undefined })

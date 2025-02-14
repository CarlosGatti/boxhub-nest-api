import { registerEnumType } from '@nestjs/graphql';

export enum EventAddressScalarFieldEnum {
    id = "id",
    address = "address",
    city = "city",
    zipCode = "zipCode",
    country = "country",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(EventAddressScalarFieldEnum, { name: 'EventAddressScalarFieldEnum', description: undefined })

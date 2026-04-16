import { registerEnumType } from '@nestjs/graphql';

export enum DefinedClientScalarFieldEnum {
    id = "id",
    type = "type",
    companyName = "companyName",
    legalName = "legalName",
    contactName = "contactName",
    email = "email",
    phone = "phone",
    website = "website",
    instagram = "instagram",
    facebook = "facebook",
    addressLine1 = "addressLine1",
    addressLine2 = "addressLine2",
    city = "city",
    state = "state",
    postalCode = "postalCode",
    country = "country",
    businessType = "businessType",
    serviceArea = "serviceArea",
    yearsInBusiness = "yearsInBusiness",
    notes = "notes",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(DefinedClientScalarFieldEnum, { name: 'DefinedClientScalarFieldEnum', description: undefined })

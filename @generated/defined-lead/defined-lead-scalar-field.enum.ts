import { registerEnumType } from '@nestjs/graphql';

export enum DefinedLeadScalarFieldEnum {
    id = "id",
    fullName = "fullName",
    email = "email",
    phone = "phone",
    companyName = "companyName",
    businessType = "businessType",
    city = "city",
    state = "state",
    selectedPackage = "selectedPackage",
    serviceInterest = "serviceInterest",
    message = "message",
    landingSlug = "landingSlug",
    referrer = "referrer",
    utmSource = "utmSource",
    utmMedium = "utmMedium",
    utmCampaign = "utmCampaign",
    utmContent = "utmContent",
    utmTerm = "utmTerm",
    gclid = "gclid",
    fbclid = "fbclid",
    consent = "consent",
    status = "status",
    notificationStatus = "notificationStatus",
    crmSyncStatus = "crmSyncStatus",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(DefinedLeadScalarFieldEnum, { name: 'DefinedLeadScalarFieldEnum', description: undefined })

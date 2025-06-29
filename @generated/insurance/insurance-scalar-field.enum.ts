import { registerEnumType } from '@nestjs/graphql';

export enum InsuranceScalarFieldEnum {
    id = "id",
    subcontractorId = "subcontractorId",
    company = "company",
    expiration = "expiration",
    documentUrl = "documentUrl",
    createdAt = "createdAt"
}


registerEnumType(InsuranceScalarFieldEnum, { name: 'InsuranceScalarFieldEnum', description: undefined })

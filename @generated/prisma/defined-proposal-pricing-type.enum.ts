import { registerEnumType } from '@nestjs/graphql';

export enum DefinedProposalPricingType {
    ONE_TIME = "ONE_TIME",
    MONTHLY = "MONTHLY",
    CUSTOM = "CUSTOM"
}


registerEnumType(DefinedProposalPricingType, { name: 'DefinedProposalPricingType', description: undefined })

import { registerEnumType } from '@nestjs/graphql';

export enum DefinedProposalPricingOptionScalarFieldEnum {
    id = "id",
    proposalId = "proposalId",
    title = "title",
    description = "description",
    type = "type",
    amount = "amount",
    currency = "currency",
    billingNote = "billingNote",
    features = "features",
    isRecommended = "isRecommended",
    order = "order",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(DefinedProposalPricingOptionScalarFieldEnum, { name: 'DefinedProposalPricingOptionScalarFieldEnum', description: undefined })

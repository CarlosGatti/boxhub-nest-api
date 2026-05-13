import { registerEnumType } from '@nestjs/graphql';

export enum DefinedProposalSectionScalarFieldEnum {
    id = "id",
    proposalId = "proposalId",
    type = "type",
    title = "title",
    body = "body",
    contentJson = "contentJson",
    order = "order",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(DefinedProposalSectionScalarFieldEnum, { name: 'DefinedProposalSectionScalarFieldEnum', description: undefined })

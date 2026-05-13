import { registerEnumType } from '@nestjs/graphql';

export enum DefinedProposalSectionType {
    TEXT = "TEXT",
    OBJECTIVES = "OBJECTIVES",
    DELIVERABLES = "DELIVERABLES",
    PRICING = "PRICING",
    TIMELINE = "TIMELINE",
    TERMS = "TERMS",
    CUSTOM = "CUSTOM"
}


registerEnumType(DefinedProposalSectionType, { name: 'DefinedProposalSectionType', description: undefined })

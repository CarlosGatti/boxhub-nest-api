import { registerEnumType } from '@nestjs/graphql';

export enum PermitKind {
    BUILDING_PERMIT = "BUILDING_PERMIT",
    ELECTRICAL = "ELECTRICAL",
    PLUMBING = "PLUMBING",
    INSPECTION_REPORT = "INSPECTION_REPORT",
    FRAMING = "FRAMING",
    ROOFING = "ROOFING",
    HVAC = "HVAC",
    CONCRETE = "CONCRETE",
    FLOORING = "FLOORING",
    OTHER = "OTHER"
}


registerEnumType(PermitKind, { name: 'PermitKind', description: undefined })

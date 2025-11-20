import { PermitKind } from '../prisma/permit-kind.enum';
import { PermitStatus } from '../prisma/permit-status.enum';
export declare class PermitInspectionCreateManyResponsibleInput {
    id?: number;
    projectId: number;
    number: string;
    kind: keyof typeof PermitKind;
    status?: keyof typeof PermitStatus;
    requestedAt?: Date | string;
    approvedAt?: Date | string;
    fileUrl?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}

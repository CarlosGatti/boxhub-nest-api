import { PermitKind } from '../prisma/permit-kind.enum';
import { PermitStatus } from '../prisma/permit-status.enum';
export declare class PermitInspectionCreateManyProjectInput {
    id?: number;
    number: string;
    kind: keyof typeof PermitKind;
    status?: keyof typeof PermitStatus;
    requestedAt?: Date | string;
    approvedAt?: Date | string;
    fileUrl?: string;
    responsibleId?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}

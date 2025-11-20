import { PermitKind } from '../prisma/permit-kind.enum';
import { PermitStatus } from '../prisma/permit-status.enum';
import { User } from '../user/user.model';
import { Project } from '../project/project.model';
export declare class PermitInspection {
    id: number;
    projectId: number;
    number: string;
    kind: keyof typeof PermitKind;
    status: keyof typeof PermitStatus;
    requestedAt: Date | null;
    approvedAt: Date | null;
    fileUrl: string | null;
    responsibleId: number | null;
    createdAt: Date;
    updatedAt: Date;
    responsible?: User | null;
    project?: Project;
}

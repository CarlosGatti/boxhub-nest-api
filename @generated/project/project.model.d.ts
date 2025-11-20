import { ProjectStatus } from '../prisma/project-status.enum';
import { User } from '../user/user.model';
import { ConstructionLog } from '../construction-log/construction-log.model';
import { ProjectDocument } from '../project-document/project-document.model';
import { MaterialEntry } from '../material-entry/material-entry.model';
import { PermitInspection } from '../permit-inspection/permit-inspection.model';
import { ProjectPhoto } from '../project-photo/project-photo.model';
import { ProjectCount } from './project-count.output';
export declare class Project {
    id: number;
    name: string;
    client: string;
    location: string;
    status: keyof typeof ProjectStatus;
    startDate: Date;
    endDate: Date | null;
    responsibleId: number;
    createdAt: Date;
    updatedAt: Date;
    responsible?: User;
    logs?: Array<ConstructionLog>;
    documents?: Array<ProjectDocument>;
    materials?: Array<MaterialEntry>;
    permits?: Array<PermitInspection>;
    photos?: Array<ProjectPhoto>;
    _count?: ProjectCount;
}

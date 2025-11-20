import { ProjectStatus } from '../prisma/project-status.enum';
export declare class ProjectCreateManyResponsibleInput {
    id?: number;
    name: string;
    client: string;
    location: string;
    status?: keyof typeof ProjectStatus;
    startDate: Date | string;
    endDate?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}

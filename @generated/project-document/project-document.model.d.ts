import { DocumentType } from '../prisma/document-type.enum';
import { Project } from '../project/project.model';
export declare class ProjectDocument {
    id: number;
    projectId: number;
    name: string;
    fileUrl: string;
    type: keyof typeof DocumentType;
    createdAt: Date;
    project?: Project;
}

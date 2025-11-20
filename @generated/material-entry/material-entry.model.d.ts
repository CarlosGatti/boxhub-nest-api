import { User } from '../user/user.model';
import { Project } from '../project/project.model';
export declare class MaterialEntry {
    id: number;
    projectId: number;
    name: string;
    supplier: string;
    quantity: number;
    receivedById: number | null;
    receivedAt: Date;
    note: string | null;
    imageUrls: any | null;
    createdAt: Date;
    receivedBy?: User | null;
    project?: Project;
}

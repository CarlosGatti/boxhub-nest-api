import { PhotoCategory } from '../prisma/photo-category.enum';
import { Project } from '../project/project.model';
export declare class ProjectPhoto {
    id: number;
    projectId: number;
    caption: string | null;
    category: keyof typeof PhotoCategory;
    stage: string | null;
    imageUrl: string;
    createdAt: Date;
    project?: Project;
}

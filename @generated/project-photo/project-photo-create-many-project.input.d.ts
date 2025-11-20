import { PhotoCategory } from '../prisma/photo-category.enum';
export declare class ProjectPhotoCreateManyProjectInput {
    id?: number;
    caption?: string;
    category: keyof typeof PhotoCategory;
    stage?: string;
    imageUrl: string;
    createdAt?: Date | string;
}

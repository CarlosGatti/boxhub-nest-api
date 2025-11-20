import { PhotoCategory } from '../prisma/photo-category.enum';
export declare class ProjectPhotoCreateWithoutProjectInput {
    caption?: string;
    category: keyof typeof PhotoCategory;
    stage?: string;
    imageUrl: string;
    createdAt?: Date | string;
}

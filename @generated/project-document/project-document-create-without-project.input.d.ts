import { DocumentType } from '../prisma/document-type.enum';
export declare class ProjectDocumentCreateWithoutProjectInput {
    name: string;
    fileUrl: string;
    type: keyof typeof DocumentType;
    createdAt?: Date | string;
}

import { Prisma } from '@prisma/client';
import { ProjectDocumentWhereUniqueInput } from './project-document-where-unique.input';
import { ProjectDocumentCreateWithoutProjectInput } from './project-document-create-without-project.input';
export declare class ProjectDocumentCreateOrConnectWithoutProjectInput {
    where: Prisma.AtLeast<ProjectDocumentWhereUniqueInput, 'id'>;
    create: ProjectDocumentCreateWithoutProjectInput;
}

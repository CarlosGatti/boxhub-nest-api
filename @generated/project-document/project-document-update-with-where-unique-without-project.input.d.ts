import { Prisma } from '@prisma/client';
import { ProjectDocumentWhereUniqueInput } from './project-document-where-unique.input';
import { ProjectDocumentUpdateWithoutProjectInput } from './project-document-update-without-project.input';
export declare class ProjectDocumentUpdateWithWhereUniqueWithoutProjectInput {
    where: Prisma.AtLeast<ProjectDocumentWhereUniqueInput, 'id'>;
    data: ProjectDocumentUpdateWithoutProjectInput;
}

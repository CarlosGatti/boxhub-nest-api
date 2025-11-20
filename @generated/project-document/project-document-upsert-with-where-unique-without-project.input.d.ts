import { Prisma } from '@prisma/client';
import { ProjectDocumentWhereUniqueInput } from './project-document-where-unique.input';
import { ProjectDocumentUpdateWithoutProjectInput } from './project-document-update-without-project.input';
import { ProjectDocumentCreateWithoutProjectInput } from './project-document-create-without-project.input';
export declare class ProjectDocumentUpsertWithWhereUniqueWithoutProjectInput {
    where: Prisma.AtLeast<ProjectDocumentWhereUniqueInput, 'id'>;
    update: ProjectDocumentUpdateWithoutProjectInput;
    create: ProjectDocumentCreateWithoutProjectInput;
}

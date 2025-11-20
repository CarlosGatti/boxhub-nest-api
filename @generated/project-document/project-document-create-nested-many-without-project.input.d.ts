import { ProjectDocumentCreateWithoutProjectInput } from './project-document-create-without-project.input';
import { ProjectDocumentCreateOrConnectWithoutProjectInput } from './project-document-create-or-connect-without-project.input';
import { ProjectDocumentCreateManyProjectInputEnvelope } from './project-document-create-many-project-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProjectDocumentWhereUniqueInput } from './project-document-where-unique.input';
export declare class ProjectDocumentCreateNestedManyWithoutProjectInput {
    create?: Array<ProjectDocumentCreateWithoutProjectInput>;
    connectOrCreate?: Array<ProjectDocumentCreateOrConnectWithoutProjectInput>;
    createMany?: ProjectDocumentCreateManyProjectInputEnvelope;
    connect?: Array<Prisma.AtLeast<ProjectDocumentWhereUniqueInput, 'id'>>;
}

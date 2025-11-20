import { ProjectDocumentCreateWithoutProjectInput } from './project-document-create-without-project.input';
import { ProjectDocumentCreateOrConnectWithoutProjectInput } from './project-document-create-or-connect-without-project.input';
import { ProjectDocumentUpsertWithWhereUniqueWithoutProjectInput } from './project-document-upsert-with-where-unique-without-project.input';
import { ProjectDocumentCreateManyProjectInputEnvelope } from './project-document-create-many-project-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProjectDocumentWhereUniqueInput } from './project-document-where-unique.input';
import { ProjectDocumentUpdateWithWhereUniqueWithoutProjectInput } from './project-document-update-with-where-unique-without-project.input';
import { ProjectDocumentUpdateManyWithWhereWithoutProjectInput } from './project-document-update-many-with-where-without-project.input';
import { ProjectDocumentScalarWhereInput } from './project-document-scalar-where.input';
export declare class ProjectDocumentUpdateManyWithoutProjectNestedInput {
    create?: Array<ProjectDocumentCreateWithoutProjectInput>;
    connectOrCreate?: Array<ProjectDocumentCreateOrConnectWithoutProjectInput>;
    upsert?: Array<ProjectDocumentUpsertWithWhereUniqueWithoutProjectInput>;
    createMany?: ProjectDocumentCreateManyProjectInputEnvelope;
    set?: Array<Prisma.AtLeast<ProjectDocumentWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ProjectDocumentWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ProjectDocumentWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ProjectDocumentWhereUniqueInput, 'id'>>;
    update?: Array<ProjectDocumentUpdateWithWhereUniqueWithoutProjectInput>;
    updateMany?: Array<ProjectDocumentUpdateManyWithWhereWithoutProjectInput>;
    deleteMany?: Array<ProjectDocumentScalarWhereInput>;
}

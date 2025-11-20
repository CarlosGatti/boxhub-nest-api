import { ProjectPhotoCreateWithoutProjectInput } from './project-photo-create-without-project.input';
import { ProjectPhotoCreateOrConnectWithoutProjectInput } from './project-photo-create-or-connect-without-project.input';
import { ProjectPhotoCreateManyProjectInputEnvelope } from './project-photo-create-many-project-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProjectPhotoWhereUniqueInput } from './project-photo-where-unique.input';
export declare class ProjectPhotoCreateNestedManyWithoutProjectInput {
    create?: Array<ProjectPhotoCreateWithoutProjectInput>;
    connectOrCreate?: Array<ProjectPhotoCreateOrConnectWithoutProjectInput>;
    createMany?: ProjectPhotoCreateManyProjectInputEnvelope;
    connect?: Array<Prisma.AtLeast<ProjectPhotoWhereUniqueInput, 'id'>>;
}

import { ProjectPhotoCreateWithoutProjectInput } from './project-photo-create-without-project.input';
import { ProjectPhotoCreateOrConnectWithoutProjectInput } from './project-photo-create-or-connect-without-project.input';
import { ProjectPhotoUpsertWithWhereUniqueWithoutProjectInput } from './project-photo-upsert-with-where-unique-without-project.input';
import { ProjectPhotoCreateManyProjectInputEnvelope } from './project-photo-create-many-project-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProjectPhotoWhereUniqueInput } from './project-photo-where-unique.input';
import { ProjectPhotoUpdateWithWhereUniqueWithoutProjectInput } from './project-photo-update-with-where-unique-without-project.input';
import { ProjectPhotoUpdateManyWithWhereWithoutProjectInput } from './project-photo-update-many-with-where-without-project.input';
import { ProjectPhotoScalarWhereInput } from './project-photo-scalar-where.input';
export declare class ProjectPhotoUpdateManyWithoutProjectNestedInput {
    create?: Array<ProjectPhotoCreateWithoutProjectInput>;
    connectOrCreate?: Array<ProjectPhotoCreateOrConnectWithoutProjectInput>;
    upsert?: Array<ProjectPhotoUpsertWithWhereUniqueWithoutProjectInput>;
    createMany?: ProjectPhotoCreateManyProjectInputEnvelope;
    set?: Array<Prisma.AtLeast<ProjectPhotoWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ProjectPhotoWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ProjectPhotoWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ProjectPhotoWhereUniqueInput, 'id'>>;
    update?: Array<ProjectPhotoUpdateWithWhereUniqueWithoutProjectInput>;
    updateMany?: Array<ProjectPhotoUpdateManyWithWhereWithoutProjectInput>;
    deleteMany?: Array<ProjectPhotoScalarWhereInput>;
}

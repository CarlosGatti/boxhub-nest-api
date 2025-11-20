import { Prisma } from '@prisma/client';
import { ProjectPhotoWhereUniqueInput } from './project-photo-where-unique.input';
import { ProjectPhotoUpdateWithoutProjectInput } from './project-photo-update-without-project.input';
import { ProjectPhotoCreateWithoutProjectInput } from './project-photo-create-without-project.input';
export declare class ProjectPhotoUpsertWithWhereUniqueWithoutProjectInput {
    where: Prisma.AtLeast<ProjectPhotoWhereUniqueInput, 'id'>;
    update: ProjectPhotoUpdateWithoutProjectInput;
    create: ProjectPhotoCreateWithoutProjectInput;
}

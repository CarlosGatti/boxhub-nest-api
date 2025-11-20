import { Prisma } from '@prisma/client';
import { ProjectPhotoWhereUniqueInput } from './project-photo-where-unique.input';
import { ProjectPhotoUpdateWithoutProjectInput } from './project-photo-update-without-project.input';
export declare class ProjectPhotoUpdateWithWhereUniqueWithoutProjectInput {
    where: Prisma.AtLeast<ProjectPhotoWhereUniqueInput, 'id'>;
    data: ProjectPhotoUpdateWithoutProjectInput;
}

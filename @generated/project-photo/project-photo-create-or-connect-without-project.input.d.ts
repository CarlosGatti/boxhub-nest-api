import { Prisma } from '@prisma/client';
import { ProjectPhotoWhereUniqueInput } from './project-photo-where-unique.input';
import { ProjectPhotoCreateWithoutProjectInput } from './project-photo-create-without-project.input';
export declare class ProjectPhotoCreateOrConnectWithoutProjectInput {
    where: Prisma.AtLeast<ProjectPhotoWhereUniqueInput, 'id'>;
    create: ProjectPhotoCreateWithoutProjectInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectPhotoWhereUniqueInput } from './project-photo-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectPhotoUpdateWithoutProjectInput } from './project-photo-update-without-project.input';
import { ProjectPhotoCreateWithoutProjectInput } from './project-photo-create-without-project.input';

@InputType()
export class ProjectPhotoUpsertWithWhereUniqueWithoutProjectInput {

    @Field(() => ProjectPhotoWhereUniqueInput, {nullable:false})
    @Type(() => ProjectPhotoWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectPhotoWhereUniqueInput, 'id'>;

    @Field(() => ProjectPhotoUpdateWithoutProjectInput, {nullable:false})
    @Type(() => ProjectPhotoUpdateWithoutProjectInput)
    update!: ProjectPhotoUpdateWithoutProjectInput;

    @Field(() => ProjectPhotoCreateWithoutProjectInput, {nullable:false})
    @Type(() => ProjectPhotoCreateWithoutProjectInput)
    create!: ProjectPhotoCreateWithoutProjectInput;
}

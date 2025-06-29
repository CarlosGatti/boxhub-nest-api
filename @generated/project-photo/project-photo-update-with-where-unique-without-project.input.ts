import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectPhotoWhereUniqueInput } from './project-photo-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectPhotoUpdateWithoutProjectInput } from './project-photo-update-without-project.input';

@InputType()
export class ProjectPhotoUpdateWithWhereUniqueWithoutProjectInput {

    @Field(() => ProjectPhotoWhereUniqueInput, {nullable:false})
    @Type(() => ProjectPhotoWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectPhotoWhereUniqueInput, 'id'>;

    @Field(() => ProjectPhotoUpdateWithoutProjectInput, {nullable:false})
    @Type(() => ProjectPhotoUpdateWithoutProjectInput)
    data!: ProjectPhotoUpdateWithoutProjectInput;
}

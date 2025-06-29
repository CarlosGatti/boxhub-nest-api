import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectPhotoWhereUniqueInput } from './project-photo-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectPhotoCreateWithoutProjectInput } from './project-photo-create-without-project.input';

@InputType()
export class ProjectPhotoCreateOrConnectWithoutProjectInput {

    @Field(() => ProjectPhotoWhereUniqueInput, {nullable:false})
    @Type(() => ProjectPhotoWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectPhotoWhereUniqueInput, 'id'>;

    @Field(() => ProjectPhotoCreateWithoutProjectInput, {nullable:false})
    @Type(() => ProjectPhotoCreateWithoutProjectInput)
    create!: ProjectPhotoCreateWithoutProjectInput;
}

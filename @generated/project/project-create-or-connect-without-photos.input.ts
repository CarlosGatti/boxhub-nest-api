import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectCreateWithoutPhotosInput } from './project-create-without-photos.input';

@InputType()
export class ProjectCreateOrConnectWithoutPhotosInput {

    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>;

    @Field(() => ProjectCreateWithoutPhotosInput, {nullable:false})
    @Type(() => ProjectCreateWithoutPhotosInput)
    create!: ProjectCreateWithoutPhotosInput;
}

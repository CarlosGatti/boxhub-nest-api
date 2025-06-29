import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectPhotoWhereUniqueInput } from './project-photo-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectPhotoCreateInput } from './project-photo-create.input';
import { ProjectPhotoUpdateInput } from './project-photo-update.input';

@ArgsType()
export class UpsertOneProjectPhotoArgs {

    @Field(() => ProjectPhotoWhereUniqueInput, {nullable:false})
    @Type(() => ProjectPhotoWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectPhotoWhereUniqueInput, 'id'>;

    @Field(() => ProjectPhotoCreateInput, {nullable:false})
    @Type(() => ProjectPhotoCreateInput)
    create!: ProjectPhotoCreateInput;

    @Field(() => ProjectPhotoUpdateInput, {nullable:false})
    @Type(() => ProjectPhotoUpdateInput)
    update!: ProjectPhotoUpdateInput;
}

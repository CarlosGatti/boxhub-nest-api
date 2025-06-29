import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectPhotoUpdateInput } from './project-photo-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ProjectPhotoWhereUniqueInput } from './project-photo-where-unique.input';

@ArgsType()
export class UpdateOneProjectPhotoArgs {

    @Field(() => ProjectPhotoUpdateInput, {nullable:false})
    @Type(() => ProjectPhotoUpdateInput)
    data!: ProjectPhotoUpdateInput;

    @Field(() => ProjectPhotoWhereUniqueInput, {nullable:false})
    @Type(() => ProjectPhotoWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectPhotoWhereUniqueInput, 'id'>;
}

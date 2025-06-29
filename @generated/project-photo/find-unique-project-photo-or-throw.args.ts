import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectPhotoWhereUniqueInput } from './project-photo-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueProjectPhotoOrThrowArgs {

    @Field(() => ProjectPhotoWhereUniqueInput, {nullable:false})
    @Type(() => ProjectPhotoWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectPhotoWhereUniqueInput, 'id'>;
}

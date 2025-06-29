import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectPhotoWhereInput } from './project-photo-where.input';
import { Type } from 'class-transformer';
import { ProjectPhotoOrderByWithRelationInput } from './project-photo-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ProjectPhotoWhereUniqueInput } from './project-photo-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProjectPhotoScalarFieldEnum } from './project-photo-scalar-field.enum';

@ArgsType()
export class FindManyProjectPhotoArgs {

    @Field(() => ProjectPhotoWhereInput, {nullable:true})
    @Type(() => ProjectPhotoWhereInput)
    where?: ProjectPhotoWhereInput;

    @Field(() => [ProjectPhotoOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProjectPhotoOrderByWithRelationInput>;

    @Field(() => ProjectPhotoWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ProjectPhotoWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ProjectPhotoScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProjectPhotoScalarFieldEnum>;
}

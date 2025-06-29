import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ProjectPhotoWhereInput } from './project-photo-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumPhotoCategoryFilter } from '../prisma/enum-photo-category-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ProjectRelationFilter } from '../project/project-relation-filter.input';

@InputType()
export class ProjectPhotoWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [ProjectPhotoWhereInput], {nullable:true})
    AND?: Array<ProjectPhotoWhereInput>;

    @Field(() => [ProjectPhotoWhereInput], {nullable:true})
    OR?: Array<ProjectPhotoWhereInput>;

    @Field(() => [ProjectPhotoWhereInput], {nullable:true})
    NOT?: Array<ProjectPhotoWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    projectId?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    caption?: StringNullableFilter;

    @Field(() => EnumPhotoCategoryFilter, {nullable:true})
    category?: EnumPhotoCategoryFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    stage?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    imageUrl?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => ProjectRelationFilter, {nullable:true})
    project?: ProjectRelationFilter;
}

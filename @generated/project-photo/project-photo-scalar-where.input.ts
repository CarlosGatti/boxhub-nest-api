import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumPhotoCategoryFilter } from '../prisma/enum-photo-category-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ProjectPhotoScalarWhereInput {

    @Field(() => [ProjectPhotoScalarWhereInput], {nullable:true})
    AND?: Array<ProjectPhotoScalarWhereInput>;

    @Field(() => [ProjectPhotoScalarWhereInput], {nullable:true})
    OR?: Array<ProjectPhotoScalarWhereInput>;

    @Field(() => [ProjectPhotoScalarWhereInput], {nullable:true})
    NOT?: Array<ProjectPhotoScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

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
}

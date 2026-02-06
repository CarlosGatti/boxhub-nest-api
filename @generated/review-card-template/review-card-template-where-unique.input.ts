import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ReviewCardTemplateWhereInput } from './review-card-template-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ReviewCardProjectListRelationFilter } from '../review-card-project/review-card-project-list-relation-filter.input';

@InputType()
export class ReviewCardTemplateWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    key?: string;

    @Field(() => [ReviewCardTemplateWhereInput], {nullable:true})
    AND?: Array<ReviewCardTemplateWhereInput>;

    @Field(() => [ReviewCardTemplateWhereInput], {nullable:true})
    OR?: Array<ReviewCardTemplateWhereInput>;

    @Field(() => [ReviewCardTemplateWhereInput], {nullable:true})
    NOT?: Array<ReviewCardTemplateWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    category?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    aspect?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    schemaVersion?: IntFilter;

    @Field(() => BoolFilter, {nullable:true})
    isActive?: BoolFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    previewImageUrl?: StringNullableFilter;

    @Field(() => JsonFilter, {nullable:true})
    defaultDesignJson?: JsonFilter;

    @Field(() => JsonFilter, {nullable:true})
    editableFieldsJson?: JsonFilter;

    @Field(() => JsonFilter, {nullable:true})
    constraintsJson?: JsonFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => ReviewCardProjectListRelationFilter, {nullable:true})
    projects?: ReviewCardProjectListRelationFilter;
}

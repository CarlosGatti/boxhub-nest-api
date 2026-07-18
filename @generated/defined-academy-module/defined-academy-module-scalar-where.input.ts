import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumDefinedAcademyContentStatusFilter } from '../prisma/enum-defined-academy-content-status-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class DefinedAcademyModuleScalarWhereInput {

    @Field(() => [DefinedAcademyModuleScalarWhereInput], {nullable:true})
    AND?: Array<DefinedAcademyModuleScalarWhereInput>;

    @Field(() => [DefinedAcademyModuleScalarWhereInput], {nullable:true})
    OR?: Array<DefinedAcademyModuleScalarWhereInput>;

    @Field(() => [DefinedAcademyModuleScalarWhereInput], {nullable:true})
    NOT?: Array<DefinedAcademyModuleScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    courseId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    sortOrder?: IntFilter;

    @Field(() => EnumDefinedAcademyContentStatusFilter, {nullable:true})
    status?: EnumDefinedAcademyContentStatusFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}

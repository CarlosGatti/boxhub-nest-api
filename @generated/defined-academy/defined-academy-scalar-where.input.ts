import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumDefinedAcademyStatusFilter } from '../prisma/enum-defined-academy-status-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class DefinedAcademyScalarWhereInput {

    @Field(() => [DefinedAcademyScalarWhereInput], {nullable:true})
    AND?: Array<DefinedAcademyScalarWhereInput>;

    @Field(() => [DefinedAcademyScalarWhereInput], {nullable:true})
    OR?: Array<DefinedAcademyScalarWhereInput>;

    @Field(() => [DefinedAcademyScalarWhereInput], {nullable:true})
    NOT?: Array<DefinedAcademyScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    appId?: IntNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    slug?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => EnumDefinedAcademyStatusFilter, {nullable:true})
    status?: EnumDefinedAcademyStatusFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    logoUrl?: StringNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    settings?: JsonNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    publishedAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    archivedAt?: DateTimeNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}

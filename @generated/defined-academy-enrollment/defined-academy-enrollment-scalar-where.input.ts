import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumDefinedAcademyEnrollmentStatusFilter } from '../prisma/enum-defined-academy-enrollment-status-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class DefinedAcademyEnrollmentScalarWhereInput {

    @Field(() => [DefinedAcademyEnrollmentScalarWhereInput], {nullable:true})
    AND?: Array<DefinedAcademyEnrollmentScalarWhereInput>;

    @Field(() => [DefinedAcademyEnrollmentScalarWhereInput], {nullable:true})
    OR?: Array<DefinedAcademyEnrollmentScalarWhereInput>;

    @Field(() => [DefinedAcademyEnrollmentScalarWhereInput], {nullable:true})
    NOT?: Array<DefinedAcademyEnrollmentScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    courseId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => EnumDefinedAcademyEnrollmentStatusFilter, {nullable:true})
    status?: EnumDefinedAcademyEnrollmentStatusFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    enrolledAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    startedAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    completedAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    lastAccessedAt?: DateTimeNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}

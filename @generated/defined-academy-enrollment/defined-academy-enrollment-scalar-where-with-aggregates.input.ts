import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { EnumDefinedAcademyEnrollmentStatusWithAggregatesFilter } from '../prisma/enum-defined-academy-enrollment-status-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class DefinedAcademyEnrollmentScalarWhereWithAggregatesInput {

    @Field(() => [DefinedAcademyEnrollmentScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<DefinedAcademyEnrollmentScalarWhereWithAggregatesInput>;

    @Field(() => [DefinedAcademyEnrollmentScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<DefinedAcademyEnrollmentScalarWhereWithAggregatesInput>;

    @Field(() => [DefinedAcademyEnrollmentScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<DefinedAcademyEnrollmentScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    courseId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: IntWithAggregatesFilter;

    @Field(() => EnumDefinedAcademyEnrollmentStatusWithAggregatesFilter, {nullable:true})
    status?: EnumDefinedAcademyEnrollmentStatusWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    enrolledAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    startedAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    completedAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    lastAccessedAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}

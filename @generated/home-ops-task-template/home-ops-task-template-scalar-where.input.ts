import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { EnumHomeOpsFrequencyFilter } from '../prisma/enum-home-ops-frequency-filter.input';
import { EnumHomeOpsWeekdayNullableListFilter } from '../prisma/enum-home-ops-weekday-nullable-list-filter.input';
import { EnumHomeOpsAssignmentModeFilter } from '../prisma/enum-home-ops-assignment-mode-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class HomeOpsTaskTemplateScalarWhereInput {

    @Field(() => [HomeOpsTaskTemplateScalarWhereInput], {nullable:true})
    AND?: Array<HomeOpsTaskTemplateScalarWhereInput>;

    @Field(() => [HomeOpsTaskTemplateScalarWhereInput], {nullable:true})
    OR?: Array<HomeOpsTaskTemplateScalarWhereInput>;

    @Field(() => [HomeOpsTaskTemplateScalarWhereInput], {nullable:true})
    NOT?: Array<HomeOpsTaskTemplateScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    householdId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    category?: StringNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    points?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    effortWeight?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    estimatedMinutes?: IntNullableFilter;

    @Field(() => EnumHomeOpsFrequencyFilter, {nullable:true})
    frequency?: EnumHomeOpsFrequencyFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    occurrences?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    interval?: IntNullableFilter;

    @Field(() => EnumHomeOpsWeekdayNullableListFilter, {nullable:true})
    daysOfWeek?: EnumHomeOpsWeekdayNullableListFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    dayOfMonth?: IntNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    timezone?: StringFilter;

    @Field(() => EnumHomeOpsAssignmentModeFilter, {nullable:true})
    assignmentMode?: EnumHomeOpsAssignmentModeFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    fixedAssigneeId?: IntNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    isActive?: BoolFilter;

    @Field(() => IntFilter, {nullable:true})
    createdById?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}

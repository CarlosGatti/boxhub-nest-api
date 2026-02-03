import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { EnumHomeOpsFrequencyWithAggregatesFilter } from '../prisma/enum-home-ops-frequency-with-aggregates-filter.input';
import { EnumHomeOpsWeekdayNullableListFilter } from '../prisma/enum-home-ops-weekday-nullable-list-filter.input';
import { EnumHomeOpsAssignmentModeWithAggregatesFilter } from '../prisma/enum-home-ops-assignment-mode-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class HomeOpsTaskTemplateScalarWhereWithAggregatesInput {

    @Field(() => [HomeOpsTaskTemplateScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<HomeOpsTaskTemplateScalarWhereWithAggregatesInput>;

    @Field(() => [HomeOpsTaskTemplateScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<HomeOpsTaskTemplateScalarWhereWithAggregatesInput>;

    @Field(() => [HomeOpsTaskTemplateScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<HomeOpsTaskTemplateScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    householdId?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    category?: StringNullableWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    points?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    effortWeight?: IntWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    estimatedMinutes?: IntNullableWithAggregatesFilter;

    @Field(() => EnumHomeOpsFrequencyWithAggregatesFilter, {nullable:true})
    frequency?: EnumHomeOpsFrequencyWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    occurrences?: IntNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    interval?: IntNullableWithAggregatesFilter;

    @Field(() => EnumHomeOpsWeekdayNullableListFilter, {nullable:true})
    daysOfWeek?: EnumHomeOpsWeekdayNullableListFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    dayOfMonth?: IntNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    timezone?: StringWithAggregatesFilter;

    @Field(() => EnumHomeOpsAssignmentModeWithAggregatesFilter, {nullable:true})
    assignmentMode?: EnumHomeOpsAssignmentModeWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    fixedAssigneeId?: IntNullableWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    isActive?: BoolWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    createdById?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}

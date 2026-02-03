import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { EnumHouseholdRoleWithAggregatesFilter } from '../prisma/enum-household-role-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class HomeOpsHouseholdMemberScalarWhereWithAggregatesInput {

    @Field(() => [HomeOpsHouseholdMemberScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<HomeOpsHouseholdMemberScalarWhereWithAggregatesInput>;

    @Field(() => [HomeOpsHouseholdMemberScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<HomeOpsHouseholdMemberScalarWhereWithAggregatesInput>;

    @Field(() => [HomeOpsHouseholdMemberScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<HomeOpsHouseholdMemberScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    householdId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: IntWithAggregatesFilter;

    @Field(() => EnumHouseholdRoleWithAggregatesFilter, {nullable:true})
    role?: EnumHouseholdRoleWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    joinedAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}

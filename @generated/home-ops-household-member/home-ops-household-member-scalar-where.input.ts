import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumHouseholdRoleFilter } from '../prisma/enum-household-role-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class HomeOpsHouseholdMemberScalarWhereInput {

    @Field(() => [HomeOpsHouseholdMemberScalarWhereInput], {nullable:true})
    AND?: Array<HomeOpsHouseholdMemberScalarWhereInput>;

    @Field(() => [HomeOpsHouseholdMemberScalarWhereInput], {nullable:true})
    OR?: Array<HomeOpsHouseholdMemberScalarWhereInput>;

    @Field(() => [HomeOpsHouseholdMemberScalarWhereInput], {nullable:true})
    NOT?: Array<HomeOpsHouseholdMemberScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    householdId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => EnumHouseholdRoleFilter, {nullable:true})
    role?: EnumHouseholdRoleFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    joinedAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumHouseholdRoleFilter } from '../prisma/enum-household-role-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { HomeOpsHouseholdRelationFilter } from '../home-ops-household/home-ops-household-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { Type } from 'class-transformer';

@InputType()
export class HomeOpsHouseholdMemberWhereInput {

    @Field(() => [HomeOpsHouseholdMemberWhereInput], {nullable:true})
    AND?: Array<HomeOpsHouseholdMemberWhereInput>;

    @Field(() => [HomeOpsHouseholdMemberWhereInput], {nullable:true})
    OR?: Array<HomeOpsHouseholdMemberWhereInput>;

    @Field(() => [HomeOpsHouseholdMemberWhereInput], {nullable:true})
    NOT?: Array<HomeOpsHouseholdMemberWhereInput>;

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

    @Field(() => HomeOpsHouseholdRelationFilter, {nullable:true})
    household?: HomeOpsHouseholdRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    @Type(() => UserRelationFilter)
    user?: UserRelationFilter;
}

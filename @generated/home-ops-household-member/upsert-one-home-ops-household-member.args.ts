import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HomeOpsHouseholdMemberWhereUniqueInput } from './home-ops-household-member-where-unique.input';
import { Type } from 'class-transformer';
import { HomeOpsHouseholdMemberCreateInput } from './home-ops-household-member-create.input';
import { HomeOpsHouseholdMemberUpdateInput } from './home-ops-household-member-update.input';

@ArgsType()
export class UpsertOneHomeOpsHouseholdMemberArgs {

    @Field(() => HomeOpsHouseholdMemberWhereUniqueInput, {nullable:false})
    @Type(() => HomeOpsHouseholdMemberWhereUniqueInput)
    where!: Prisma.AtLeast<HomeOpsHouseholdMemberWhereUniqueInput, 'id' | 'householdId_userId'>;

    @Field(() => HomeOpsHouseholdMemberCreateInput, {nullable:false})
    @Type(() => HomeOpsHouseholdMemberCreateInput)
    create!: HomeOpsHouseholdMemberCreateInput;

    @Field(() => HomeOpsHouseholdMemberUpdateInput, {nullable:false})
    @Type(() => HomeOpsHouseholdMemberUpdateInput)
    update!: HomeOpsHouseholdMemberUpdateInput;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HomeOpsHouseholdMemberUpdateInput } from './home-ops-household-member-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { HomeOpsHouseholdMemberWhereUniqueInput } from './home-ops-household-member-where-unique.input';

@ArgsType()
export class UpdateOneHomeOpsHouseholdMemberArgs {

    @Field(() => HomeOpsHouseholdMemberUpdateInput, {nullable:false})
    @Type(() => HomeOpsHouseholdMemberUpdateInput)
    data!: HomeOpsHouseholdMemberUpdateInput;

    @Field(() => HomeOpsHouseholdMemberWhereUniqueInput, {nullable:false})
    @Type(() => HomeOpsHouseholdMemberWhereUniqueInput)
    where!: Prisma.AtLeast<HomeOpsHouseholdMemberWhereUniqueInput, 'id' | 'householdId_userId'>;
}

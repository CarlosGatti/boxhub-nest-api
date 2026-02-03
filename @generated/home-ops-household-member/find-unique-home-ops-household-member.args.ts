import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HomeOpsHouseholdMemberWhereUniqueInput } from './home-ops-household-member-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueHomeOpsHouseholdMemberArgs {

    @Field(() => HomeOpsHouseholdMemberWhereUniqueInput, {nullable:false})
    @Type(() => HomeOpsHouseholdMemberWhereUniqueInput)
    where!: Prisma.AtLeast<HomeOpsHouseholdMemberWhereUniqueInput, 'id' | 'householdId_userId'>;
}

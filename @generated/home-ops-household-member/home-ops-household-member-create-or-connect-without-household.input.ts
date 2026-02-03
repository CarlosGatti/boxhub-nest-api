import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HomeOpsHouseholdMemberWhereUniqueInput } from './home-ops-household-member-where-unique.input';
import { Type } from 'class-transformer';
import { HomeOpsHouseholdMemberCreateWithoutHouseholdInput } from './home-ops-household-member-create-without-household.input';

@InputType()
export class HomeOpsHouseholdMemberCreateOrConnectWithoutHouseholdInput {

    @Field(() => HomeOpsHouseholdMemberWhereUniqueInput, {nullable:false})
    @Type(() => HomeOpsHouseholdMemberWhereUniqueInput)
    where!: Prisma.AtLeast<HomeOpsHouseholdMemberWhereUniqueInput, 'id' | 'householdId_userId'>;

    @Field(() => HomeOpsHouseholdMemberCreateWithoutHouseholdInput, {nullable:false})
    @Type(() => HomeOpsHouseholdMemberCreateWithoutHouseholdInput)
    create!: HomeOpsHouseholdMemberCreateWithoutHouseholdInput;
}

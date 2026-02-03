import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HomeOpsHouseholdMemberWhereUniqueInput } from './home-ops-household-member-where-unique.input';
import { Type } from 'class-transformer';
import { HomeOpsHouseholdMemberUpdateWithoutHouseholdInput } from './home-ops-household-member-update-without-household.input';
import { HomeOpsHouseholdMemberCreateWithoutHouseholdInput } from './home-ops-household-member-create-without-household.input';

@InputType()
export class HomeOpsHouseholdMemberUpsertWithWhereUniqueWithoutHouseholdInput {

    @Field(() => HomeOpsHouseholdMemberWhereUniqueInput, {nullable:false})
    @Type(() => HomeOpsHouseholdMemberWhereUniqueInput)
    where!: Prisma.AtLeast<HomeOpsHouseholdMemberWhereUniqueInput, 'id' | 'householdId_userId'>;

    @Field(() => HomeOpsHouseholdMemberUpdateWithoutHouseholdInput, {nullable:false})
    @Type(() => HomeOpsHouseholdMemberUpdateWithoutHouseholdInput)
    update!: HomeOpsHouseholdMemberUpdateWithoutHouseholdInput;

    @Field(() => HomeOpsHouseholdMemberCreateWithoutHouseholdInput, {nullable:false})
    @Type(() => HomeOpsHouseholdMemberCreateWithoutHouseholdInput)
    create!: HomeOpsHouseholdMemberCreateWithoutHouseholdInput;
}

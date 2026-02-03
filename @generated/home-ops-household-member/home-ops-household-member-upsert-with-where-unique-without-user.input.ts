import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HomeOpsHouseholdMemberWhereUniqueInput } from './home-ops-household-member-where-unique.input';
import { Type } from 'class-transformer';
import { HomeOpsHouseholdMemberUpdateWithoutUserInput } from './home-ops-household-member-update-without-user.input';
import { HomeOpsHouseholdMemberCreateWithoutUserInput } from './home-ops-household-member-create-without-user.input';

@InputType()
export class HomeOpsHouseholdMemberUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => HomeOpsHouseholdMemberWhereUniqueInput, {nullable:false})
    @Type(() => HomeOpsHouseholdMemberWhereUniqueInput)
    where!: Prisma.AtLeast<HomeOpsHouseholdMemberWhereUniqueInput, 'id' | 'householdId_userId'>;

    @Field(() => HomeOpsHouseholdMemberUpdateWithoutUserInput, {nullable:false})
    @Type(() => HomeOpsHouseholdMemberUpdateWithoutUserInput)
    update!: HomeOpsHouseholdMemberUpdateWithoutUserInput;

    @Field(() => HomeOpsHouseholdMemberCreateWithoutUserInput, {nullable:false})
    @Type(() => HomeOpsHouseholdMemberCreateWithoutUserInput)
    create!: HomeOpsHouseholdMemberCreateWithoutUserInput;
}

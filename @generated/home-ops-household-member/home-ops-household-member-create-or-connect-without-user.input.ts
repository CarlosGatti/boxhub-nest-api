import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HomeOpsHouseholdMemberWhereUniqueInput } from './home-ops-household-member-where-unique.input';
import { Type } from 'class-transformer';
import { HomeOpsHouseholdMemberCreateWithoutUserInput } from './home-ops-household-member-create-without-user.input';

@InputType()
export class HomeOpsHouseholdMemberCreateOrConnectWithoutUserInput {

    @Field(() => HomeOpsHouseholdMemberWhereUniqueInput, {nullable:false})
    @Type(() => HomeOpsHouseholdMemberWhereUniqueInput)
    where!: Prisma.AtLeast<HomeOpsHouseholdMemberWhereUniqueInput, 'id' | 'householdId_userId'>;

    @Field(() => HomeOpsHouseholdMemberCreateWithoutUserInput, {nullable:false})
    @Type(() => HomeOpsHouseholdMemberCreateWithoutUserInput)
    create!: HomeOpsHouseholdMemberCreateWithoutUserInput;
}

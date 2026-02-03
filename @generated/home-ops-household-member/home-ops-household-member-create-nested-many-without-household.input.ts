import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsHouseholdMemberCreateWithoutHouseholdInput } from './home-ops-household-member-create-without-household.input';
import { Type } from 'class-transformer';
import { HomeOpsHouseholdMemberCreateOrConnectWithoutHouseholdInput } from './home-ops-household-member-create-or-connect-without-household.input';
import { HomeOpsHouseholdMemberCreateManyHouseholdInputEnvelope } from './home-ops-household-member-create-many-household-input-envelope.input';
import { Prisma } from '@prisma/client';
import { HomeOpsHouseholdMemberWhereUniqueInput } from './home-ops-household-member-where-unique.input';

@InputType()
export class HomeOpsHouseholdMemberCreateNestedManyWithoutHouseholdInput {

    @Field(() => [HomeOpsHouseholdMemberCreateWithoutHouseholdInput], {nullable:true})
    @Type(() => HomeOpsHouseholdMemberCreateWithoutHouseholdInput)
    create?: Array<HomeOpsHouseholdMemberCreateWithoutHouseholdInput>;

    @Field(() => [HomeOpsHouseholdMemberCreateOrConnectWithoutHouseholdInput], {nullable:true})
    @Type(() => HomeOpsHouseholdMemberCreateOrConnectWithoutHouseholdInput)
    connectOrCreate?: Array<HomeOpsHouseholdMemberCreateOrConnectWithoutHouseholdInput>;

    @Field(() => HomeOpsHouseholdMemberCreateManyHouseholdInputEnvelope, {nullable:true})
    @Type(() => HomeOpsHouseholdMemberCreateManyHouseholdInputEnvelope)
    createMany?: HomeOpsHouseholdMemberCreateManyHouseholdInputEnvelope;

    @Field(() => [HomeOpsHouseholdMemberWhereUniqueInput], {nullable:true})
    @Type(() => HomeOpsHouseholdMemberWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<HomeOpsHouseholdMemberWhereUniqueInput, 'id' | 'householdId_userId'>>;
}

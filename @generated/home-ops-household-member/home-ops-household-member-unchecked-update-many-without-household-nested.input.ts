import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsHouseholdMemberCreateWithoutHouseholdInput } from './home-ops-household-member-create-without-household.input';
import { Type } from 'class-transformer';
import { HomeOpsHouseholdMemberCreateOrConnectWithoutHouseholdInput } from './home-ops-household-member-create-or-connect-without-household.input';
import { HomeOpsHouseholdMemberUpsertWithWhereUniqueWithoutHouseholdInput } from './home-ops-household-member-upsert-with-where-unique-without-household.input';
import { HomeOpsHouseholdMemberCreateManyHouseholdInputEnvelope } from './home-ops-household-member-create-many-household-input-envelope.input';
import { Prisma } from '@prisma/client';
import { HomeOpsHouseholdMemberWhereUniqueInput } from './home-ops-household-member-where-unique.input';
import { HomeOpsHouseholdMemberUpdateWithWhereUniqueWithoutHouseholdInput } from './home-ops-household-member-update-with-where-unique-without-household.input';
import { HomeOpsHouseholdMemberUpdateManyWithWhereWithoutHouseholdInput } from './home-ops-household-member-update-many-with-where-without-household.input';
import { HomeOpsHouseholdMemberScalarWhereInput } from './home-ops-household-member-scalar-where.input';

@InputType()
export class HomeOpsHouseholdMemberUncheckedUpdateManyWithoutHouseholdNestedInput {

    @Field(() => [HomeOpsHouseholdMemberCreateWithoutHouseholdInput], {nullable:true})
    @Type(() => HomeOpsHouseholdMemberCreateWithoutHouseholdInput)
    create?: Array<HomeOpsHouseholdMemberCreateWithoutHouseholdInput>;

    @Field(() => [HomeOpsHouseholdMemberCreateOrConnectWithoutHouseholdInput], {nullable:true})
    @Type(() => HomeOpsHouseholdMemberCreateOrConnectWithoutHouseholdInput)
    connectOrCreate?: Array<HomeOpsHouseholdMemberCreateOrConnectWithoutHouseholdInput>;

    @Field(() => [HomeOpsHouseholdMemberUpsertWithWhereUniqueWithoutHouseholdInput], {nullable:true})
    @Type(() => HomeOpsHouseholdMemberUpsertWithWhereUniqueWithoutHouseholdInput)
    upsert?: Array<HomeOpsHouseholdMemberUpsertWithWhereUniqueWithoutHouseholdInput>;

    @Field(() => HomeOpsHouseholdMemberCreateManyHouseholdInputEnvelope, {nullable:true})
    @Type(() => HomeOpsHouseholdMemberCreateManyHouseholdInputEnvelope)
    createMany?: HomeOpsHouseholdMemberCreateManyHouseholdInputEnvelope;

    @Field(() => [HomeOpsHouseholdMemberWhereUniqueInput], {nullable:true})
    @Type(() => HomeOpsHouseholdMemberWhereUniqueInput)
    set?: Array<Prisma.AtLeast<HomeOpsHouseholdMemberWhereUniqueInput, 'id' | 'householdId_userId'>>;

    @Field(() => [HomeOpsHouseholdMemberWhereUniqueInput], {nullable:true})
    @Type(() => HomeOpsHouseholdMemberWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<HomeOpsHouseholdMemberWhereUniqueInput, 'id' | 'householdId_userId'>>;

    @Field(() => [HomeOpsHouseholdMemberWhereUniqueInput], {nullable:true})
    @Type(() => HomeOpsHouseholdMemberWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<HomeOpsHouseholdMemberWhereUniqueInput, 'id' | 'householdId_userId'>>;

    @Field(() => [HomeOpsHouseholdMemberWhereUniqueInput], {nullable:true})
    @Type(() => HomeOpsHouseholdMemberWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<HomeOpsHouseholdMemberWhereUniqueInput, 'id' | 'householdId_userId'>>;

    @Field(() => [HomeOpsHouseholdMemberUpdateWithWhereUniqueWithoutHouseholdInput], {nullable:true})
    @Type(() => HomeOpsHouseholdMemberUpdateWithWhereUniqueWithoutHouseholdInput)
    update?: Array<HomeOpsHouseholdMemberUpdateWithWhereUniqueWithoutHouseholdInput>;

    @Field(() => [HomeOpsHouseholdMemberUpdateManyWithWhereWithoutHouseholdInput], {nullable:true})
    @Type(() => HomeOpsHouseholdMemberUpdateManyWithWhereWithoutHouseholdInput)
    updateMany?: Array<HomeOpsHouseholdMemberUpdateManyWithWhereWithoutHouseholdInput>;

    @Field(() => [HomeOpsHouseholdMemberScalarWhereInput], {nullable:true})
    @Type(() => HomeOpsHouseholdMemberScalarWhereInput)
    deleteMany?: Array<HomeOpsHouseholdMemberScalarWhereInput>;
}

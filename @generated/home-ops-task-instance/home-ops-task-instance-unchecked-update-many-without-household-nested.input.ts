import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsTaskInstanceCreateWithoutHouseholdInput } from './home-ops-task-instance-create-without-household.input';
import { Type } from 'class-transformer';
import { HomeOpsTaskInstanceCreateOrConnectWithoutHouseholdInput } from './home-ops-task-instance-create-or-connect-without-household.input';
import { HomeOpsTaskInstanceUpsertWithWhereUniqueWithoutHouseholdInput } from './home-ops-task-instance-upsert-with-where-unique-without-household.input';
import { HomeOpsTaskInstanceCreateManyHouseholdInputEnvelope } from './home-ops-task-instance-create-many-household-input-envelope.input';
import { Prisma } from '@prisma/client';
import { HomeOpsTaskInstanceWhereUniqueInput } from './home-ops-task-instance-where-unique.input';
import { HomeOpsTaskInstanceUpdateWithWhereUniqueWithoutHouseholdInput } from './home-ops-task-instance-update-with-where-unique-without-household.input';
import { HomeOpsTaskInstanceUpdateManyWithWhereWithoutHouseholdInput } from './home-ops-task-instance-update-many-with-where-without-household.input';
import { HomeOpsTaskInstanceScalarWhereInput } from './home-ops-task-instance-scalar-where.input';

@InputType()
export class HomeOpsTaskInstanceUncheckedUpdateManyWithoutHouseholdNestedInput {

    @Field(() => [HomeOpsTaskInstanceCreateWithoutHouseholdInput], {nullable:true})
    @Type(() => HomeOpsTaskInstanceCreateWithoutHouseholdInput)
    create?: Array<HomeOpsTaskInstanceCreateWithoutHouseholdInput>;

    @Field(() => [HomeOpsTaskInstanceCreateOrConnectWithoutHouseholdInput], {nullable:true})
    @Type(() => HomeOpsTaskInstanceCreateOrConnectWithoutHouseholdInput)
    connectOrCreate?: Array<HomeOpsTaskInstanceCreateOrConnectWithoutHouseholdInput>;

    @Field(() => [HomeOpsTaskInstanceUpsertWithWhereUniqueWithoutHouseholdInput], {nullable:true})
    @Type(() => HomeOpsTaskInstanceUpsertWithWhereUniqueWithoutHouseholdInput)
    upsert?: Array<HomeOpsTaskInstanceUpsertWithWhereUniqueWithoutHouseholdInput>;

    @Field(() => HomeOpsTaskInstanceCreateManyHouseholdInputEnvelope, {nullable:true})
    @Type(() => HomeOpsTaskInstanceCreateManyHouseholdInputEnvelope)
    createMany?: HomeOpsTaskInstanceCreateManyHouseholdInputEnvelope;

    @Field(() => [HomeOpsTaskInstanceWhereUniqueInput], {nullable:true})
    @Type(() => HomeOpsTaskInstanceWhereUniqueInput)
    set?: Array<Prisma.AtLeast<HomeOpsTaskInstanceWhereUniqueInput, 'id' | 'weeklyPlanId_sourceKey'>>;

    @Field(() => [HomeOpsTaskInstanceWhereUniqueInput], {nullable:true})
    @Type(() => HomeOpsTaskInstanceWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<HomeOpsTaskInstanceWhereUniqueInput, 'id' | 'weeklyPlanId_sourceKey'>>;

    @Field(() => [HomeOpsTaskInstanceWhereUniqueInput], {nullable:true})
    @Type(() => HomeOpsTaskInstanceWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<HomeOpsTaskInstanceWhereUniqueInput, 'id' | 'weeklyPlanId_sourceKey'>>;

    @Field(() => [HomeOpsTaskInstanceWhereUniqueInput], {nullable:true})
    @Type(() => HomeOpsTaskInstanceWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<HomeOpsTaskInstanceWhereUniqueInput, 'id' | 'weeklyPlanId_sourceKey'>>;

    @Field(() => [HomeOpsTaskInstanceUpdateWithWhereUniqueWithoutHouseholdInput], {nullable:true})
    @Type(() => HomeOpsTaskInstanceUpdateWithWhereUniqueWithoutHouseholdInput)
    update?: Array<HomeOpsTaskInstanceUpdateWithWhereUniqueWithoutHouseholdInput>;

    @Field(() => [HomeOpsTaskInstanceUpdateManyWithWhereWithoutHouseholdInput], {nullable:true})
    @Type(() => HomeOpsTaskInstanceUpdateManyWithWhereWithoutHouseholdInput)
    updateMany?: Array<HomeOpsTaskInstanceUpdateManyWithWhereWithoutHouseholdInput>;

    @Field(() => [HomeOpsTaskInstanceScalarWhereInput], {nullable:true})
    @Type(() => HomeOpsTaskInstanceScalarWhereInput)
    deleteMany?: Array<HomeOpsTaskInstanceScalarWhereInput>;
}

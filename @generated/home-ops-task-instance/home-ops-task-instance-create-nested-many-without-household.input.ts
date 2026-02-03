import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsTaskInstanceCreateWithoutHouseholdInput } from './home-ops-task-instance-create-without-household.input';
import { Type } from 'class-transformer';
import { HomeOpsTaskInstanceCreateOrConnectWithoutHouseholdInput } from './home-ops-task-instance-create-or-connect-without-household.input';
import { HomeOpsTaskInstanceCreateManyHouseholdInputEnvelope } from './home-ops-task-instance-create-many-household-input-envelope.input';
import { Prisma } from '@prisma/client';
import { HomeOpsTaskInstanceWhereUniqueInput } from './home-ops-task-instance-where-unique.input';

@InputType()
export class HomeOpsTaskInstanceCreateNestedManyWithoutHouseholdInput {

    @Field(() => [HomeOpsTaskInstanceCreateWithoutHouseholdInput], {nullable:true})
    @Type(() => HomeOpsTaskInstanceCreateWithoutHouseholdInput)
    create?: Array<HomeOpsTaskInstanceCreateWithoutHouseholdInput>;

    @Field(() => [HomeOpsTaskInstanceCreateOrConnectWithoutHouseholdInput], {nullable:true})
    @Type(() => HomeOpsTaskInstanceCreateOrConnectWithoutHouseholdInput)
    connectOrCreate?: Array<HomeOpsTaskInstanceCreateOrConnectWithoutHouseholdInput>;

    @Field(() => HomeOpsTaskInstanceCreateManyHouseholdInputEnvelope, {nullable:true})
    @Type(() => HomeOpsTaskInstanceCreateManyHouseholdInputEnvelope)
    createMany?: HomeOpsTaskInstanceCreateManyHouseholdInputEnvelope;

    @Field(() => [HomeOpsTaskInstanceWhereUniqueInput], {nullable:true})
    @Type(() => HomeOpsTaskInstanceWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<HomeOpsTaskInstanceWhereUniqueInput, 'id' | 'weeklyPlanId_sourceKey'>>;
}

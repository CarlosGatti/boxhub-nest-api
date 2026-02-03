import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsTaskTemplateCreateWithoutHouseholdInput } from './home-ops-task-template-create-without-household.input';
import { Type } from 'class-transformer';
import { HomeOpsTaskTemplateCreateOrConnectWithoutHouseholdInput } from './home-ops-task-template-create-or-connect-without-household.input';
import { HomeOpsTaskTemplateCreateManyHouseholdInputEnvelope } from './home-ops-task-template-create-many-household-input-envelope.input';
import { Prisma } from '@prisma/client';
import { HomeOpsTaskTemplateWhereUniqueInput } from './home-ops-task-template-where-unique.input';

@InputType()
export class HomeOpsTaskTemplateUncheckedCreateNestedManyWithoutHouseholdInput {

    @Field(() => [HomeOpsTaskTemplateCreateWithoutHouseholdInput], {nullable:true})
    @Type(() => HomeOpsTaskTemplateCreateWithoutHouseholdInput)
    create?: Array<HomeOpsTaskTemplateCreateWithoutHouseholdInput>;

    @Field(() => [HomeOpsTaskTemplateCreateOrConnectWithoutHouseholdInput], {nullable:true})
    @Type(() => HomeOpsTaskTemplateCreateOrConnectWithoutHouseholdInput)
    connectOrCreate?: Array<HomeOpsTaskTemplateCreateOrConnectWithoutHouseholdInput>;

    @Field(() => HomeOpsTaskTemplateCreateManyHouseholdInputEnvelope, {nullable:true})
    @Type(() => HomeOpsTaskTemplateCreateManyHouseholdInputEnvelope)
    createMany?: HomeOpsTaskTemplateCreateManyHouseholdInputEnvelope;

    @Field(() => [HomeOpsTaskTemplateWhereUniqueInput], {nullable:true})
    @Type(() => HomeOpsTaskTemplateWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<HomeOpsTaskTemplateWhereUniqueInput, 'id'>>;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsTaskTemplateCreateWithoutHouseholdInput } from './home-ops-task-template-create-without-household.input';
import { Type } from 'class-transformer';
import { HomeOpsTaskTemplateCreateOrConnectWithoutHouseholdInput } from './home-ops-task-template-create-or-connect-without-household.input';
import { HomeOpsTaskTemplateUpsertWithWhereUniqueWithoutHouseholdInput } from './home-ops-task-template-upsert-with-where-unique-without-household.input';
import { HomeOpsTaskTemplateCreateManyHouseholdInputEnvelope } from './home-ops-task-template-create-many-household-input-envelope.input';
import { Prisma } from '@prisma/client';
import { HomeOpsTaskTemplateWhereUniqueInput } from './home-ops-task-template-where-unique.input';
import { HomeOpsTaskTemplateUpdateWithWhereUniqueWithoutHouseholdInput } from './home-ops-task-template-update-with-where-unique-without-household.input';
import { HomeOpsTaskTemplateUpdateManyWithWhereWithoutHouseholdInput } from './home-ops-task-template-update-many-with-where-without-household.input';
import { HomeOpsTaskTemplateScalarWhereInput } from './home-ops-task-template-scalar-where.input';

@InputType()
export class HomeOpsTaskTemplateUpdateManyWithoutHouseholdNestedInput {

    @Field(() => [HomeOpsTaskTemplateCreateWithoutHouseholdInput], {nullable:true})
    @Type(() => HomeOpsTaskTemplateCreateWithoutHouseholdInput)
    create?: Array<HomeOpsTaskTemplateCreateWithoutHouseholdInput>;

    @Field(() => [HomeOpsTaskTemplateCreateOrConnectWithoutHouseholdInput], {nullable:true})
    @Type(() => HomeOpsTaskTemplateCreateOrConnectWithoutHouseholdInput)
    connectOrCreate?: Array<HomeOpsTaskTemplateCreateOrConnectWithoutHouseholdInput>;

    @Field(() => [HomeOpsTaskTemplateUpsertWithWhereUniqueWithoutHouseholdInput], {nullable:true})
    @Type(() => HomeOpsTaskTemplateUpsertWithWhereUniqueWithoutHouseholdInput)
    upsert?: Array<HomeOpsTaskTemplateUpsertWithWhereUniqueWithoutHouseholdInput>;

    @Field(() => HomeOpsTaskTemplateCreateManyHouseholdInputEnvelope, {nullable:true})
    @Type(() => HomeOpsTaskTemplateCreateManyHouseholdInputEnvelope)
    createMany?: HomeOpsTaskTemplateCreateManyHouseholdInputEnvelope;

    @Field(() => [HomeOpsTaskTemplateWhereUniqueInput], {nullable:true})
    @Type(() => HomeOpsTaskTemplateWhereUniqueInput)
    set?: Array<Prisma.AtLeast<HomeOpsTaskTemplateWhereUniqueInput, 'id'>>;

    @Field(() => [HomeOpsTaskTemplateWhereUniqueInput], {nullable:true})
    @Type(() => HomeOpsTaskTemplateWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<HomeOpsTaskTemplateWhereUniqueInput, 'id'>>;

    @Field(() => [HomeOpsTaskTemplateWhereUniqueInput], {nullable:true})
    @Type(() => HomeOpsTaskTemplateWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<HomeOpsTaskTemplateWhereUniqueInput, 'id'>>;

    @Field(() => [HomeOpsTaskTemplateWhereUniqueInput], {nullable:true})
    @Type(() => HomeOpsTaskTemplateWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<HomeOpsTaskTemplateWhereUniqueInput, 'id'>>;

    @Field(() => [HomeOpsTaskTemplateUpdateWithWhereUniqueWithoutHouseholdInput], {nullable:true})
    @Type(() => HomeOpsTaskTemplateUpdateWithWhereUniqueWithoutHouseholdInput)
    update?: Array<HomeOpsTaskTemplateUpdateWithWhereUniqueWithoutHouseholdInput>;

    @Field(() => [HomeOpsTaskTemplateUpdateManyWithWhereWithoutHouseholdInput], {nullable:true})
    @Type(() => HomeOpsTaskTemplateUpdateManyWithWhereWithoutHouseholdInput)
    updateMany?: Array<HomeOpsTaskTemplateUpdateManyWithWhereWithoutHouseholdInput>;

    @Field(() => [HomeOpsTaskTemplateScalarWhereInput], {nullable:true})
    @Type(() => HomeOpsTaskTemplateScalarWhereInput)
    deleteMany?: Array<HomeOpsTaskTemplateScalarWhereInput>;
}

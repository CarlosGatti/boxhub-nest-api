import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsTaskTemplateCreateWithoutCreatedByInput } from './home-ops-task-template-create-without-created-by.input';
import { Type } from 'class-transformer';
import { HomeOpsTaskTemplateCreateOrConnectWithoutCreatedByInput } from './home-ops-task-template-create-or-connect-without-created-by.input';
import { HomeOpsTaskTemplateUpsertWithWhereUniqueWithoutCreatedByInput } from './home-ops-task-template-upsert-with-where-unique-without-created-by.input';
import { HomeOpsTaskTemplateCreateManyCreatedByInputEnvelope } from './home-ops-task-template-create-many-created-by-input-envelope.input';
import { Prisma } from '@prisma/client';
import { HomeOpsTaskTemplateWhereUniqueInput } from './home-ops-task-template-where-unique.input';
import { HomeOpsTaskTemplateUpdateWithWhereUniqueWithoutCreatedByInput } from './home-ops-task-template-update-with-where-unique-without-created-by.input';
import { HomeOpsTaskTemplateUpdateManyWithWhereWithoutCreatedByInput } from './home-ops-task-template-update-many-with-where-without-created-by.input';
import { HomeOpsTaskTemplateScalarWhereInput } from './home-ops-task-template-scalar-where.input';

@InputType()
export class HomeOpsTaskTemplateUpdateManyWithoutCreatedByNestedInput {

    @Field(() => [HomeOpsTaskTemplateCreateWithoutCreatedByInput], {nullable:true})
    @Type(() => HomeOpsTaskTemplateCreateWithoutCreatedByInput)
    create?: Array<HomeOpsTaskTemplateCreateWithoutCreatedByInput>;

    @Field(() => [HomeOpsTaskTemplateCreateOrConnectWithoutCreatedByInput], {nullable:true})
    @Type(() => HomeOpsTaskTemplateCreateOrConnectWithoutCreatedByInput)
    connectOrCreate?: Array<HomeOpsTaskTemplateCreateOrConnectWithoutCreatedByInput>;

    @Field(() => [HomeOpsTaskTemplateUpsertWithWhereUniqueWithoutCreatedByInput], {nullable:true})
    @Type(() => HomeOpsTaskTemplateUpsertWithWhereUniqueWithoutCreatedByInput)
    upsert?: Array<HomeOpsTaskTemplateUpsertWithWhereUniqueWithoutCreatedByInput>;

    @Field(() => HomeOpsTaskTemplateCreateManyCreatedByInputEnvelope, {nullable:true})
    @Type(() => HomeOpsTaskTemplateCreateManyCreatedByInputEnvelope)
    createMany?: HomeOpsTaskTemplateCreateManyCreatedByInputEnvelope;

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

    @Field(() => [HomeOpsTaskTemplateUpdateWithWhereUniqueWithoutCreatedByInput], {nullable:true})
    @Type(() => HomeOpsTaskTemplateUpdateWithWhereUniqueWithoutCreatedByInput)
    update?: Array<HomeOpsTaskTemplateUpdateWithWhereUniqueWithoutCreatedByInput>;

    @Field(() => [HomeOpsTaskTemplateUpdateManyWithWhereWithoutCreatedByInput], {nullable:true})
    @Type(() => HomeOpsTaskTemplateUpdateManyWithWhereWithoutCreatedByInput)
    updateMany?: Array<HomeOpsTaskTemplateUpdateManyWithWhereWithoutCreatedByInput>;

    @Field(() => [HomeOpsTaskTemplateScalarWhereInput], {nullable:true})
    @Type(() => HomeOpsTaskTemplateScalarWhereInput)
    deleteMany?: Array<HomeOpsTaskTemplateScalarWhereInput>;
}

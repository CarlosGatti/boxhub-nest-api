import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsTaskTemplateCreateWithoutCreatedByInput } from './home-ops-task-template-create-without-created-by.input';
import { Type } from 'class-transformer';
import { HomeOpsTaskTemplateCreateOrConnectWithoutCreatedByInput } from './home-ops-task-template-create-or-connect-without-created-by.input';
import { HomeOpsTaskTemplateCreateManyCreatedByInputEnvelope } from './home-ops-task-template-create-many-created-by-input-envelope.input';
import { Prisma } from '@prisma/client';
import { HomeOpsTaskTemplateWhereUniqueInput } from './home-ops-task-template-where-unique.input';

@InputType()
export class HomeOpsTaskTemplateUncheckedCreateNestedManyWithoutCreatedByInput {

    @Field(() => [HomeOpsTaskTemplateCreateWithoutCreatedByInput], {nullable:true})
    @Type(() => HomeOpsTaskTemplateCreateWithoutCreatedByInput)
    create?: Array<HomeOpsTaskTemplateCreateWithoutCreatedByInput>;

    @Field(() => [HomeOpsTaskTemplateCreateOrConnectWithoutCreatedByInput], {nullable:true})
    @Type(() => HomeOpsTaskTemplateCreateOrConnectWithoutCreatedByInput)
    connectOrCreate?: Array<HomeOpsTaskTemplateCreateOrConnectWithoutCreatedByInput>;

    @Field(() => HomeOpsTaskTemplateCreateManyCreatedByInputEnvelope, {nullable:true})
    @Type(() => HomeOpsTaskTemplateCreateManyCreatedByInputEnvelope)
    createMany?: HomeOpsTaskTemplateCreateManyCreatedByInputEnvelope;

    @Field(() => [HomeOpsTaskTemplateWhereUniqueInput], {nullable:true})
    @Type(() => HomeOpsTaskTemplateWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<HomeOpsTaskTemplateWhereUniqueInput, 'id'>>;
}

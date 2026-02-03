import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsTaskTemplateCreateWithoutTaskInstancesInput } from './home-ops-task-template-create-without-task-instances.input';
import { Type } from 'class-transformer';
import { HomeOpsTaskTemplateCreateOrConnectWithoutTaskInstancesInput } from './home-ops-task-template-create-or-connect-without-task-instances.input';
import { HomeOpsTaskTemplateUpsertWithoutTaskInstancesInput } from './home-ops-task-template-upsert-without-task-instances.input';
import { HomeOpsTaskTemplateWhereInput } from './home-ops-task-template-where.input';
import { Prisma } from '@prisma/client';
import { HomeOpsTaskTemplateWhereUniqueInput } from './home-ops-task-template-where-unique.input';
import { HomeOpsTaskTemplateUpdateToOneWithWhereWithoutTaskInstancesInput } from './home-ops-task-template-update-to-one-with-where-without-task-instances.input';

@InputType()
export class HomeOpsTaskTemplateUpdateOneWithoutTaskInstancesNestedInput {

    @Field(() => HomeOpsTaskTemplateCreateWithoutTaskInstancesInput, {nullable:true})
    @Type(() => HomeOpsTaskTemplateCreateWithoutTaskInstancesInput)
    create?: HomeOpsTaskTemplateCreateWithoutTaskInstancesInput;

    @Field(() => HomeOpsTaskTemplateCreateOrConnectWithoutTaskInstancesInput, {nullable:true})
    @Type(() => HomeOpsTaskTemplateCreateOrConnectWithoutTaskInstancesInput)
    connectOrCreate?: HomeOpsTaskTemplateCreateOrConnectWithoutTaskInstancesInput;

    @Field(() => HomeOpsTaskTemplateUpsertWithoutTaskInstancesInput, {nullable:true})
    @Type(() => HomeOpsTaskTemplateUpsertWithoutTaskInstancesInput)
    upsert?: HomeOpsTaskTemplateUpsertWithoutTaskInstancesInput;

    @Field(() => HomeOpsTaskTemplateWhereInput, {nullable:true})
    @Type(() => HomeOpsTaskTemplateWhereInput)
    disconnect?: HomeOpsTaskTemplateWhereInput;

    @Field(() => HomeOpsTaskTemplateWhereInput, {nullable:true})
    @Type(() => HomeOpsTaskTemplateWhereInput)
    delete?: HomeOpsTaskTemplateWhereInput;

    @Field(() => HomeOpsTaskTemplateWhereUniqueInput, {nullable:true})
    @Type(() => HomeOpsTaskTemplateWhereUniqueInput)
    connect?: Prisma.AtLeast<HomeOpsTaskTemplateWhereUniqueInput, 'id'>;

    @Field(() => HomeOpsTaskTemplateUpdateToOneWithWhereWithoutTaskInstancesInput, {nullable:true})
    @Type(() => HomeOpsTaskTemplateUpdateToOneWithWhereWithoutTaskInstancesInput)
    update?: HomeOpsTaskTemplateUpdateToOneWithWhereWithoutTaskInstancesInput;
}

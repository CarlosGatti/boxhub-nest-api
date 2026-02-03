import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsTaskTemplateCreateWithoutTaskInstancesInput } from './home-ops-task-template-create-without-task-instances.input';
import { Type } from 'class-transformer';
import { HomeOpsTaskTemplateCreateOrConnectWithoutTaskInstancesInput } from './home-ops-task-template-create-or-connect-without-task-instances.input';
import { Prisma } from '@prisma/client';
import { HomeOpsTaskTemplateWhereUniqueInput } from './home-ops-task-template-where-unique.input';

@InputType()
export class HomeOpsTaskTemplateCreateNestedOneWithoutTaskInstancesInput {

    @Field(() => HomeOpsTaskTemplateCreateWithoutTaskInstancesInput, {nullable:true})
    @Type(() => HomeOpsTaskTemplateCreateWithoutTaskInstancesInput)
    create?: HomeOpsTaskTemplateCreateWithoutTaskInstancesInput;

    @Field(() => HomeOpsTaskTemplateCreateOrConnectWithoutTaskInstancesInput, {nullable:true})
    @Type(() => HomeOpsTaskTemplateCreateOrConnectWithoutTaskInstancesInput)
    connectOrCreate?: HomeOpsTaskTemplateCreateOrConnectWithoutTaskInstancesInput;

    @Field(() => HomeOpsTaskTemplateWhereUniqueInput, {nullable:true})
    @Type(() => HomeOpsTaskTemplateWhereUniqueInput)
    connect?: Prisma.AtLeast<HomeOpsTaskTemplateWhereUniqueInput, 'id'>;
}

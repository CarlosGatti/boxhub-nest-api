import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsTaskTemplateCreateWithoutSlotsInput } from './home-ops-task-template-create-without-slots.input';
import { Type } from 'class-transformer';
import { HomeOpsTaskTemplateCreateOrConnectWithoutSlotsInput } from './home-ops-task-template-create-or-connect-without-slots.input';
import { Prisma } from '@prisma/client';
import { HomeOpsTaskTemplateWhereUniqueInput } from './home-ops-task-template-where-unique.input';

@InputType()
export class HomeOpsTaskTemplateCreateNestedOneWithoutSlotsInput {

    @Field(() => HomeOpsTaskTemplateCreateWithoutSlotsInput, {nullable:true})
    @Type(() => HomeOpsTaskTemplateCreateWithoutSlotsInput)
    create?: HomeOpsTaskTemplateCreateWithoutSlotsInput;

    @Field(() => HomeOpsTaskTemplateCreateOrConnectWithoutSlotsInput, {nullable:true})
    @Type(() => HomeOpsTaskTemplateCreateOrConnectWithoutSlotsInput)
    connectOrCreate?: HomeOpsTaskTemplateCreateOrConnectWithoutSlotsInput;

    @Field(() => HomeOpsTaskTemplateWhereUniqueInput, {nullable:true})
    @Type(() => HomeOpsTaskTemplateWhereUniqueInput)
    connect?: Prisma.AtLeast<HomeOpsTaskTemplateWhereUniqueInput, 'id'>;
}

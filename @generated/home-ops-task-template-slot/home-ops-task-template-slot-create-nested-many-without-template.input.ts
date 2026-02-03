import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsTaskTemplateSlotCreateWithoutTemplateInput } from './home-ops-task-template-slot-create-without-template.input';
import { Type } from 'class-transformer';
import { HomeOpsTaskTemplateSlotCreateOrConnectWithoutTemplateInput } from './home-ops-task-template-slot-create-or-connect-without-template.input';
import { HomeOpsTaskTemplateSlotCreateManyTemplateInputEnvelope } from './home-ops-task-template-slot-create-many-template-input-envelope.input';
import { Prisma } from '@prisma/client';
import { HomeOpsTaskTemplateSlotWhereUniqueInput } from './home-ops-task-template-slot-where-unique.input';

@InputType()
export class HomeOpsTaskTemplateSlotCreateNestedManyWithoutTemplateInput {

    @Field(() => [HomeOpsTaskTemplateSlotCreateWithoutTemplateInput], {nullable:true})
    @Type(() => HomeOpsTaskTemplateSlotCreateWithoutTemplateInput)
    create?: Array<HomeOpsTaskTemplateSlotCreateWithoutTemplateInput>;

    @Field(() => [HomeOpsTaskTemplateSlotCreateOrConnectWithoutTemplateInput], {nullable:true})
    @Type(() => HomeOpsTaskTemplateSlotCreateOrConnectWithoutTemplateInput)
    connectOrCreate?: Array<HomeOpsTaskTemplateSlotCreateOrConnectWithoutTemplateInput>;

    @Field(() => HomeOpsTaskTemplateSlotCreateManyTemplateInputEnvelope, {nullable:true})
    @Type(() => HomeOpsTaskTemplateSlotCreateManyTemplateInputEnvelope)
    createMany?: HomeOpsTaskTemplateSlotCreateManyTemplateInputEnvelope;

    @Field(() => [HomeOpsTaskTemplateSlotWhereUniqueInput], {nullable:true})
    @Type(() => HomeOpsTaskTemplateSlotWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<HomeOpsTaskTemplateSlotWhereUniqueInput, 'id' | 'templateId_order'>>;
}

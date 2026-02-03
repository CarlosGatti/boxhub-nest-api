import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsTaskTemplateSlotCreateWithoutTemplateInput } from './home-ops-task-template-slot-create-without-template.input';
import { Type } from 'class-transformer';
import { HomeOpsTaskTemplateSlotCreateOrConnectWithoutTemplateInput } from './home-ops-task-template-slot-create-or-connect-without-template.input';
import { HomeOpsTaskTemplateSlotUpsertWithWhereUniqueWithoutTemplateInput } from './home-ops-task-template-slot-upsert-with-where-unique-without-template.input';
import { HomeOpsTaskTemplateSlotCreateManyTemplateInputEnvelope } from './home-ops-task-template-slot-create-many-template-input-envelope.input';
import { Prisma } from '@prisma/client';
import { HomeOpsTaskTemplateSlotWhereUniqueInput } from './home-ops-task-template-slot-where-unique.input';
import { HomeOpsTaskTemplateSlotUpdateWithWhereUniqueWithoutTemplateInput } from './home-ops-task-template-slot-update-with-where-unique-without-template.input';
import { HomeOpsTaskTemplateSlotUpdateManyWithWhereWithoutTemplateInput } from './home-ops-task-template-slot-update-many-with-where-without-template.input';
import { HomeOpsTaskTemplateSlotScalarWhereInput } from './home-ops-task-template-slot-scalar-where.input';

@InputType()
export class HomeOpsTaskTemplateSlotUpdateManyWithoutTemplateNestedInput {

    @Field(() => [HomeOpsTaskTemplateSlotCreateWithoutTemplateInput], {nullable:true})
    @Type(() => HomeOpsTaskTemplateSlotCreateWithoutTemplateInput)
    create?: Array<HomeOpsTaskTemplateSlotCreateWithoutTemplateInput>;

    @Field(() => [HomeOpsTaskTemplateSlotCreateOrConnectWithoutTemplateInput], {nullable:true})
    @Type(() => HomeOpsTaskTemplateSlotCreateOrConnectWithoutTemplateInput)
    connectOrCreate?: Array<HomeOpsTaskTemplateSlotCreateOrConnectWithoutTemplateInput>;

    @Field(() => [HomeOpsTaskTemplateSlotUpsertWithWhereUniqueWithoutTemplateInput], {nullable:true})
    @Type(() => HomeOpsTaskTemplateSlotUpsertWithWhereUniqueWithoutTemplateInput)
    upsert?: Array<HomeOpsTaskTemplateSlotUpsertWithWhereUniqueWithoutTemplateInput>;

    @Field(() => HomeOpsTaskTemplateSlotCreateManyTemplateInputEnvelope, {nullable:true})
    @Type(() => HomeOpsTaskTemplateSlotCreateManyTemplateInputEnvelope)
    createMany?: HomeOpsTaskTemplateSlotCreateManyTemplateInputEnvelope;

    @Field(() => [HomeOpsTaskTemplateSlotWhereUniqueInput], {nullable:true})
    @Type(() => HomeOpsTaskTemplateSlotWhereUniqueInput)
    set?: Array<Prisma.AtLeast<HomeOpsTaskTemplateSlotWhereUniqueInput, 'id' | 'templateId_order'>>;

    @Field(() => [HomeOpsTaskTemplateSlotWhereUniqueInput], {nullable:true})
    @Type(() => HomeOpsTaskTemplateSlotWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<HomeOpsTaskTemplateSlotWhereUniqueInput, 'id' | 'templateId_order'>>;

    @Field(() => [HomeOpsTaskTemplateSlotWhereUniqueInput], {nullable:true})
    @Type(() => HomeOpsTaskTemplateSlotWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<HomeOpsTaskTemplateSlotWhereUniqueInput, 'id' | 'templateId_order'>>;

    @Field(() => [HomeOpsTaskTemplateSlotWhereUniqueInput], {nullable:true})
    @Type(() => HomeOpsTaskTemplateSlotWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<HomeOpsTaskTemplateSlotWhereUniqueInput, 'id' | 'templateId_order'>>;

    @Field(() => [HomeOpsTaskTemplateSlotUpdateWithWhereUniqueWithoutTemplateInput], {nullable:true})
    @Type(() => HomeOpsTaskTemplateSlotUpdateWithWhereUniqueWithoutTemplateInput)
    update?: Array<HomeOpsTaskTemplateSlotUpdateWithWhereUniqueWithoutTemplateInput>;

    @Field(() => [HomeOpsTaskTemplateSlotUpdateManyWithWhereWithoutTemplateInput], {nullable:true})
    @Type(() => HomeOpsTaskTemplateSlotUpdateManyWithWhereWithoutTemplateInput)
    updateMany?: Array<HomeOpsTaskTemplateSlotUpdateManyWithWhereWithoutTemplateInput>;

    @Field(() => [HomeOpsTaskTemplateSlotScalarWhereInput], {nullable:true})
    @Type(() => HomeOpsTaskTemplateSlotScalarWhereInput)
    deleteMany?: Array<HomeOpsTaskTemplateSlotScalarWhereInput>;
}

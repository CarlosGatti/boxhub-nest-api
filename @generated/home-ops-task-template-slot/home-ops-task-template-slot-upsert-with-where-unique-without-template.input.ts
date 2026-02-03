import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HomeOpsTaskTemplateSlotWhereUniqueInput } from './home-ops-task-template-slot-where-unique.input';
import { Type } from 'class-transformer';
import { HomeOpsTaskTemplateSlotUpdateWithoutTemplateInput } from './home-ops-task-template-slot-update-without-template.input';
import { HomeOpsTaskTemplateSlotCreateWithoutTemplateInput } from './home-ops-task-template-slot-create-without-template.input';

@InputType()
export class HomeOpsTaskTemplateSlotUpsertWithWhereUniqueWithoutTemplateInput {

    @Field(() => HomeOpsTaskTemplateSlotWhereUniqueInput, {nullable:false})
    @Type(() => HomeOpsTaskTemplateSlotWhereUniqueInput)
    where!: Prisma.AtLeast<HomeOpsTaskTemplateSlotWhereUniqueInput, 'id' | 'templateId_order'>;

    @Field(() => HomeOpsTaskTemplateSlotUpdateWithoutTemplateInput, {nullable:false})
    @Type(() => HomeOpsTaskTemplateSlotUpdateWithoutTemplateInput)
    update!: HomeOpsTaskTemplateSlotUpdateWithoutTemplateInput;

    @Field(() => HomeOpsTaskTemplateSlotCreateWithoutTemplateInput, {nullable:false})
    @Type(() => HomeOpsTaskTemplateSlotCreateWithoutTemplateInput)
    create!: HomeOpsTaskTemplateSlotCreateWithoutTemplateInput;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HomeOpsTaskTemplateSlotUpdateInput } from './home-ops-task-template-slot-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { HomeOpsTaskTemplateSlotWhereUniqueInput } from './home-ops-task-template-slot-where-unique.input';

@ArgsType()
export class UpdateOneHomeOpsTaskTemplateSlotArgs {

    @Field(() => HomeOpsTaskTemplateSlotUpdateInput, {nullable:false})
    @Type(() => HomeOpsTaskTemplateSlotUpdateInput)
    data!: HomeOpsTaskTemplateSlotUpdateInput;

    @Field(() => HomeOpsTaskTemplateSlotWhereUniqueInput, {nullable:false})
    @Type(() => HomeOpsTaskTemplateSlotWhereUniqueInput)
    where!: Prisma.AtLeast<HomeOpsTaskTemplateSlotWhereUniqueInput, 'id' | 'templateId_order'>;
}

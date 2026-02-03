import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HomeOpsTaskTemplateSlotWhereUniqueInput } from './home-ops-task-template-slot-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueHomeOpsTaskTemplateSlotOrThrowArgs {

    @Field(() => HomeOpsTaskTemplateSlotWhereUniqueInput, {nullable:false})
    @Type(() => HomeOpsTaskTemplateSlotWhereUniqueInput)
    where!: Prisma.AtLeast<HomeOpsTaskTemplateSlotWhereUniqueInput, 'id' | 'templateId_order'>;
}

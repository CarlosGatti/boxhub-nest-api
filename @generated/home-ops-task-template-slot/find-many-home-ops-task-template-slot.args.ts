import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HomeOpsTaskTemplateSlotWhereInput } from './home-ops-task-template-slot-where.input';
import { Type } from 'class-transformer';
import { HomeOpsTaskTemplateSlotOrderByWithRelationInput } from './home-ops-task-template-slot-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { HomeOpsTaskTemplateSlotWhereUniqueInput } from './home-ops-task-template-slot-where-unique.input';
import { Int } from '@nestjs/graphql';
import { HomeOpsTaskTemplateSlotScalarFieldEnum } from './home-ops-task-template-slot-scalar-field.enum';

@ArgsType()
export class FindManyHomeOpsTaskTemplateSlotArgs {

    @Field(() => HomeOpsTaskTemplateSlotWhereInput, {nullable:true})
    @Type(() => HomeOpsTaskTemplateSlotWhereInput)
    where?: HomeOpsTaskTemplateSlotWhereInput;

    @Field(() => [HomeOpsTaskTemplateSlotOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<HomeOpsTaskTemplateSlotOrderByWithRelationInput>;

    @Field(() => HomeOpsTaskTemplateSlotWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<HomeOpsTaskTemplateSlotWhereUniqueInput, 'id' | 'templateId_order'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [HomeOpsTaskTemplateSlotScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof HomeOpsTaskTemplateSlotScalarFieldEnum>;
}

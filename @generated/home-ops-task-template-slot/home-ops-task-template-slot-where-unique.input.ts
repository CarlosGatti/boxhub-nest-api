import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HomeOpsTaskTemplateSlotTemplateIdOrderCompoundUniqueInput } from './home-ops-task-template-slot-template-id-order-compound-unique.input';
import { HomeOpsTaskTemplateSlotWhereInput } from './home-ops-task-template-slot-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { HomeOpsTaskTemplateRelationFilter } from '../home-ops-task-template/home-ops-task-template-relation-filter.input';

@InputType()
export class HomeOpsTaskTemplateSlotWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => HomeOpsTaskTemplateSlotTemplateIdOrderCompoundUniqueInput, {nullable:true})
    templateId_order?: HomeOpsTaskTemplateSlotTemplateIdOrderCompoundUniqueInput;

    @Field(() => [HomeOpsTaskTemplateSlotWhereInput], {nullable:true})
    AND?: Array<HomeOpsTaskTemplateSlotWhereInput>;

    @Field(() => [HomeOpsTaskTemplateSlotWhereInput], {nullable:true})
    OR?: Array<HomeOpsTaskTemplateSlotWhereInput>;

    @Field(() => [HomeOpsTaskTemplateSlotWhereInput], {nullable:true})
    NOT?: Array<HomeOpsTaskTemplateSlotWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    templateId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    label?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    windowStart?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    windowEnd?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    order?: IntFilter;

    @Field(() => HomeOpsTaskTemplateRelationFilter, {nullable:true})
    template?: HomeOpsTaskTemplateRelationFilter;
}

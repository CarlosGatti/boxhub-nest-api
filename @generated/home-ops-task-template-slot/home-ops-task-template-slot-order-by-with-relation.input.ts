import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HomeOpsTaskTemplateOrderByWithRelationInput } from '../home-ops-task-template/home-ops-task-template-order-by-with-relation.input';

@InputType()
export class HomeOpsTaskTemplateSlotOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    templateId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    label?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    windowStart?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    windowEnd?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    order?: keyof typeof SortOrder;

    @Field(() => HomeOpsTaskTemplateOrderByWithRelationInput, {nullable:true})
    template?: HomeOpsTaskTemplateOrderByWithRelationInput;
}

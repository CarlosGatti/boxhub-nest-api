import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ThemeOrderByRelationAggregateInput } from '../theme/theme-order-by-relation-aggregate.input';
import { PillarOrderByWithRelationInput } from '../pillar/pillar-order-by-with-relation.input';

@InputType()
export class ProcessOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    pillarId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => ThemeOrderByRelationAggregateInput, {nullable:true})
    themes?: ThemeOrderByRelationAggregateInput;

    @Field(() => PillarOrderByWithRelationInput, {nullable:true})
    pillar?: PillarOrderByWithRelationInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DefinedAcademyOrderByWithRelationInput } from '../defined-academy/defined-academy-order-by-with-relation.input';
import { DefinedAcademyPartnerOrderByRelationAggregateInput } from '../defined-academy-partner/defined-academy-partner-order-by-relation-aggregate.input';

@InputType()
export class DefinedAcademyPartnerCategoryOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    academyId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    sortOrder?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => DefinedAcademyOrderByWithRelationInput, {nullable:true})
    academy?: DefinedAcademyOrderByWithRelationInput;

    @Field(() => DefinedAcademyPartnerOrderByRelationAggregateInput, {nullable:true})
    partners?: DefinedAcademyPartnerOrderByRelationAggregateInput;
}

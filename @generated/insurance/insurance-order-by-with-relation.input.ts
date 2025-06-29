import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SubcontractorOrderByWithRelationInput } from '../subcontractor/subcontractor-order-by-with-relation.input';

@InputType()
export class InsuranceOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    subcontractorId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    company?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    expiration?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    documentUrl?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SubcontractorOrderByWithRelationInput, {nullable:true})
    subcontractor?: SubcontractorOrderByWithRelationInput;
}

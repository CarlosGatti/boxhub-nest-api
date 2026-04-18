import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DefinedClientOrderByWithRelationInput } from '../defined-client/defined-client-order-by-with-relation.input';
import { DefinedProjectOrderByWithRelationInput } from '../defined-project/defined-project-order-by-with-relation.input';
import { DefinedIntakeAnswerOrderByRelationAggregateInput } from '../defined-intake-answer/defined-intake-answer-order-by-relation-aggregate.input';

@InputType()
export class DefinedIntakeFormOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    clientId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    projectId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    formType?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    shareToken?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    shareTokenCreatedAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    shareTokenExpiresAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    shareRevokedAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    submittedAt?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => DefinedClientOrderByWithRelationInput, {nullable:true})
    client?: DefinedClientOrderByWithRelationInput;

    @Field(() => DefinedProjectOrderByWithRelationInput, {nullable:true})
    project?: DefinedProjectOrderByWithRelationInput;

    @Field(() => DefinedIntakeAnswerOrderByRelationAggregateInput, {nullable:true})
    answers?: DefinedIntakeAnswerOrderByRelationAggregateInput;
}

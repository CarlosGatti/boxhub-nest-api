import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class DefinedProposalCountOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    clientId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    projectId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    subtitle?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    summary?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    contentJson?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    currency?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    shareToken?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    shareTokenCreatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    shareTokenExpiresAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    shareRevokedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sentAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    viewedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    approvedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    declinedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdById?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

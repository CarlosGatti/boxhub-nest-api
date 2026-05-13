import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class DefinedProposalMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    clientId?: true;

    @Field(() => Boolean, {nullable:true})
    projectId?: true;

    @Field(() => Boolean, {nullable:true})
    title?: true;

    @Field(() => Boolean, {nullable:true})
    subtitle?: true;

    @Field(() => Boolean, {nullable:true})
    status?: true;

    @Field(() => Boolean, {nullable:true})
    summary?: true;

    @Field(() => Boolean, {nullable:true})
    currency?: true;

    @Field(() => Boolean, {nullable:true})
    shareToken?: true;

    @Field(() => Boolean, {nullable:true})
    shareTokenCreatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    shareTokenExpiresAt?: true;

    @Field(() => Boolean, {nullable:true})
    shareRevokedAt?: true;

    @Field(() => Boolean, {nullable:true})
    sentAt?: true;

    @Field(() => Boolean, {nullable:true})
    viewedAt?: true;

    @Field(() => Boolean, {nullable:true})
    approvedAt?: true;

    @Field(() => Boolean, {nullable:true})
    declinedAt?: true;

    @Field(() => Boolean, {nullable:true})
    createdById?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

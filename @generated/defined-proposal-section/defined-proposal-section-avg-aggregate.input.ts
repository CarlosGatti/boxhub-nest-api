import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class DefinedProposalSectionAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    proposalId?: true;

    @Field(() => Boolean, {nullable:true})
    order?: true;
}

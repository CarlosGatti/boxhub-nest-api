import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class DefinedProposalSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    clientId?: true;

    @Field(() => Boolean, {nullable:true})
    projectId?: true;

    @Field(() => Boolean, {nullable:true})
    createdById?: true;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class DefinedProposalAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    clientId?: true;

    @Field(() => Boolean, {nullable:true})
    projectId?: true;

    @Field(() => Boolean, {nullable:true})
    createdById?: true;
}

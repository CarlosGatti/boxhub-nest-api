import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class DefinedProjectCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    clientId?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    serviceType?: true;

    @Field(() => Boolean, {nullable:true})
    status?: true;

    @Field(() => Boolean, {nullable:true})
    budget?: true;

    @Field(() => Boolean, {nullable:true})
    deadline?: true;

    @Field(() => Boolean, {nullable:true})
    source?: true;

    @Field(() => Boolean, {nullable:true})
    assignedTo?: true;

    @Field(() => Boolean, {nullable:true})
    supplierId?: true;

    @Field(() => Boolean, {nullable:true})
    notes?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

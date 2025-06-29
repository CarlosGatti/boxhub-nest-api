import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class InsuranceCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    subcontractorId?: true;

    @Field(() => Boolean, {nullable:true})
    company?: true;

    @Field(() => Boolean, {nullable:true})
    expiration?: true;

    @Field(() => Boolean, {nullable:true})
    documentUrl?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

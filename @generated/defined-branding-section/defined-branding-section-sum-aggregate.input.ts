import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class DefinedBrandingSectionSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    brandingProjectId?: true;

    @Field(() => Boolean, {nullable:true})
    order?: true;
}

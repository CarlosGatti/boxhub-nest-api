import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ItemMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    description?: true;

    @Field(() => Boolean, {nullable:true})
    imageUrl?: true;

    @Field(() => Boolean, {nullable:true})
    quantity?: true;

    @Field(() => Boolean, {nullable:true})
    category?: true;

    @Field(() => Boolean, {nullable:true})
    containerId?: true;

    @Field(() => Boolean, {nullable:true})
    donatedToDiscartMe?: true;

    @Field(() => Boolean, {nullable:true})
    discartItemId?: true;

    @Field(() => Boolean, {nullable:true})
    donatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ItemMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    imageUrl?: string;

    @Field(() => Int, {nullable:true})
    quantity?: number;

    @Field(() => String, {nullable:true})
    category?: string;

    @Field(() => Int, {nullable:true})
    containerId?: number;

    @Field(() => Boolean, {nullable:true})
    donatedToDiscartMe?: boolean;

    @Field(() => Int, {nullable:true})
    discartItemId?: number;

    @Field(() => Date, {nullable:true})
    donatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class RatingUncheckedCreateWithoutSellerInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    buyerId!: number;

    @Field(() => Int, {nullable:false})
    stars!: number;

    @Field(() => String, {nullable:true})
    comment?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class RatingSellerIdBuyerIdCompoundUniqueInput {

    @Field(() => Int, {nullable:false})
    sellerId!: number;

    @Field(() => Int, {nullable:false})
    buyerId!: number;
}

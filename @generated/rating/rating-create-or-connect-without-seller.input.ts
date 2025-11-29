import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RatingWhereUniqueInput } from './rating-where-unique.input';
import { Type } from 'class-transformer';
import { RatingCreateWithoutSellerInput } from './rating-create-without-seller.input';

@InputType()
export class RatingCreateOrConnectWithoutSellerInput {

    @Field(() => RatingWhereUniqueInput, {nullable:false})
    @Type(() => RatingWhereUniqueInput)
    where!: Prisma.AtLeast<RatingWhereUniqueInput, 'id' | 'sellerId_buyerId'>;

    @Field(() => RatingCreateWithoutSellerInput, {nullable:false})
    @Type(() => RatingCreateWithoutSellerInput)
    create!: RatingCreateWithoutSellerInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RatingWhereUniqueInput } from './rating-where-unique.input';
import { Type } from 'class-transformer';
import { RatingUpdateWithoutSellerInput } from './rating-update-without-seller.input';

@InputType()
export class RatingUpdateWithWhereUniqueWithoutSellerInput {

    @Field(() => RatingWhereUniqueInput, {nullable:false})
    @Type(() => RatingWhereUniqueInput)
    where!: Prisma.AtLeast<RatingWhereUniqueInput, 'id' | 'sellerId_buyerId'>;

    @Field(() => RatingUpdateWithoutSellerInput, {nullable:false})
    @Type(() => RatingUpdateWithoutSellerInput)
    data!: RatingUpdateWithoutSellerInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RatingWhereUniqueInput } from './rating-where-unique.input';
import { Type } from 'class-transformer';
import { RatingUpdateWithoutSellerInput } from './rating-update-without-seller.input';
import { RatingCreateWithoutSellerInput } from './rating-create-without-seller.input';

@InputType()
export class RatingUpsertWithWhereUniqueWithoutSellerInput {

    @Field(() => RatingWhereUniqueInput, {nullable:false})
    @Type(() => RatingWhereUniqueInput)
    where!: Prisma.AtLeast<RatingWhereUniqueInput, 'id' | 'sellerId_buyerId'>;

    @Field(() => RatingUpdateWithoutSellerInput, {nullable:false})
    @Type(() => RatingUpdateWithoutSellerInput)
    update!: RatingUpdateWithoutSellerInput;

    @Field(() => RatingCreateWithoutSellerInput, {nullable:false})
    @Type(() => RatingCreateWithoutSellerInput)
    create!: RatingCreateWithoutSellerInput;
}

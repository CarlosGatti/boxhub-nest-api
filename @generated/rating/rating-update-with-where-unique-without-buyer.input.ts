import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RatingWhereUniqueInput } from './rating-where-unique.input';
import { Type } from 'class-transformer';
import { RatingUpdateWithoutBuyerInput } from './rating-update-without-buyer.input';

@InputType()
export class RatingUpdateWithWhereUniqueWithoutBuyerInput {

    @Field(() => RatingWhereUniqueInput, {nullable:false})
    @Type(() => RatingWhereUniqueInput)
    where!: Prisma.AtLeast<RatingWhereUniqueInput, 'id' | 'sellerId_buyerId'>;

    @Field(() => RatingUpdateWithoutBuyerInput, {nullable:false})
    @Type(() => RatingUpdateWithoutBuyerInput)
    data!: RatingUpdateWithoutBuyerInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RatingCreateWithoutSellerInput } from './rating-create-without-seller.input';
import { Type } from 'class-transformer';
import { RatingCreateOrConnectWithoutSellerInput } from './rating-create-or-connect-without-seller.input';
import { RatingCreateManySellerInputEnvelope } from './rating-create-many-seller-input-envelope.input';
import { Prisma } from '@prisma/client';
import { RatingWhereUniqueInput } from './rating-where-unique.input';

@InputType()
export class RatingCreateNestedManyWithoutSellerInput {

    @Field(() => [RatingCreateWithoutSellerInput], {nullable:true})
    @Type(() => RatingCreateWithoutSellerInput)
    create?: Array<RatingCreateWithoutSellerInput>;

    @Field(() => [RatingCreateOrConnectWithoutSellerInput], {nullable:true})
    @Type(() => RatingCreateOrConnectWithoutSellerInput)
    connectOrCreate?: Array<RatingCreateOrConnectWithoutSellerInput>;

    @Field(() => RatingCreateManySellerInputEnvelope, {nullable:true})
    @Type(() => RatingCreateManySellerInputEnvelope)
    createMany?: RatingCreateManySellerInputEnvelope;

    @Field(() => [RatingWhereUniqueInput], {nullable:true})
    @Type(() => RatingWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RatingWhereUniqueInput, 'id' | 'sellerId_buyerId'>>;
}

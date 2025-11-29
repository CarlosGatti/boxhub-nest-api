import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RatingCreateWithoutSellerInput } from './rating-create-without-seller.input';
import { Type } from 'class-transformer';
import { RatingCreateOrConnectWithoutSellerInput } from './rating-create-or-connect-without-seller.input';
import { RatingUpsertWithWhereUniqueWithoutSellerInput } from './rating-upsert-with-where-unique-without-seller.input';
import { RatingCreateManySellerInputEnvelope } from './rating-create-many-seller-input-envelope.input';
import { Prisma } from '@prisma/client';
import { RatingWhereUniqueInput } from './rating-where-unique.input';
import { RatingUpdateWithWhereUniqueWithoutSellerInput } from './rating-update-with-where-unique-without-seller.input';
import { RatingUpdateManyWithWhereWithoutSellerInput } from './rating-update-many-with-where-without-seller.input';
import { RatingScalarWhereInput } from './rating-scalar-where.input';

@InputType()
export class RatingUpdateManyWithoutSellerNestedInput {

    @Field(() => [RatingCreateWithoutSellerInput], {nullable:true})
    @Type(() => RatingCreateWithoutSellerInput)
    create?: Array<RatingCreateWithoutSellerInput>;

    @Field(() => [RatingCreateOrConnectWithoutSellerInput], {nullable:true})
    @Type(() => RatingCreateOrConnectWithoutSellerInput)
    connectOrCreate?: Array<RatingCreateOrConnectWithoutSellerInput>;

    @Field(() => [RatingUpsertWithWhereUniqueWithoutSellerInput], {nullable:true})
    @Type(() => RatingUpsertWithWhereUniqueWithoutSellerInput)
    upsert?: Array<RatingUpsertWithWhereUniqueWithoutSellerInput>;

    @Field(() => RatingCreateManySellerInputEnvelope, {nullable:true})
    @Type(() => RatingCreateManySellerInputEnvelope)
    createMany?: RatingCreateManySellerInputEnvelope;

    @Field(() => [RatingWhereUniqueInput], {nullable:true})
    @Type(() => RatingWhereUniqueInput)
    set?: Array<Prisma.AtLeast<RatingWhereUniqueInput, 'id' | 'sellerId_buyerId'>>;

    @Field(() => [RatingWhereUniqueInput], {nullable:true})
    @Type(() => RatingWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<RatingWhereUniqueInput, 'id' | 'sellerId_buyerId'>>;

    @Field(() => [RatingWhereUniqueInput], {nullable:true})
    @Type(() => RatingWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<RatingWhereUniqueInput, 'id' | 'sellerId_buyerId'>>;

    @Field(() => [RatingWhereUniqueInput], {nullable:true})
    @Type(() => RatingWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RatingWhereUniqueInput, 'id' | 'sellerId_buyerId'>>;

    @Field(() => [RatingUpdateWithWhereUniqueWithoutSellerInput], {nullable:true})
    @Type(() => RatingUpdateWithWhereUniqueWithoutSellerInput)
    update?: Array<RatingUpdateWithWhereUniqueWithoutSellerInput>;

    @Field(() => [RatingUpdateManyWithWhereWithoutSellerInput], {nullable:true})
    @Type(() => RatingUpdateManyWithWhereWithoutSellerInput)
    updateMany?: Array<RatingUpdateManyWithWhereWithoutSellerInput>;

    @Field(() => [RatingScalarWhereInput], {nullable:true})
    @Type(() => RatingScalarWhereInput)
    deleteMany?: Array<RatingScalarWhereInput>;
}

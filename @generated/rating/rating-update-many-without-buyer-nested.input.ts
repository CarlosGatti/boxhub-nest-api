import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RatingCreateWithoutBuyerInput } from './rating-create-without-buyer.input';
import { Type } from 'class-transformer';
import { RatingCreateOrConnectWithoutBuyerInput } from './rating-create-or-connect-without-buyer.input';
import { RatingUpsertWithWhereUniqueWithoutBuyerInput } from './rating-upsert-with-where-unique-without-buyer.input';
import { RatingCreateManyBuyerInputEnvelope } from './rating-create-many-buyer-input-envelope.input';
import { Prisma } from '@prisma/client';
import { RatingWhereUniqueInput } from './rating-where-unique.input';
import { RatingUpdateWithWhereUniqueWithoutBuyerInput } from './rating-update-with-where-unique-without-buyer.input';
import { RatingUpdateManyWithWhereWithoutBuyerInput } from './rating-update-many-with-where-without-buyer.input';
import { RatingScalarWhereInput } from './rating-scalar-where.input';

@InputType()
export class RatingUpdateManyWithoutBuyerNestedInput {

    @Field(() => [RatingCreateWithoutBuyerInput], {nullable:true})
    @Type(() => RatingCreateWithoutBuyerInput)
    create?: Array<RatingCreateWithoutBuyerInput>;

    @Field(() => [RatingCreateOrConnectWithoutBuyerInput], {nullable:true})
    @Type(() => RatingCreateOrConnectWithoutBuyerInput)
    connectOrCreate?: Array<RatingCreateOrConnectWithoutBuyerInput>;

    @Field(() => [RatingUpsertWithWhereUniqueWithoutBuyerInput], {nullable:true})
    @Type(() => RatingUpsertWithWhereUniqueWithoutBuyerInput)
    upsert?: Array<RatingUpsertWithWhereUniqueWithoutBuyerInput>;

    @Field(() => RatingCreateManyBuyerInputEnvelope, {nullable:true})
    @Type(() => RatingCreateManyBuyerInputEnvelope)
    createMany?: RatingCreateManyBuyerInputEnvelope;

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

    @Field(() => [RatingUpdateWithWhereUniqueWithoutBuyerInput], {nullable:true})
    @Type(() => RatingUpdateWithWhereUniqueWithoutBuyerInput)
    update?: Array<RatingUpdateWithWhereUniqueWithoutBuyerInput>;

    @Field(() => [RatingUpdateManyWithWhereWithoutBuyerInput], {nullable:true})
    @Type(() => RatingUpdateManyWithWhereWithoutBuyerInput)
    updateMany?: Array<RatingUpdateManyWithWhereWithoutBuyerInput>;

    @Field(() => [RatingScalarWhereInput], {nullable:true})
    @Type(() => RatingScalarWhereInput)
    deleteMany?: Array<RatingScalarWhereInput>;
}

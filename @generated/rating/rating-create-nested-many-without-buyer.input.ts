import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RatingCreateWithoutBuyerInput } from './rating-create-without-buyer.input';
import { Type } from 'class-transformer';
import { RatingCreateOrConnectWithoutBuyerInput } from './rating-create-or-connect-without-buyer.input';
import { RatingCreateManyBuyerInputEnvelope } from './rating-create-many-buyer-input-envelope.input';
import { Prisma } from '@prisma/client';
import { RatingWhereUniqueInput } from './rating-where-unique.input';

@InputType()
export class RatingCreateNestedManyWithoutBuyerInput {

    @Field(() => [RatingCreateWithoutBuyerInput], {nullable:true})
    @Type(() => RatingCreateWithoutBuyerInput)
    create?: Array<RatingCreateWithoutBuyerInput>;

    @Field(() => [RatingCreateOrConnectWithoutBuyerInput], {nullable:true})
    @Type(() => RatingCreateOrConnectWithoutBuyerInput)
    connectOrCreate?: Array<RatingCreateOrConnectWithoutBuyerInput>;

    @Field(() => RatingCreateManyBuyerInputEnvelope, {nullable:true})
    @Type(() => RatingCreateManyBuyerInputEnvelope)
    createMany?: RatingCreateManyBuyerInputEnvelope;

    @Field(() => [RatingWhereUniqueInput], {nullable:true})
    @Type(() => RatingWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RatingWhereUniqueInput, 'id' | 'sellerId_buyerId'>>;
}

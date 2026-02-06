import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCardPremiumRequestCreateWithoutUserInput } from './review-card-premium-request-create-without-user.input';
import { Type } from 'class-transformer';
import { ReviewCardPremiumRequestCreateOrConnectWithoutUserInput } from './review-card-premium-request-create-or-connect-without-user.input';
import { ReviewCardPremiumRequestCreateManyUserInputEnvelope } from './review-card-premium-request-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ReviewCardPremiumRequestWhereUniqueInput } from './review-card-premium-request-where-unique.input';

@InputType()
export class ReviewCardPremiumRequestCreateNestedManyWithoutUserInput {

    @Field(() => [ReviewCardPremiumRequestCreateWithoutUserInput], {nullable:true})
    @Type(() => ReviewCardPremiumRequestCreateWithoutUserInput)
    create?: Array<ReviewCardPremiumRequestCreateWithoutUserInput>;

    @Field(() => [ReviewCardPremiumRequestCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ReviewCardPremiumRequestCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<ReviewCardPremiumRequestCreateOrConnectWithoutUserInput>;

    @Field(() => ReviewCardPremiumRequestCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ReviewCardPremiumRequestCreateManyUserInputEnvelope)
    createMany?: ReviewCardPremiumRequestCreateManyUserInputEnvelope;

    @Field(() => [ReviewCardPremiumRequestWhereUniqueInput], {nullable:true})
    @Type(() => ReviewCardPremiumRequestWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ReviewCardPremiumRequestWhereUniqueInput, 'id'>>;
}

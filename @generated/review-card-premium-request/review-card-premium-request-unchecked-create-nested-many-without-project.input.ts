import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCardPremiumRequestCreateWithoutProjectInput } from './review-card-premium-request-create-without-project.input';
import { Type } from 'class-transformer';
import { ReviewCardPremiumRequestCreateOrConnectWithoutProjectInput } from './review-card-premium-request-create-or-connect-without-project.input';
import { ReviewCardPremiumRequestCreateManyProjectInputEnvelope } from './review-card-premium-request-create-many-project-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ReviewCardPremiumRequestWhereUniqueInput } from './review-card-premium-request-where-unique.input';

@InputType()
export class ReviewCardPremiumRequestUncheckedCreateNestedManyWithoutProjectInput {

    @Field(() => [ReviewCardPremiumRequestCreateWithoutProjectInput], {nullable:true})
    @Type(() => ReviewCardPremiumRequestCreateWithoutProjectInput)
    create?: Array<ReviewCardPremiumRequestCreateWithoutProjectInput>;

    @Field(() => [ReviewCardPremiumRequestCreateOrConnectWithoutProjectInput], {nullable:true})
    @Type(() => ReviewCardPremiumRequestCreateOrConnectWithoutProjectInput)
    connectOrCreate?: Array<ReviewCardPremiumRequestCreateOrConnectWithoutProjectInput>;

    @Field(() => ReviewCardPremiumRequestCreateManyProjectInputEnvelope, {nullable:true})
    @Type(() => ReviewCardPremiumRequestCreateManyProjectInputEnvelope)
    createMany?: ReviewCardPremiumRequestCreateManyProjectInputEnvelope;

    @Field(() => [ReviewCardPremiumRequestWhereUniqueInput], {nullable:true})
    @Type(() => ReviewCardPremiumRequestWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ReviewCardPremiumRequestWhereUniqueInput, 'id'>>;
}

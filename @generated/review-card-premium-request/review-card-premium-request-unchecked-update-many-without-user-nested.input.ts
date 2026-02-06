import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCardPremiumRequestCreateWithoutUserInput } from './review-card-premium-request-create-without-user.input';
import { Type } from 'class-transformer';
import { ReviewCardPremiumRequestCreateOrConnectWithoutUserInput } from './review-card-premium-request-create-or-connect-without-user.input';
import { ReviewCardPremiumRequestUpsertWithWhereUniqueWithoutUserInput } from './review-card-premium-request-upsert-with-where-unique-without-user.input';
import { ReviewCardPremiumRequestCreateManyUserInputEnvelope } from './review-card-premium-request-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ReviewCardPremiumRequestWhereUniqueInput } from './review-card-premium-request-where-unique.input';
import { ReviewCardPremiumRequestUpdateWithWhereUniqueWithoutUserInput } from './review-card-premium-request-update-with-where-unique-without-user.input';
import { ReviewCardPremiumRequestUpdateManyWithWhereWithoutUserInput } from './review-card-premium-request-update-many-with-where-without-user.input';
import { ReviewCardPremiumRequestScalarWhereInput } from './review-card-premium-request-scalar-where.input';

@InputType()
export class ReviewCardPremiumRequestUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [ReviewCardPremiumRequestCreateWithoutUserInput], {nullable:true})
    @Type(() => ReviewCardPremiumRequestCreateWithoutUserInput)
    create?: Array<ReviewCardPremiumRequestCreateWithoutUserInput>;

    @Field(() => [ReviewCardPremiumRequestCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ReviewCardPremiumRequestCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<ReviewCardPremiumRequestCreateOrConnectWithoutUserInput>;

    @Field(() => [ReviewCardPremiumRequestUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ReviewCardPremiumRequestUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<ReviewCardPremiumRequestUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => ReviewCardPremiumRequestCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ReviewCardPremiumRequestCreateManyUserInputEnvelope)
    createMany?: ReviewCardPremiumRequestCreateManyUserInputEnvelope;

    @Field(() => [ReviewCardPremiumRequestWhereUniqueInput], {nullable:true})
    @Type(() => ReviewCardPremiumRequestWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ReviewCardPremiumRequestWhereUniqueInput, 'id'>>;

    @Field(() => [ReviewCardPremiumRequestWhereUniqueInput], {nullable:true})
    @Type(() => ReviewCardPremiumRequestWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ReviewCardPremiumRequestWhereUniqueInput, 'id'>>;

    @Field(() => [ReviewCardPremiumRequestWhereUniqueInput], {nullable:true})
    @Type(() => ReviewCardPremiumRequestWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ReviewCardPremiumRequestWhereUniqueInput, 'id'>>;

    @Field(() => [ReviewCardPremiumRequestWhereUniqueInput], {nullable:true})
    @Type(() => ReviewCardPremiumRequestWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ReviewCardPremiumRequestWhereUniqueInput, 'id'>>;

    @Field(() => [ReviewCardPremiumRequestUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ReviewCardPremiumRequestUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<ReviewCardPremiumRequestUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [ReviewCardPremiumRequestUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => ReviewCardPremiumRequestUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<ReviewCardPremiumRequestUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [ReviewCardPremiumRequestScalarWhereInput], {nullable:true})
    @Type(() => ReviewCardPremiumRequestScalarWhereInput)
    deleteMany?: Array<ReviewCardPremiumRequestScalarWhereInput>;
}

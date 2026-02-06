import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCardPremiumRequestCreateWithoutProjectInput } from './review-card-premium-request-create-without-project.input';
import { Type } from 'class-transformer';
import { ReviewCardPremiumRequestCreateOrConnectWithoutProjectInput } from './review-card-premium-request-create-or-connect-without-project.input';
import { ReviewCardPremiumRequestUpsertWithWhereUniqueWithoutProjectInput } from './review-card-premium-request-upsert-with-where-unique-without-project.input';
import { ReviewCardPremiumRequestCreateManyProjectInputEnvelope } from './review-card-premium-request-create-many-project-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ReviewCardPremiumRequestWhereUniqueInput } from './review-card-premium-request-where-unique.input';
import { ReviewCardPremiumRequestUpdateWithWhereUniqueWithoutProjectInput } from './review-card-premium-request-update-with-where-unique-without-project.input';
import { ReviewCardPremiumRequestUpdateManyWithWhereWithoutProjectInput } from './review-card-premium-request-update-many-with-where-without-project.input';
import { ReviewCardPremiumRequestScalarWhereInput } from './review-card-premium-request-scalar-where.input';

@InputType()
export class ReviewCardPremiumRequestUncheckedUpdateManyWithoutProjectNestedInput {

    @Field(() => [ReviewCardPremiumRequestCreateWithoutProjectInput], {nullable:true})
    @Type(() => ReviewCardPremiumRequestCreateWithoutProjectInput)
    create?: Array<ReviewCardPremiumRequestCreateWithoutProjectInput>;

    @Field(() => [ReviewCardPremiumRequestCreateOrConnectWithoutProjectInput], {nullable:true})
    @Type(() => ReviewCardPremiumRequestCreateOrConnectWithoutProjectInput)
    connectOrCreate?: Array<ReviewCardPremiumRequestCreateOrConnectWithoutProjectInput>;

    @Field(() => [ReviewCardPremiumRequestUpsertWithWhereUniqueWithoutProjectInput], {nullable:true})
    @Type(() => ReviewCardPremiumRequestUpsertWithWhereUniqueWithoutProjectInput)
    upsert?: Array<ReviewCardPremiumRequestUpsertWithWhereUniqueWithoutProjectInput>;

    @Field(() => ReviewCardPremiumRequestCreateManyProjectInputEnvelope, {nullable:true})
    @Type(() => ReviewCardPremiumRequestCreateManyProjectInputEnvelope)
    createMany?: ReviewCardPremiumRequestCreateManyProjectInputEnvelope;

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

    @Field(() => [ReviewCardPremiumRequestUpdateWithWhereUniqueWithoutProjectInput], {nullable:true})
    @Type(() => ReviewCardPremiumRequestUpdateWithWhereUniqueWithoutProjectInput)
    update?: Array<ReviewCardPremiumRequestUpdateWithWhereUniqueWithoutProjectInput>;

    @Field(() => [ReviewCardPremiumRequestUpdateManyWithWhereWithoutProjectInput], {nullable:true})
    @Type(() => ReviewCardPremiumRequestUpdateManyWithWhereWithoutProjectInput)
    updateMany?: Array<ReviewCardPremiumRequestUpdateManyWithWhereWithoutProjectInput>;

    @Field(() => [ReviewCardPremiumRequestScalarWhereInput], {nullable:true})
    @Type(() => ReviewCardPremiumRequestScalarWhereInput)
    deleteMany?: Array<ReviewCardPremiumRequestScalarWhereInput>;
}

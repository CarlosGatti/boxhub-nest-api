import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCardProjectCreateWithoutPremiumRequestsInput } from './review-card-project-create-without-premium-requests.input';
import { Type } from 'class-transformer';
import { ReviewCardProjectCreateOrConnectWithoutPremiumRequestsInput } from './review-card-project-create-or-connect-without-premium-requests.input';
import { ReviewCardProjectUpsertWithoutPremiumRequestsInput } from './review-card-project-upsert-without-premium-requests.input';
import { ReviewCardProjectWhereInput } from './review-card-project-where.input';
import { Prisma } from '@prisma/client';
import { ReviewCardProjectWhereUniqueInput } from './review-card-project-where-unique.input';
import { ReviewCardProjectUpdateToOneWithWhereWithoutPremiumRequestsInput } from './review-card-project-update-to-one-with-where-without-premium-requests.input';

@InputType()
export class ReviewCardProjectUpdateOneWithoutPremiumRequestsNestedInput {

    @Field(() => ReviewCardProjectCreateWithoutPremiumRequestsInput, {nullable:true})
    @Type(() => ReviewCardProjectCreateWithoutPremiumRequestsInput)
    create?: ReviewCardProjectCreateWithoutPremiumRequestsInput;

    @Field(() => ReviewCardProjectCreateOrConnectWithoutPremiumRequestsInput, {nullable:true})
    @Type(() => ReviewCardProjectCreateOrConnectWithoutPremiumRequestsInput)
    connectOrCreate?: ReviewCardProjectCreateOrConnectWithoutPremiumRequestsInput;

    @Field(() => ReviewCardProjectUpsertWithoutPremiumRequestsInput, {nullable:true})
    @Type(() => ReviewCardProjectUpsertWithoutPremiumRequestsInput)
    upsert?: ReviewCardProjectUpsertWithoutPremiumRequestsInput;

    @Field(() => ReviewCardProjectWhereInput, {nullable:true})
    @Type(() => ReviewCardProjectWhereInput)
    disconnect?: ReviewCardProjectWhereInput;

    @Field(() => ReviewCardProjectWhereInput, {nullable:true})
    @Type(() => ReviewCardProjectWhereInput)
    delete?: ReviewCardProjectWhereInput;

    @Field(() => ReviewCardProjectWhereUniqueInput, {nullable:true})
    @Type(() => ReviewCardProjectWhereUniqueInput)
    connect?: Prisma.AtLeast<ReviewCardProjectWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => ReviewCardProjectUpdateToOneWithWhereWithoutPremiumRequestsInput, {nullable:true})
    @Type(() => ReviewCardProjectUpdateToOneWithWhereWithoutPremiumRequestsInput)
    update?: ReviewCardProjectUpdateToOneWithWhereWithoutPremiumRequestsInput;
}

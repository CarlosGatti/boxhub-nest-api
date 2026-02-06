import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCardProjectCreateWithoutPremiumRequestsInput } from './review-card-project-create-without-premium-requests.input';
import { Type } from 'class-transformer';
import { ReviewCardProjectCreateOrConnectWithoutPremiumRequestsInput } from './review-card-project-create-or-connect-without-premium-requests.input';
import { Prisma } from '@prisma/client';
import { ReviewCardProjectWhereUniqueInput } from './review-card-project-where-unique.input';

@InputType()
export class ReviewCardProjectCreateNestedOneWithoutPremiumRequestsInput {

    @Field(() => ReviewCardProjectCreateWithoutPremiumRequestsInput, {nullable:true})
    @Type(() => ReviewCardProjectCreateWithoutPremiumRequestsInput)
    create?: ReviewCardProjectCreateWithoutPremiumRequestsInput;

    @Field(() => ReviewCardProjectCreateOrConnectWithoutPremiumRequestsInput, {nullable:true})
    @Type(() => ReviewCardProjectCreateOrConnectWithoutPremiumRequestsInput)
    connectOrCreate?: ReviewCardProjectCreateOrConnectWithoutPremiumRequestsInput;

    @Field(() => ReviewCardProjectWhereUniqueInput, {nullable:true})
    @Type(() => ReviewCardProjectWhereUniqueInput)
    connect?: Prisma.AtLeast<ReviewCardProjectWhereUniqueInput, 'id' | 'slug'>;
}

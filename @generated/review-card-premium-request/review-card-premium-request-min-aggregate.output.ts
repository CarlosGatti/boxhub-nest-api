import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ReviewCardPremiumRequestStatus } from '../prisma/review-card-premium-request-status.enum';

@ObjectType()
export class ReviewCardPremiumRequestMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => Int, {nullable:true})
    projectId?: number;

    @Field(() => String, {nullable:true})
    notes?: string;

    @Field(() => ReviewCardPremiumRequestStatus, {nullable:true})
    status?: keyof typeof ReviewCardPremiumRequestStatus;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

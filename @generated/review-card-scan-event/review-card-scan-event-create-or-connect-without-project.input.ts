import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReviewCardScanEventWhereUniqueInput } from './review-card-scan-event-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewCardScanEventCreateWithoutProjectInput } from './review-card-scan-event-create-without-project.input';

@InputType()
export class ReviewCardScanEventCreateOrConnectWithoutProjectInput {

    @Field(() => ReviewCardScanEventWhereUniqueInput, {nullable:false})
    @Type(() => ReviewCardScanEventWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewCardScanEventWhereUniqueInput, 'id'>;

    @Field(() => ReviewCardScanEventCreateWithoutProjectInput, {nullable:false})
    @Type(() => ReviewCardScanEventCreateWithoutProjectInput)
    create!: ReviewCardScanEventCreateWithoutProjectInput;
}

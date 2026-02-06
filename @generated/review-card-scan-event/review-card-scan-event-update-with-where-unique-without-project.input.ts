import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReviewCardScanEventWhereUniqueInput } from './review-card-scan-event-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewCardScanEventUpdateWithoutProjectInput } from './review-card-scan-event-update-without-project.input';

@InputType()
export class ReviewCardScanEventUpdateWithWhereUniqueWithoutProjectInput {

    @Field(() => ReviewCardScanEventWhereUniqueInput, {nullable:false})
    @Type(() => ReviewCardScanEventWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewCardScanEventWhereUniqueInput, 'id'>;

    @Field(() => ReviewCardScanEventUpdateWithoutProjectInput, {nullable:false})
    @Type(() => ReviewCardScanEventUpdateWithoutProjectInput)
    data!: ReviewCardScanEventUpdateWithoutProjectInput;
}

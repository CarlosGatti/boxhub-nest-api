import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewCardScanEventUpdateInput } from './review-card-scan-event-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ReviewCardScanEventWhereUniqueInput } from './review-card-scan-event-where-unique.input';

@ArgsType()
export class UpdateOneReviewCardScanEventArgs {

    @Field(() => ReviewCardScanEventUpdateInput, {nullable:false})
    @Type(() => ReviewCardScanEventUpdateInput)
    data!: ReviewCardScanEventUpdateInput;

    @Field(() => ReviewCardScanEventWhereUniqueInput, {nullable:false})
    @Type(() => ReviewCardScanEventWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewCardScanEventWhereUniqueInput, 'id'>;
}

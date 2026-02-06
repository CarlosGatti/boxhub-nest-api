import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReviewCardScanEventWhereUniqueInput } from './review-card-scan-event-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewCardScanEventCreateInput } from './review-card-scan-event-create.input';
import { ReviewCardScanEventUpdateInput } from './review-card-scan-event-update.input';

@ArgsType()
export class UpsertOneReviewCardScanEventArgs {

    @Field(() => ReviewCardScanEventWhereUniqueInput, {nullable:false})
    @Type(() => ReviewCardScanEventWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewCardScanEventWhereUniqueInput, 'id'>;

    @Field(() => ReviewCardScanEventCreateInput, {nullable:false})
    @Type(() => ReviewCardScanEventCreateInput)
    create!: ReviewCardScanEventCreateInput;

    @Field(() => ReviewCardScanEventUpdateInput, {nullable:false})
    @Type(() => ReviewCardScanEventUpdateInput)
    update!: ReviewCardScanEventUpdateInput;
}

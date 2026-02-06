import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReviewCardScanEventWhereUniqueInput } from './review-card-scan-event-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueReviewCardScanEventArgs {

    @Field(() => ReviewCardScanEventWhereUniqueInput, {nullable:false})
    @Type(() => ReviewCardScanEventWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewCardScanEventWhereUniqueInput, 'id'>;
}

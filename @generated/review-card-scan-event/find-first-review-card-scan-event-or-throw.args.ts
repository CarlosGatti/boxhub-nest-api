import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewCardScanEventWhereInput } from './review-card-scan-event-where.input';
import { Type } from 'class-transformer';
import { ReviewCardScanEventOrderByWithRelationInput } from './review-card-scan-event-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ReviewCardScanEventWhereUniqueInput } from './review-card-scan-event-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ReviewCardScanEventScalarFieldEnum } from './review-card-scan-event-scalar-field.enum';

@ArgsType()
export class FindFirstReviewCardScanEventOrThrowArgs {

    @Field(() => ReviewCardScanEventWhereInput, {nullable:true})
    @Type(() => ReviewCardScanEventWhereInput)
    where?: ReviewCardScanEventWhereInput;

    @Field(() => [ReviewCardScanEventOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ReviewCardScanEventOrderByWithRelationInput>;

    @Field(() => ReviewCardScanEventWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ReviewCardScanEventWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ReviewCardScanEventScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ReviewCardScanEventScalarFieldEnum>;
}

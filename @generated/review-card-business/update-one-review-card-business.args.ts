import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewCardBusinessUpdateInput } from './review-card-business-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ReviewCardBusinessWhereUniqueInput } from './review-card-business-where-unique.input';

@ArgsType()
export class UpdateOneReviewCardBusinessArgs {

    @Field(() => ReviewCardBusinessUpdateInput, {nullable:false})
    @Type(() => ReviewCardBusinessUpdateInput)
    data!: ReviewCardBusinessUpdateInput;

    @Field(() => ReviewCardBusinessWhereUniqueInput, {nullable:false})
    @Type(() => ReviewCardBusinessWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewCardBusinessWhereUniqueInput, 'id'>;
}

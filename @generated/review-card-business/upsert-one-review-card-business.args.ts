import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReviewCardBusinessWhereUniqueInput } from './review-card-business-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewCardBusinessCreateInput } from './review-card-business-create.input';
import { ReviewCardBusinessUpdateInput } from './review-card-business-update.input';

@ArgsType()
export class UpsertOneReviewCardBusinessArgs {

    @Field(() => ReviewCardBusinessWhereUniqueInput, {nullable:false})
    @Type(() => ReviewCardBusinessWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewCardBusinessWhereUniqueInput, 'id'>;

    @Field(() => ReviewCardBusinessCreateInput, {nullable:false})
    @Type(() => ReviewCardBusinessCreateInput)
    create!: ReviewCardBusinessCreateInput;

    @Field(() => ReviewCardBusinessUpdateInput, {nullable:false})
    @Type(() => ReviewCardBusinessUpdateInput)
    update!: ReviewCardBusinessUpdateInput;
}

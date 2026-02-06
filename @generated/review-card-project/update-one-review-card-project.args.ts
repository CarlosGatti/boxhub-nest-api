import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewCardProjectUpdateInput } from './review-card-project-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ReviewCardProjectWhereUniqueInput } from './review-card-project-where-unique.input';

@ArgsType()
export class UpdateOneReviewCardProjectArgs {

    @Field(() => ReviewCardProjectUpdateInput, {nullable:false})
    @Type(() => ReviewCardProjectUpdateInput)
    data!: ReviewCardProjectUpdateInput;

    @Field(() => ReviewCardProjectWhereUniqueInput, {nullable:false})
    @Type(() => ReviewCardProjectWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewCardProjectWhereUniqueInput, 'id' | 'slug'>;
}

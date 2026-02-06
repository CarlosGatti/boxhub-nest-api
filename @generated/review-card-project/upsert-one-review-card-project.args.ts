import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReviewCardProjectWhereUniqueInput } from './review-card-project-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewCardProjectCreateInput } from './review-card-project-create.input';
import { ReviewCardProjectUpdateInput } from './review-card-project-update.input';

@ArgsType()
export class UpsertOneReviewCardProjectArgs {

    @Field(() => ReviewCardProjectWhereUniqueInput, {nullable:false})
    @Type(() => ReviewCardProjectWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewCardProjectWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => ReviewCardProjectCreateInput, {nullable:false})
    @Type(() => ReviewCardProjectCreateInput)
    create!: ReviewCardProjectCreateInput;

    @Field(() => ReviewCardProjectUpdateInput, {nullable:false})
    @Type(() => ReviewCardProjectUpdateInput)
    update!: ReviewCardProjectUpdateInput;
}

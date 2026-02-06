import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReviewCardProjectWhereUniqueInput } from './review-card-project-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewCardProjectUpdateWithoutBusinessInput } from './review-card-project-update-without-business.input';

@InputType()
export class ReviewCardProjectUpdateWithWhereUniqueWithoutBusinessInput {

    @Field(() => ReviewCardProjectWhereUniqueInput, {nullable:false})
    @Type(() => ReviewCardProjectWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewCardProjectWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => ReviewCardProjectUpdateWithoutBusinessInput, {nullable:false})
    @Type(() => ReviewCardProjectUpdateWithoutBusinessInput)
    data!: ReviewCardProjectUpdateWithoutBusinessInput;
}

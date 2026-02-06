import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReviewCardProjectWhereUniqueInput } from './review-card-project-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewCardProjectUpdateWithoutUserInput } from './review-card-project-update-without-user.input';

@InputType()
export class ReviewCardProjectUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => ReviewCardProjectWhereUniqueInput, {nullable:false})
    @Type(() => ReviewCardProjectWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewCardProjectWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => ReviewCardProjectUpdateWithoutUserInput, {nullable:false})
    @Type(() => ReviewCardProjectUpdateWithoutUserInput)
    data!: ReviewCardProjectUpdateWithoutUserInput;
}

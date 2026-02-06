import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReviewCardProjectWhereUniqueInput } from './review-card-project-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewCardProjectCreateWithoutUserInput } from './review-card-project-create-without-user.input';

@InputType()
export class ReviewCardProjectCreateOrConnectWithoutUserInput {

    @Field(() => ReviewCardProjectWhereUniqueInput, {nullable:false})
    @Type(() => ReviewCardProjectWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewCardProjectWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => ReviewCardProjectCreateWithoutUserInput, {nullable:false})
    @Type(() => ReviewCardProjectCreateWithoutUserInput)
    create!: ReviewCardProjectCreateWithoutUserInput;
}

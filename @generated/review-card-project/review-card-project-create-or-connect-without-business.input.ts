import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReviewCardProjectWhereUniqueInput } from './review-card-project-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewCardProjectCreateWithoutBusinessInput } from './review-card-project-create-without-business.input';

@InputType()
export class ReviewCardProjectCreateOrConnectWithoutBusinessInput {

    @Field(() => ReviewCardProjectWhereUniqueInput, {nullable:false})
    @Type(() => ReviewCardProjectWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewCardProjectWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => ReviewCardProjectCreateWithoutBusinessInput, {nullable:false})
    @Type(() => ReviewCardProjectCreateWithoutBusinessInput)
    create!: ReviewCardProjectCreateWithoutBusinessInput;
}

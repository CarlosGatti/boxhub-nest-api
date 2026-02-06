import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReviewCardBusinessWhereUniqueInput } from './review-card-business-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewCardBusinessCreateWithoutProjectsInput } from './review-card-business-create-without-projects.input';

@InputType()
export class ReviewCardBusinessCreateOrConnectWithoutProjectsInput {

    @Field(() => ReviewCardBusinessWhereUniqueInput, {nullable:false})
    @Type(() => ReviewCardBusinessWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewCardBusinessWhereUniqueInput, 'id'>;

    @Field(() => ReviewCardBusinessCreateWithoutProjectsInput, {nullable:false})
    @Type(() => ReviewCardBusinessCreateWithoutProjectsInput)
    create!: ReviewCardBusinessCreateWithoutProjectsInput;
}

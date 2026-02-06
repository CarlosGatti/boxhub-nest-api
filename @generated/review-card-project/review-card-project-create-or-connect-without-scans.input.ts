import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReviewCardProjectWhereUniqueInput } from './review-card-project-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewCardProjectCreateWithoutScansInput } from './review-card-project-create-without-scans.input';

@InputType()
export class ReviewCardProjectCreateOrConnectWithoutScansInput {

    @Field(() => ReviewCardProjectWhereUniqueInput, {nullable:false})
    @Type(() => ReviewCardProjectWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewCardProjectWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => ReviewCardProjectCreateWithoutScansInput, {nullable:false})
    @Type(() => ReviewCardProjectCreateWithoutScansInput)
    create!: ReviewCardProjectCreateWithoutScansInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReviewCardBusinessWhereUniqueInput } from './review-card-business-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewCardBusinessCreateWithoutUserInput } from './review-card-business-create-without-user.input';

@InputType()
export class ReviewCardBusinessCreateOrConnectWithoutUserInput {

    @Field(() => ReviewCardBusinessWhereUniqueInput, {nullable:false})
    @Type(() => ReviewCardBusinessWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewCardBusinessWhereUniqueInput, 'id'>;

    @Field(() => ReviewCardBusinessCreateWithoutUserInput, {nullable:false})
    @Type(() => ReviewCardBusinessCreateWithoutUserInput)
    create!: ReviewCardBusinessCreateWithoutUserInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReviewCardBusinessWhereUniqueInput } from './review-card-business-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewCardBusinessUpdateWithoutUserInput } from './review-card-business-update-without-user.input';
import { ReviewCardBusinessCreateWithoutUserInput } from './review-card-business-create-without-user.input';

@InputType()
export class ReviewCardBusinessUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => ReviewCardBusinessWhereUniqueInput, {nullable:false})
    @Type(() => ReviewCardBusinessWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewCardBusinessWhereUniqueInput, 'id'>;

    @Field(() => ReviewCardBusinessUpdateWithoutUserInput, {nullable:false})
    @Type(() => ReviewCardBusinessUpdateWithoutUserInput)
    update!: ReviewCardBusinessUpdateWithoutUserInput;

    @Field(() => ReviewCardBusinessCreateWithoutUserInput, {nullable:false})
    @Type(() => ReviewCardBusinessCreateWithoutUserInput)
    create!: ReviewCardBusinessCreateWithoutUserInput;
}

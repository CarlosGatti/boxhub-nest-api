import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutReviewCardBusinessesInput } from './user-create-without-review-card-businesses.input';

@InputType()
export class UserCreateOrConnectWithoutReviewCardBusinessesInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutReviewCardBusinessesInput, {nullable:false})
    @Type(() => UserCreateWithoutReviewCardBusinessesInput)
    create!: UserCreateWithoutReviewCardBusinessesInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutReviewCardProjectsInput } from './user-create-without-review-card-projects.input';

@InputType()
export class UserCreateOrConnectWithoutReviewCardProjectsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutReviewCardProjectsInput, {nullable:false})
    @Type(() => UserCreateWithoutReviewCardProjectsInput)
    create!: UserCreateWithoutReviewCardProjectsInput;
}

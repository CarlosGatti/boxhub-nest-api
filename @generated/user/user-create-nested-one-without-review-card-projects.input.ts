import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutReviewCardProjectsInput } from './user-create-without-review-card-projects.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutReviewCardProjectsInput } from './user-create-or-connect-without-review-card-projects.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutReviewCardProjectsInput {

    @Field(() => UserCreateWithoutReviewCardProjectsInput, {nullable:true})
    @Type(() => UserCreateWithoutReviewCardProjectsInput)
    create?: UserCreateWithoutReviewCardProjectsInput;

    @Field(() => UserCreateOrConnectWithoutReviewCardProjectsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutReviewCardProjectsInput)
    connectOrCreate?: UserCreateOrConnectWithoutReviewCardProjectsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutReviewCardBusinessesInput } from './user-create-without-review-card-businesses.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutReviewCardBusinessesInput } from './user-create-or-connect-without-review-card-businesses.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutReviewCardBusinessesInput {

    @Field(() => UserCreateWithoutReviewCardBusinessesInput, {nullable:true})
    @Type(() => UserCreateWithoutReviewCardBusinessesInput)
    create?: UserCreateWithoutReviewCardBusinessesInput;

    @Field(() => UserCreateOrConnectWithoutReviewCardBusinessesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutReviewCardBusinessesInput)
    connectOrCreate?: UserCreateOrConnectWithoutReviewCardBusinessesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}

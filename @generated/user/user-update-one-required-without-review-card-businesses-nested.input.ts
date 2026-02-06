import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutReviewCardBusinessesInput } from './user-create-without-review-card-businesses.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutReviewCardBusinessesInput } from './user-create-or-connect-without-review-card-businesses.input';
import { UserUpsertWithoutReviewCardBusinessesInput } from './user-upsert-without-review-card-businesses.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutReviewCardBusinessesInput } from './user-update-to-one-with-where-without-review-card-businesses.input';

@InputType()
export class UserUpdateOneRequiredWithoutReviewCardBusinessesNestedInput {

    @Field(() => UserCreateWithoutReviewCardBusinessesInput, {nullable:true})
    @Type(() => UserCreateWithoutReviewCardBusinessesInput)
    create?: UserCreateWithoutReviewCardBusinessesInput;

    @Field(() => UserCreateOrConnectWithoutReviewCardBusinessesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutReviewCardBusinessesInput)
    connectOrCreate?: UserCreateOrConnectWithoutReviewCardBusinessesInput;

    @Field(() => UserUpsertWithoutReviewCardBusinessesInput, {nullable:true})
    @Type(() => UserUpsertWithoutReviewCardBusinessesInput)
    upsert?: UserUpsertWithoutReviewCardBusinessesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutReviewCardBusinessesInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutReviewCardBusinessesInput)
    update?: UserUpdateToOneWithWhereWithoutReviewCardBusinessesInput;
}

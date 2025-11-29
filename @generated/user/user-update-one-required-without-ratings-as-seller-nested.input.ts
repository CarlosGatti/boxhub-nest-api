import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutRatingsAsSellerInput } from './user-create-without-ratings-as-seller.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutRatingsAsSellerInput } from './user-create-or-connect-without-ratings-as-seller.input';
import { UserUpsertWithoutRatingsAsSellerInput } from './user-upsert-without-ratings-as-seller.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutRatingsAsSellerInput } from './user-update-to-one-with-where-without-ratings-as-seller.input';

@InputType()
export class UserUpdateOneRequiredWithoutRatingsAsSellerNestedInput {

    @Field(() => UserCreateWithoutRatingsAsSellerInput, {nullable:true})
    @Type(() => UserCreateWithoutRatingsAsSellerInput)
    create?: UserCreateWithoutRatingsAsSellerInput;

    @Field(() => UserCreateOrConnectWithoutRatingsAsSellerInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutRatingsAsSellerInput)
    connectOrCreate?: UserCreateOrConnectWithoutRatingsAsSellerInput;

    @Field(() => UserUpsertWithoutRatingsAsSellerInput, {nullable:true})
    @Type(() => UserUpsertWithoutRatingsAsSellerInput)
    upsert?: UserUpsertWithoutRatingsAsSellerInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutRatingsAsSellerInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutRatingsAsSellerInput)
    update?: UserUpdateToOneWithWhereWithoutRatingsAsSellerInput;
}

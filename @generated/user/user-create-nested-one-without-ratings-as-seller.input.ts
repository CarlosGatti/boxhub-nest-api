import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutRatingsAsSellerInput } from './user-create-without-ratings-as-seller.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutRatingsAsSellerInput } from './user-create-or-connect-without-ratings-as-seller.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutRatingsAsSellerInput {

    @Field(() => UserCreateWithoutRatingsAsSellerInput, {nullable:true})
    @Type(() => UserCreateWithoutRatingsAsSellerInput)
    create?: UserCreateWithoutRatingsAsSellerInput;

    @Field(() => UserCreateOrConnectWithoutRatingsAsSellerInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutRatingsAsSellerInput)
    connectOrCreate?: UserCreateOrConnectWithoutRatingsAsSellerInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}

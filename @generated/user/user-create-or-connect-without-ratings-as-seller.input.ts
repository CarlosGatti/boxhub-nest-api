import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutRatingsAsSellerInput } from './user-create-without-ratings-as-seller.input';

@InputType()
export class UserCreateOrConnectWithoutRatingsAsSellerInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutRatingsAsSellerInput, {nullable:false})
    @Type(() => UserCreateWithoutRatingsAsSellerInput)
    create!: UserCreateWithoutRatingsAsSellerInput;
}

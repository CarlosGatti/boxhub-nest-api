import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutRatingsAsSellerInput } from './user-update-without-ratings-as-seller.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutRatingsAsSellerInput } from './user-create-without-ratings-as-seller.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutRatingsAsSellerInput {

    @Field(() => UserUpdateWithoutRatingsAsSellerInput, {nullable:false})
    @Type(() => UserUpdateWithoutRatingsAsSellerInput)
    update!: UserUpdateWithoutRatingsAsSellerInput;

    @Field(() => UserCreateWithoutRatingsAsSellerInput, {nullable:false})
    @Type(() => UserCreateWithoutRatingsAsSellerInput)
    create!: UserCreateWithoutRatingsAsSellerInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}

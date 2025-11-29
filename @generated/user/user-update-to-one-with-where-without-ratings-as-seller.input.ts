import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutRatingsAsSellerInput } from './user-update-without-ratings-as-seller.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutRatingsAsSellerInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutRatingsAsSellerInput, {nullable:false})
    @Type(() => UserUpdateWithoutRatingsAsSellerInput)
    data!: UserUpdateWithoutRatingsAsSellerInput;
}
